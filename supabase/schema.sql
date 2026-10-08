-- =================================================================
-- Korvion Media Blog CMS - Database Schema
-- Run this in: Supabase Dashboard > SQL Editor
-- =================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For full-text search

-- =================================================================
-- CATEGORIES TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(120) NOT NULL UNIQUE,
  description TEXT,
  color VARCHAR(7) DEFAULT '#FF6B35', -- Korvion orange
  icon VARCHAR(50),
  post_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =================================================================
-- TAGS TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  slug VARCHAR(60) NOT NULL UNIQUE,
  description TEXT,
  post_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =================================================================
-- BLOG POSTS TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(350) NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL DEFAULT '',
  content_html TEXT,
  featured_image_url TEXT,
  featured_image_alt VARCHAR(300),
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name VARCHAR(150),
  author_avatar_url TEXT,
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived', 'scheduled')),
  visibility VARCHAR(20) DEFAULT 'public' CHECK (visibility IN ('public', 'private', 'password')),
  published_at TIMESTAMPTZ,
  scheduled_at TIMESTAMPTZ,
  reading_time_minutes INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  is_pinned BOOLEAN DEFAULT FALSE,
  allow_comments BOOLEAN DEFAULT TRUE,
  meta_title VARCHAR(70),
  meta_description VARCHAR(160),
  meta_keywords TEXT,
  og_image_url TEXT,
  canonical_url TEXT,
  schema_markup JSONB,
  table_of_contents JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =================================================================
-- BLOG TAGS JUNCTION TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.blog_tags (
  blog_post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_post_id, tag_id)
);

-- =================================================================
-- BLOG REVISIONS TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.blog_revisions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  blog_post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  title VARCHAR(300),
  content TEXT,
  content_html TEXT,
  revision_number INTEGER NOT NULL,
  change_summary TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =================================================================
-- BLOG REDIRECTS TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.blog_redirects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  from_slug VARCHAR(500) NOT NULL UNIQUE,
  to_slug VARCHAR(500) NOT NULL,
  redirect_type INTEGER DEFAULT 301 CHECK (redirect_type IN (301, 302)),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =================================================================
-- NEWSLETTER SUBSCRIBERS TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(150),
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced', 'pending')),
  source VARCHAR(100),
  tags TEXT[] DEFAULT '{}',
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  ip_address INET,
  metadata JSONB DEFAULT '{}'
);

-- =================================================================
-- MEDIA TABLE
-- =================================================================
CREATE TABLE IF NOT EXISTS public.media (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_filename VARCHAR(255),
  mime_type VARCHAR(100),
  size_bytes BIGINT,
  width INTEGER,
  height INTEGER,
  url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  alt_text VARCHAR(300),
  caption TEXT,
  tags TEXT[] DEFAULT '{}',
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =================================================================
-- INDEXES
-- =================================================================
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON public.blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON public.blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_featured ON public.blog_posts(is_featured) WHERE is_featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_blog_posts_fts ON public.blog_posts USING gin(to_tsvector('english', title || ' ' || COALESCE(excerpt, '') || ' ' || COALESCE(content, '')));
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_tags_slug ON public.tags(slug);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON public.newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_media_uploaded_by ON public.media(uploaded_by);
CREATE INDEX IF NOT EXISTS idx_blog_revisions_post_id ON public.blog_revisions(blog_post_id);

-- =================================================================
-- UPDATED_AT TRIGGER FUNCTION
-- =================================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_media_updated_at
  BEFORE UPDATE ON public.media
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- =================================================================
-- POST COUNT TRIGGER (auto-update category/tag post counts)
-- =================================================================
CREATE OR REPLACE FUNCTION public.update_post_counts()
RETURNS TRIGGER AS $$
BEGIN
  -- Update category count
  IF TG_TABLE_NAME = 'blog_posts' THEN
    IF OLD.category_id IS NOT NULL THEN
      UPDATE public.categories SET post_count = (
        SELECT COUNT(*) FROM public.blog_posts
        WHERE category_id = OLD.category_id AND status = 'published'
      ) WHERE id = OLD.category_id;
    END IF;
    IF NEW.category_id IS NOT NULL THEN
      UPDATE public.categories SET post_count = (
        SELECT COUNT(*) FROM public.blog_posts
        WHERE category_id = NEW.category_id AND status = 'published'
      ) WHERE id = NEW.category_id;
    END IF;
  END IF;

  -- Update tag count
  IF TG_TABLE_NAME = 'blog_tags' THEN
    UPDATE public.tags SET post_count = (
      SELECT COUNT(*) FROM public.blog_tags bt
      JOIN public.blog_posts bp ON bt.blog_post_id = bp.id
      WHERE bt.tag_id = NEW.tag_id AND bp.status = 'published'
    ) WHERE id = NEW.tag_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_category_post_count
  AFTER INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_post_counts();

CREATE TRIGGER update_tag_post_count
  AFTER INSERT OR DELETE ON public.blog_tags
  FOR EACH ROW EXECUTE FUNCTION public.update_post_counts();

-- =================================================================
-- ROW LEVEL SECURITY (RLS)
-- =================================================================

-- Enable RLS on all tables
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_redirects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- BLOG POSTS policies
CREATE POLICY "Public can read published posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published' AND (scheduled_at IS NULL OR scheduled_at <= NOW()));

CREATE POLICY "Authenticated users can manage posts"
  ON public.blog_posts FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- CATEGORIES policies
CREATE POLICY "Public can read categories"
  ON public.categories FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can manage categories"
  ON public.categories FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- TAGS policies
CREATE POLICY "Public can read tags"
  ON public.tags FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can manage tags"
  ON public.tags FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- BLOG TAGS policies
CREATE POLICY "Public can read blog_tags"
  ON public.blog_tags FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can manage blog_tags"
  ON public.blog_tags FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- BLOG REVISIONS policies
CREATE POLICY "Authenticated users can manage revisions"
  ON public.blog_revisions FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- BLOG REDIRECTS policies
CREATE POLICY "Public can read redirects"
  ON public.blog_redirects FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Authenticated users can manage redirects"
  ON public.blog_redirects FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- NEWSLETTER SUBSCRIBERS policies
CREATE POLICY "Users can subscribe"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "Users can update their own subscription"
  ON public.newsletter_subscribers FOR UPDATE
  USING (TRUE);

CREATE POLICY "Authenticated users can read all subscribers"
  ON public.newsletter_subscribers FOR SELECT
  USING (auth.role() = 'authenticated');

-- MEDIA policies
CREATE POLICY "Public can read media"
  ON public.media FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can manage media"
  ON public.media FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- =================================================================
-- STORAGE BUCKETS (run separately or via Supabase dashboard)
-- =================================================================
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('media-library', 'media-library', true);

-- Storage policies (run after creating buckets)
-- CREATE POLICY "Public read blog images" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
-- CREATE POLICY "Auth upload blog images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
-- CREATE POLICY "Auth update blog images" ON storage.objects FOR UPDATE USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
-- CREATE POLICY "Auth delete blog images" ON storage.objects FOR DELETE USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

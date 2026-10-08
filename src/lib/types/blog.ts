import type { Tables } from './database';

// Core blog types derived from DB schema
export type BlogPost = Tables<'blog_posts'>;
export type Category = Tables<'categories'>;
export type Tag = Tables<'tags'>;
export type BlogRevision = Tables<'blog_revisions'>;
export type BlogRedirect = Tables<'blog_redirects'>;
export type NewsletterSubscriber = Tables<'newsletter_subscribers'>;
export type MediaItem = Tables<'media'>;

// Extended types with relations
export type BlogPostWithRelations = BlogPost & {
  category?: Category | null;
  tags?: Tag[];
};

export type BlogPostListItem = Pick<
  BlogPost,
  | 'id'
  | 'title'
  | 'slug'
  | 'excerpt'
  | 'featured_image_url'
  | 'featured_image_alt'
  | 'status'
  | 'published_at'
  | 'reading_time_minutes'
  | 'view_count'
  | 'is_featured'
  | 'author_name'
  | 'author_avatar_url'
  | 'meta_description'
> & {
  category?: Pick<Category, 'id' | 'name' | 'slug' | 'color'> | null;
  tags?: Pick<Tag, 'id' | 'name' | 'slug'>[];
};

// Status and visibility enums
export type PostStatus = BlogPost['status'];
export type PostVisibility = BlogPost['visibility'];

// Form/editor types
export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  content_html: string;
  featured_image_url: string;
  featured_image_alt: string;
  category_id: string;
  tag_ids: string[];
  status: PostStatus;
  visibility: PostVisibility;
  published_at: string | null;
  scheduled_at: string | null;
  allow_comments: boolean;
  is_featured: boolean;
  is_pinned: boolean;
  // SEO
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  og_image_url: string;
  canonical_url: string;
}

// Pagination
export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}

// API response types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

// Table of contents
export interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

// Newsletter subscription
export interface NewsletterSubscribeInput {
  email: string;
  name?: string;
  source?: string;
}

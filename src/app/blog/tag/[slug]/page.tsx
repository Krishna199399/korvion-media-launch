import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Tag as TagIcon, ArrowLeft } from 'lucide-react';
import { getBlogsByTag, getAllTags } from '@/actions/blog';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tags = await getAllTags();
  const currentTag = tags.find((t) => t.slug === slug);

  const tagName = currentTag
    ? currentTag.name
    : slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

  const title = `Articles Tagged #${tagName} | Korvion Media Blog`;
  const description = `Read all articles, guides, and tutorials tagged with #${tagName} from the Korvion Media team.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const [tags, posts] = await Promise.all([
    getAllTags(),
    getBlogsByTag(slug),
  ]);

  const currentTag = tags.find((t) => t.slug === slug);
  const tagName = currentTag
    ? currentTag.name
    : slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Tag Hero Banner */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">#{tagName}</span>
          </nav>

          {/* Heading */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <TagIcon className="w-3.5 h-3.5" />
              <span>Tag Topic</span>
            </div>
            <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              #{tagName}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore all articles, frameworks, and deep dives tagged with #{tagName}.
            </p>
            <p className="text-sm font-medium text-primary">
              Showing {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Explore Other Tags Bar */}
        <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Explore Popular Tags:
            </span>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const isActive = t.slug === slug;
              return (
                <Link
                  key={t.slug}
                  href={`/blog/tag/${t.slug}`}
                  className={`px-3 py-1 text-xs font-medium rounded-full border transition-all ${
                    isActive
                      ? 'border-primary bg-primary text-white shadow-sm'
                      : 'border-border bg-card/70 hover:border-primary/40 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  #{t.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Blog Grid or Empty State */}
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-border bg-card/30 space-y-4">
            <TagIcon className="w-12 h-12 text-muted-foreground mx-auto" />
            <h3 className="font-space-grotesk text-xl font-bold">
              No articles found with this tag
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We couldn't find any articles tagged with #{tagName}. Try checking other tags or browsing the full blog.
            </p>
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}

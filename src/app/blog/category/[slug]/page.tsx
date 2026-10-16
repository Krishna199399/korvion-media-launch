import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, FolderOpen, ArrowLeft } from 'lucide-react';
import {
  getBlogsByCategory,
  getAllCategories,
  type Category,
} from '@/actions/blog';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getAllCategories();
  const currentCategory = categories.find((c) => c.slug === slug);

  const title = currentCategory
    ? `${currentCategory.name} Articles & Guides | Korvion Media Blog`
    : `Articles in ${slug} | Korvion Media Blog`;

  const description = currentCategory
    ? `Explore our latest articles, playbooks, and strategic insights on ${currentCategory.name} by the Korvion Media team.`
    : `Explore our strategic insights and articles on ${slug}.`;

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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [categories, posts] = await Promise.all([
    getAllCategories(),
    getBlogsByCategory(slug),
  ]);

  const currentCategory = categories.find((c) => c.slug === slug);
  const categoryName = currentCategory
    ? currentCategory.name
    : slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Category Hero Banner */}
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
            <span className="text-foreground font-medium">{categoryName}</span>
          </nav>

          {/* Heading */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Category</span>
            </div>
            <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Curated perspectives, playbooks, and case studies to help you master {categoryName.toLowerCase()}.
            </p>
            <p className="text-sm font-medium text-primary">
              Showing {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Category Navigation Pills */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg border border-border bg-card hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
              >
                All Articles
              </Link>
              {categories.map((cat) => {
                const isActive = cat.slug === slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg border transition-all ${
                      isActive
                        ? 'border-primary bg-primary text-white shadow-sm'
                        : 'border-border bg-card hover:border-primary/40 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Blog Grid or Empty State */}
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-border bg-card/30 space-y-4">
            <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto" />
            <h3 className="font-space-grotesk text-xl font-bold">
              No articles found in this category
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We haven't published articles in this category yet. Check back soon or explore our other topics.
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { Search as SearchIcon, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { searchBlogs, getAllCategories, getPublishedBlogs } from '@/actions/blog';
import { SearchBar } from '@/components/blog/SearchBar';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim() || '';

  return {
    title: query
      ? `Search Results for "${query}" | Korvion Media Blog`
      : 'Search Articles | Korvion Media Blog',
    description: `Search our comprehensive library of digital marketing, performance growth, and technology articles.`,
    robots: {
      index: false, // Prevent search result pages from duplicate SEO indexing
      follow: true,
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || '';

  const [categories, searchResults, { posts: recentPosts }] = await Promise.all([
    getAllCategories(),
    query ? searchBlogs(query) : Promise.resolve([]),
    getPublishedBlogs({ limit: 6 }),
  ]);

  const displayPosts = query ? searchResults : recentPosts;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Search Header Banner */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Search</span>
          </nav>

          <h1 className="font-space-grotesk text-4xl sm:text-5xl font-bold tracking-tight">
            Search Our Insights
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Discover frameworks, case studies, and actionable insights across our entire publication.
          </p>

          <div className="pt-2 flex justify-center">
            <SearchBar
              defaultValue={query}
              placeholder="Search by topic, keyword, or strategy..."
            />
          </div>

          {/* Quick Categories Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mr-1">
              Popular topics:
            </span>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-card/60 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border">
          <div>
            <h2 className="font-space-grotesk text-2xl font-bold">
              {query ? (
                <>
                  Results for &ldquo;<span className="text-primary">{query}</span>&rdquo;
                </>
              ) : (
                'Recent Articles'
              )}
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              {query ? (
                `Found ${searchResults.length} ${
                  searchResults.length === 1 ? 'article' : 'articles'
                } matching your query`
              ) : (
                'Explore our latest featured articles or enter a search query above'
              )}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Results or Empty State */}
        {query && searchResults.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-border bg-card/30 space-y-4">
            <SearchIcon className="w-12 h-12 text-muted-foreground mx-auto opacity-60" />
            <h3 className="font-space-grotesk text-xl font-bold">
              No results found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We couldn't find any articles matching your search terms. Try searching with different keywords, browsing categories, or checking spelling.
            </p>
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Explore All Articles
              </Link>
            </div>
          </div>
        ) : (
          <BlogGrid posts={displayPosts} />
        )}
      </main>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}

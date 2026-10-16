import type { Metadata } from 'next';
import { BlogHero } from '@/components/blog/BlogHero';
import { FeaturedBlogCard } from '@/components/blog/FeaturedBlogCard';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';
import { BlogPageClient } from './BlogPageClient';
import {
  getPublishedBlogs,
  getFeaturedPost,
  getAllCategories,
} from '@/actions/blog';

export const metadata: Metadata = {
  title: 'Blog — Insights & Digital Growth | Korvion Media',
  description:
    'Expert perspectives on digital marketing, technology, and business growth. Learn from the Korvion Media team.',
  openGraph: {
    title: 'Blog — Insights & Digital Growth | Korvion Media',
    description:
      'Expert perspectives on digital marketing, technology, and business growth.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const [featuredPost, { posts }, categories] = await Promise.all([
    getFeaturedPost(),
    getPublishedBlogs({ limit: 9 }),
    getAllCategories(),
  ]);

  // Filter out featured post from grid if it exists
  const gridPosts = featuredPost
    ? posts.filter((post) => post.id !== featuredPost.id).slice(0, 6)
    : posts.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BlogHero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Featured Post */}
        {featuredPost && (
          <section>
            <FeaturedBlogCard post={featuredPost} />
          </section>
        )}

        {/* Latest Articles with Category Filter */}
        <section className="space-y-8">
          <div>
            <h2 className="font-space-grotesk text-3xl font-bold mb-2">
              Latest Articles
            </h2>
            <p className="text-muted-foreground">
              Explore our latest insights and expert perspectives
            </p>
          </div>

          <BlogPageClient initialPosts={gridPosts} categories={categories} />
        </section>
      </div>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}

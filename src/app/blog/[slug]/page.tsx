import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Tag as TagIcon, Sparkles, ArrowRight } from 'lucide-react';
import {
  getBlogBySlug,
  getRelatedPosts,
  getPublishedBlogs,
  incrementViewCount,
} from '@/actions/blog';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { ArticleContent } from '@/components/blog/ArticleContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorCard } from '@/components/blog/AuthorCard';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ArticleNavigation } from '@/components/blog/ArticleNavigation';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { ReadingProgressBar } from '@/components/blog/ReadingProgressBar';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Korvion Media',
      description: 'The requested article could not be found.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korvionmedia.com';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Korvion Media Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  // Increment view count in background
  incrementViewCount(post.id).catch(() => {});

  // Fetch related posts and all published posts to calculate prev/next
  const [relatedPosts, { posts: allPublished }] = await Promise.all([
    getRelatedPosts(post.id, post.category, 3),
    getPublishedBlogs({ limit: 50 }),
  ]);

  const currentIndex = allPublished.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPublished[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < allPublished.length - 1
      ? allPublished[currentIndex + 1]
      : null;

  const currentUrl = `/blog/${post.slug}`;

  // JSON-LD Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://korvionmedia.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Korvion Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://korvionmedia.com/favicon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://korvionmedia.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Scroll Reading Progress */}
      <ReadingProgressBar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header & Hero */}
      <ArticleHeader post={post} currentUrl={currentUrl} />

      {/* Main Reading Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* HTML Article Content */}
            <ArticleContent content={post.content} />

            {/* Tags Pills */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
                  <TagIcon className="w-3.5 h-3.5 text-primary" />
                  <span>Tags:</span>
                </div>
                {post.tags.map((tag) => {
                  const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tagSlug}`}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all duration-200 border border-border"
                    >
                      #{tag}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Share Footer */}
            <div className="p-4 rounded-xl border border-border bg-card/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-space-grotesk font-semibold text-sm">
                  Found this insightful?
                </p>
                <p className="text-xs text-muted-foreground">
                  Share this article with fellow founders and marketers
                </p>
              </div>
              <ShareButtons url={currentUrl} title={post.title} />
            </div>

            {/* Author Card */}
            <AuthorCard author={post.author} />

            {/* Prev / Next Article Navigation */}
            <ArticleNavigation prevPost={prevPost} nextPost={nextPost} />
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Table of Contents */}
              <TableOfContents content={post.content} />

              {/* Sidebar CTA Widget */}
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 space-y-4 shadow-sm">
                <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Growth Engine</span>
                </div>
                <h3 className="font-space-grotesk text-xl font-bold leading-snug">
                  Ready to print revenue for your brand?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Partner with Korvion Media for full-stack performance marketing, AI automation, and high-converting systems.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors group shadow-sm"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <RelatedPosts posts={relatedPosts} categoryName={post.category} />
        </div>
      </main>

      {/* Newsletter Signup */}
      <NewsletterCTA />
    </div>
  );
}

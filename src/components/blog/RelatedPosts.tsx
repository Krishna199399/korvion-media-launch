'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { BlogCard } from './BlogCard';
import type { Blog } from '@/actions/blog';

interface RelatedPostsProps {
  posts: Blog[];
  categoryName?: string;
  className?: string;
}

export function RelatedPosts({
  posts,
  categoryName,
  className = '',
}: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const categorySlug = categoryName
    ? categoryName.toLowerCase().replace(/\s+/g, '-')
    : '';

  return (
    <section className={`space-y-8 pt-8 border-t border-border ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recommended Reading</span>
          </div>
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold tracking-tight">
            Related Articles
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Explore more insights {categoryName ? `in ${categoryName}` : 'from our experts'}
          </p>
        </div>

        {categorySlug && (
          <Link
            href={`/blog/category/${categorySlug}`}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <span>View all in {categoryName}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Blog } from '@/actions/blog';

interface ArticleNavigationProps {
  prevPost?: Blog | null;
  nextPost?: Blog | null;
  className?: string;
}

export function ArticleNavigation({
  prevPost,
  nextPost,
  className = '',
}: ArticleNavigationProps) {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 border-y border-border ${className}`}
      aria-label="Article navigation"
    >
      {/* Previous Post */}
      {prevPost ? (
        <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex flex-col justify-between h-full p-5 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-200"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors mb-2">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Article</span>
            </div>
            <p className="font-space-grotesk font-bold text-base sm:text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {prevPost.title}
            </p>
          </Link>
        </motion.div>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Post */}
      {nextPost ? (
        <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col justify-between h-full p-5 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-200 text-right sm:text-right"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors mb-2">
              <span>Next Article</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="font-space-grotesk font-bold text-base sm:text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {nextPost.title}
            </p>
          </Link>
        </motion.div>
      ) : (
        <div className="hidden sm:block" />
      )}
    </nav>
  );
}

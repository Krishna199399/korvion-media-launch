'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import type { Blog } from '@/actions/blog';

interface BlogCardProps {
  post: Blog;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block h-full rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300"
      >
        {/* Featured Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {/* Category Pill */}
          <div className="inline-block">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-primary/10 text-primary">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-space-grotesk text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
            <span className="font-medium">{post.author}</span>
            <div className="flex items-center gap-4">
              <span>
                {post.publishedAt
                  ? format(new Date(post.publishedAt), 'MMM d, yyyy')
                  : 'Draft'}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

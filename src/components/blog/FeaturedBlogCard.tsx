'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, ArrowRight } from 'lucide-react';
import type { Blog } from '@/actions/blog';

interface FeaturedBlogCardProps {
  post: Blog;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-elegant"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden bg-muted">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              unoptimized
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center space-y-6">
            {/* Category Pill */}
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium uppercase tracking-wide rounded-full bg-primary text-white">
                Featured
              </span>
            </div>

            {/* Title */}
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold leading-tight hover:text-primary transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
                  {post.author.charAt(0)}
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <span>
                {post.publishedAt
                  ? format(new Date(post.publishedAt), 'MMM d, yyyy')
                  : 'Draft'}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors group">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ChevronRight, Clock } from 'lucide-react';
import { ShareButtons } from './ShareButtons';
import type { Blog } from '@/actions/blog';

interface ArticleHeaderProps {
  post: Blog;
  currentUrl: string;
}

export function ArticleHeader({ post, currentUrl }: ArticleHeaderProps) {
  return (
    <header className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-primary transition-colors">
          Blog
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link
          href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="hover:text-primary transition-colors"
        >
          {post.category}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="truncate max-w-[200px]">{post.title}</span>
      </nav>

      {/* Category Pill */}
      <div>
        <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-primary/10 text-primary">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-xl text-muted-foreground leading-relaxed">
        {post.excerpt}
      </p>

      {/* Meta Row */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
            {post.author.charAt(0)}
          </div>
          <span className="font-medium text-foreground">{post.author}</span>
        </div>
        <span>•</span>
        <span>
          {post.publishedAt
            ? format(new Date(post.publishedAt), 'MMM d, yyyy')
            : 'Draft'}
        </span>
        {post.updatedAt && post.updatedAt !== post.publishedAt && (
          <>
            <span>•</span>
            <span>Updated {format(new Date(post.updatedAt), 'MMM d, yyyy')}</span>
          </>
        )}
        <span>•</span>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.readingTime} min read</span>
        </div>
      </div>

      {/* Share Buttons */}
      <ShareButtons url={currentUrl} title={post.title} />

      {/* Featured Image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
}

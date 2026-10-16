'use client';

import { useState } from 'react';
import { CategoryNav } from '@/components/blog/CategoryNav';
import { BlogGrid } from '@/components/blog/BlogGrid';
import type { Blog, Category } from '@/actions/blog';

interface BlogPageClientProps {
  initialPosts: Blog[];
  categories: Category[];
}

export function BlogPageClient({ initialPosts, categories }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? initialPosts
    : initialPosts.filter(
        (post) => post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
      );

  return (
    <div className="space-y-12">
      <CategoryNav
        categories={categories}
        activeSlug={activeCategory}
        onSelect={setActiveCategory}
      />
      
      <BlogGrid posts={filteredPosts} />

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

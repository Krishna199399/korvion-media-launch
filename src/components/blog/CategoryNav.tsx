'use client';

import { motion } from 'framer-motion';
import type { Category } from '@/actions/blog';

interface CategoryNavProps {
  categories: Category[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}

export function CategoryNav({ categories, activeSlug, onSelect }: CategoryNavProps) {
  const allCategories = [{ name: 'All', slug: 'all' }, ...categories];

  return (
    <div className="relative">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-4 border-b border-border">
        {allCategories.map((category) => {
          const isActive = activeSlug === category.slug;
          
          return (
            <button
              key={category.slug}
              onClick={() => onSelect(category.slug)}
              className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.name}
              
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

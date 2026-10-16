'use client';

import { useMemo } from 'react';
import { sanitizeHtml } from '@/lib/utils/sanitize';

interface ArticleContentProps {
  content: string;
  className?: string;
}

/**
 * Ensures all h2 and h3 headers have an ID matching their text slug
 * so Table of Contents anchoring works reliably.
 */
function ensureHeadingIds(html: string): string {
  return html.replace(
    /<h([23])(?:\s+id=["']([^"']*)["'])?([^>]*)>(.*?)<\/h\1>/gi,
    (match, level, existingId, restAttrs, text) => {
      const cleanText = text.replace(/<[^>]*>/g, '').trim();
      const id =
        existingId ||
        cleanText
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      return `<h${level} id="${id}" ${restAttrs}>${text}</h${level}>`;
    }
  );
}

export function ArticleContent({ content, className = '' }: ArticleContentProps) {
  const processedHtml = useMemo(() => {
    if (!content) return '';
    const withIds = ensureHeadingIds(content);
    return sanitizeHtml(withIds);
  }, [content]);

  return (
    <article
      className={`tiptap-editor max-w-none text-foreground/90 font-sans leading-relaxed text-base sm:text-lg ${className}`}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}

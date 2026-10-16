'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ListCollapse, ChevronRight } from 'lucide-react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings?: TocItem[];
  content?: string;
  className?: string;
}

export function extractHeadingsFromHtml(html: string): TocItem[] {
  if (typeof window === 'undefined') {
    // Basic regex parser for SSR
    const regex = /<h([23])(?:\s+id=["']([^"']*)["'])?[^>]*>(.*?)<\/h\1>/gi;
    const items: TocItem[] = [];
    let match;
    while ((match = regex.exec(html)) !== null) {
      const level = parseInt(match[1], 10);
      const text = match[3].replace(/<[^>]*>/g, '').trim();
      const id =
        match[2] ||
        text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      if (text) {
        items.push({ id, text, level });
      }
    }
    return items;
  }

  // Browser parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const elements = doc.querySelectorAll('h2, h3');
  const items: TocItem[] = [];

  elements.forEach((el) => {
    const text = el.textContent?.trim() || '';
    if (!text) return;
    const level = parseInt(el.tagName.replace('H', ''), 10);
    const id =
      el.id ||
      text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    items.push({ id, text, level });
  });

  return items;
}

export function TableOfContents({
  headings: initialHeadings,
  content,
  className = '',
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>(initialHeadings || []);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (initialHeadings && initialHeadings.length > 0) {
      setHeadings(initialHeadings);
    } else if (content) {
      setHeadings(extractHeadingsFromHtml(content));
    }
  }, [initialHeadings, content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0.1,
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      className={`rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-4 shadow-sm ${className}`}
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 font-space-grotesk text-sm font-bold uppercase tracking-wider text-foreground pb-2 border-b border-border/60">
        <ListCollapse className="w-4 h-4 text-primary" />
        <span>Table of Contents</span>
      </div>

      <ul className="space-y-1.5 text-sm">
        {headings.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={`${item.level === 3 ? 'pl-4' : 'pl-0'}`}
            >
              <button
                type="button"
                onClick={() => scrollToHeading(item.id)}
                className={`group flex items-start gap-1.5 w-full text-left py-1 transition-all duration-200 text-xs sm:text-sm ${
                  isActive
                    ? 'font-medium text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <ChevronRight
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform ${
                    isActive
                      ? 'text-primary translate-x-0.5'
                      : 'text-muted-foreground/40 group-hover:text-foreground'
                  }`}
                />
                <span className="line-clamp-2">{item.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

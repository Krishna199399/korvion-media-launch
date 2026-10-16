'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, Trash2, Check } from 'lucide-react';
import { MediaItem } from '@/actions/media';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface MediaGridProps {
  items: MediaItem[];
  selectable?: boolean;
  selectedId?: string;
  onSelect?: (item: MediaItem) => void;
  onDelete?: (id: string) => void;
  onView?: (item: MediaItem) => void;
  isLoading?: boolean;
}

export function MediaGrid({
  items,
  selectable = false,
  selectedId,
  onSelect,
  onDelete,
  onView,
  isLoading = false,
}: MediaGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-lg" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-muted p-4 mb-4">
          <Image
            src="/icons/image-placeholder.svg"
            alt="No images"
            width={48}
            height={48}
            className="opacity-50"
          />
        </div>
        <p className="text-muted-foreground">No images found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => {
        const isSelected = selectedId === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              'relative aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer group',
              isSelected
                ? 'border-primary shadow-md'
                : 'border-border hover:border-primary/50'
            )}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => {
              if (selectable && onSelect) {
                onSelect(item);
              } else if (onView) {
                onView(item);
              }
            }}
          >
            <img
              src={item.thumbnailUrl}
              alt={item.alt}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            {(isHovered || isSelected) && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2 transition-opacity">
                {selectable && isSelected && (
                  <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}

                {!selectable && (
                  <>
                    {onView && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          onView(item);
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(item.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </>
                )}
              </div>
            )}

            {/* File Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-white truncate">{item.fileName}</p>
              <p className="text-xs text-white/70">
                {item.width} × {item.height} · {(item.fileSize / 1024 / 1024).toFixed(2)}MB
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

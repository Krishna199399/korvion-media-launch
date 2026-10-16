'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle } from 'lucide-react';
import { isValidSlug, generateSlug } from '@/lib/utils/slug';
import { useEffect } from 'react';

interface MetadataPanelProps {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  onTitleChange: (title: string) => void;
  onSlugChange: (slug: string) => void;
  onExcerptChange: (excerpt: string) => void;
  onCategoryChange: (category: string) => void;
  onTagsChange: (tags: string[]) => void;
  onFeaturedChange: (featured: boolean) => void;
  errors?: {
    title?: string;
    slug?: string;
    excerpt?: string;
    category?: string;
  };
}

const CATEGORIES = [
  'AI & Automation',
  'SEO',
  'Web Development',
  'Social Media',
  'Digital Marketing',
  'Branding',
];

export function MetadataPanel({
  title,
  slug,
  excerpt,
  category,
  tags,
  featured,
  readingTime,
  onTitleChange,
  onSlugChange,
  onExcerptChange,
  onCategoryChange,
  onTagsChange,
  onFeaturedChange,
  errors,
}: MetadataPanelProps) {
  // Auto-generate slug from title when title changes and slug is empty
  useEffect(() => {
    if (title && !slug) {
      onSlugChange(generateSlug(title));
    }
  }, [title, slug, onSlugChange]);

  const handleTagsInput = (value: string) => {
    // Split by comma and trim each tag
    const newTags = value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    onTagsChange(newTags);
  };

  const isSlugValid = slug ? isValidSlug(slug) : false;
  const excerptLength = excerpt.length;
  const excerptMaxLength = 160;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Metadata</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">
            Title <span className="text-destructive">*</span>
          </Label>
          <Input
            id="title"
            placeholder="Enter blog post title..."
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className={errors?.title ? 'border-destructive' : ''}
          />
          {errors?.title && (
            <p className="text-sm text-destructive">{errors.title}</p>
          )}
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug">
            Slug <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <Input
              id="slug"
              placeholder="url-friendly-slug"
              value={slug}
              onChange={(e) => onSlugChange(e.target.value)}
              className={errors?.slug ? 'border-destructive pr-10' : 'pr-10'}
            />
            {slug && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {isSlugValid ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" />
                )}
              </div>
            )}
          </div>
          {errors?.slug && (
            <p className="text-sm text-destructive">{errors.slug}</p>
          )}
          {slug && !isSlugValid && !errors?.slug && (
            <p className="text-xs text-muted-foreground">
              Slug can only contain lowercase letters, numbers, and hyphens
            </p>
          )}
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="excerpt">Excerpt</Label>
            <span
              className={`text-xs ${
                excerptLength > excerptMaxLength
                  ? 'text-destructive'
                  : 'text-muted-foreground'
              }`}
            >
              {excerptLength}/{excerptMaxLength}
            </span>
          </div>
          <Textarea
            id="excerpt"
            placeholder="Brief description of your blog post..."
            value={excerpt}
            onChange={(e) => onExcerptChange(e.target.value)}
            rows={3}
            className={errors?.excerpt ? 'border-destructive' : ''}
          />
          {errors?.excerpt && (
            <p className="text-sm text-destructive">{errors.excerpt}</p>
          )}
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category">
            Category <span className="text-destructive">*</span>
          </Label>
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger
              id="category"
              className={errors?.category ? 'border-destructive' : ''}
            >
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors?.category && (
            <p className="text-sm text-destructive">{errors.category}</p>
          )}
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            placeholder="Enter tags separated by commas"
            value={tags.join(', ')}
            onChange={(e) => handleTagsInput(e.target.value)}
          />
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Featured */}
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-0.5">
            <Label htmlFor="featured">Featured Post</Label>
            <p className="text-xs text-muted-foreground">
              Show this post on the homepage
            </p>
          </div>
          <Switch
            id="featured"
            checked={featured}
            onCheckedChange={onFeaturedChange}
          />
        </div>

        {/* Reading Time (Read-only) */}
        <div className="space-y-2">
          <Label>Reading Time</Label>
          <div>
            <Badge variant="outline">{readingTime}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

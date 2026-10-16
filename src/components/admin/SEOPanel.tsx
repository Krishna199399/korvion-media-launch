'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SEOPanelProps {
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  robotsIndex: boolean;
  robotsFollow: boolean;
  onSeoTitleChange: (value: string) => void;
  onSeoDescriptionChange: (value: string) => void;
  onCanonicalUrlChange: (value: string) => void;
  onOgTitleChange: (value: string) => void;
  onOgDescriptionChange: (value: string) => void;
  onOgImageChange: (value: string) => void;
  onRobotsIndexChange: (value: boolean) => void;
  onRobotsFollowChange: (value: boolean) => void;
}

export function SEOPanel({
  seoTitle,
  seoDescription,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  robotsIndex,
  robotsFollow,
  onSeoTitleChange,
  onSeoDescriptionChange,
  onCanonicalUrlChange,
  onOgTitleChange,
  onOgDescriptionChange,
  onOgImageChange,
  onRobotsIndexChange,
  onRobotsFollowChange,
}: SEOPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const seoTitleLength = seoTitle.length;
  const seoDescriptionLength = seoDescription.length;

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="cursor-pointer hover:bg-accent/50 transition-colors">
            <div className="flex items-center justify-between">
              <CardTitle>SEO Settings</CardTitle>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            {/* SEO Title */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="seo-title">SEO Title</Label>
                <span
                  className={`text-xs ${
                    seoTitleLength > 60
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                  }`}
                >
                  {seoTitleLength}/60
                </span>
              </div>
              <Input
                id="seo-title"
                placeholder="Optimized title for search engines"
                value={seoTitle}
                onChange={(e) => onSeoTitleChange(e.target.value)}
              />
            </div>

            {/* SEO Description */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="seo-description">SEO Description</Label>
                <span
                  className={`text-xs ${
                    seoDescriptionLength > 160
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                  }`}
                >
                  {seoDescriptionLength}/160
                </span>
              </div>
              <Textarea
                id="seo-description"
                placeholder="Optimized description for search engines"
                value={seoDescription}
                onChange={(e) => onSeoDescriptionChange(e.target.value)}
                rows={3}
              />
            </div>

            {/* Canonical URL */}
            <div className="space-y-2">
              <Label htmlFor="canonical-url">Canonical URL</Label>
              <Input
                id="canonical-url"
                type="url"
                placeholder="https://korvionmedia.com/blog/..."
                value={canonicalUrl}
                onChange={(e) => onCanonicalUrlChange(e.target.value)}
              />
            </div>

            {/* Open Graph Section */}
            <div className="space-y-4 pt-4 border-t">
              <h4 className="font-medium text-sm">Open Graph</h4>

              <div className="space-y-2">
                <Label htmlFor="og-title">OG Title</Label>
                <Input
                  id="og-title"
                  placeholder="Title for social media shares"
                  value={ogTitle}
                  onChange={(e) => onOgTitleChange(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-description">OG Description</Label>
                <Textarea
                  id="og-description"
                  placeholder="Description for social media shares"
                  value={ogDescription}
                  onChange={(e) => onOgDescriptionChange(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-image">OG Image URL</Label>
                <Input
                  id="og-image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={ogImage}
                  onChange={(e) => onOgImageChange(e.target.value)}
                />
              </div>
            </div>

            {/* Robots Meta */}
            <div className="space-y-4 pt-4 border-t">
              <h4 className="font-medium text-sm">Robots Meta</h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="robots-index">Index</Label>
                  <Select
                    value={robotsIndex ? 'index' : 'noindex'}
                    onValueChange={(value) =>
                      onRobotsIndexChange(value === 'index')
                    }
                  >
                    <SelectTrigger id="robots-index">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="index">Index</SelectItem>
                      <SelectItem value="noindex">No Index</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="robots-follow">Follow</Label>
                  <Select
                    value={robotsFollow ? 'follow' : 'nofollow'}
                    onValueChange={(value) =>
                      onRobotsFollowChange(value === 'follow')
                    }
                  >
                    <SelectTrigger id="robots-follow">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="follow">Follow</SelectItem>
                      <SelectItem value="nofollow">No Follow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Google Search Preview */}
            <div className="space-y-2 pt-4 border-t">
              <h4 className="font-medium text-sm">Google Search Preview</h4>
              <div className="bg-muted p-4 rounded-lg space-y-1">
                <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                  {seoTitle || 'Your SEO Title Here'}
                </div>
                <div className="text-xs text-green-700">
                  {canonicalUrl || 'https://korvionmedia.com/blog/your-post'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {seoDescription || 'Your SEO description will appear here...'}
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

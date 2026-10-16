'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import slugify from 'slugify';
import { Image as ImageIcon } from 'lucide-react';
import { Category, CategoryStatus } from '@/actions/category';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MediaLibraryModal } from './MediaLibraryModal';

const categorySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-safe (lowercase, hyphens only)'),
  description: z.string().optional(),
  image: z.string().nullable().optional(),
  seoTitle: z.string().max(60, 'SEO Title must be 60 characters or less').optional(),
  seoDescription: z.string().max(160, 'SEO Description must be 160 characters or less').optional(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
});

type CategoryFormData = z.infer<typeof categorySchema>;

interface CategoryFormProps {
  category?: Category | null;
  onSubmit: (data: CategoryFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function CategoryForm({
  category,
  onSubmit,
  onCancel,
  isLoading = false,
}: CategoryFormProps) {
  const [slugEdited, setSlugEdited] = useState(false);
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);

  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name || '',
      slug: category?.slug || '',
      description: category?.description || '',
      image: category?.image || null,
      seoTitle: category?.seoTitle || '',
      seoDescription: category?.seoDescription || '',
      status: category?.status || 'ACTIVE',
    },
  });

  // Auto-generate slug from name
  const name = form.watch('name');
  useEffect(() => {
    if (!slugEdited && name) {
      const generatedSlug = slugify(name, { lower: true, strict: true });
      form.setValue('slug', generatedSlug);
    }
  }, [name, slugEdited, form]);

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlugEdited(true);
    form.setValue('slug', e.target.value);
  };

  const handleMediaSelect = (url: string) => {
    form.setValue('image', url);
    setShowMediaLibrary(false);
  };

  const seoTitle = form.watch('seoTitle');
  const seoDescription = form.watch('seoDescription');

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Digital Marketing" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input
                    placeholder="digital-marketing"
                    {...field}
                    onChange={handleSlugChange}
                  />
                </FormControl>
                <FormDescription>
                  URL-safe version of the name (auto-generated)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Brief description of the category"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Image</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    {field.value && (
                      <div className="relative w-full h-40 rounded-lg overflow-hidden border">
                        <img
                          src={field.value}
                          alt="Category"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowMediaLibrary(true)}
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      {field.value ? 'Change Image' : 'Select Image'}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seoTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SEO Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Category Name | Your Site"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {seoTitle?.length || 0}/60 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seoDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SEO Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Brief meta description for search engines"
                    rows={2}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {seoDescription?.length || 0}/160 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Active Status</FormLabel>
                  <FormDescription>
                    Make this category visible on the website
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value === 'ACTIVE'}
                    onCheckedChange={(checked) =>
                      field.onChange(checked ? 'ACTIVE' : 'INACTIVE')
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : category ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Form>

      <MediaLibraryModal
        open={showMediaLibrary}
        onClose={() => setShowMediaLibrary(false)}
        onSelect={handleMediaSelect}
      />
    </>
  );
}

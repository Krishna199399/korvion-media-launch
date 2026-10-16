'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { TiptapEditor } from '@/components/admin/TiptapEditor';
import { MetadataPanel } from '@/components/admin/MetadataPanel';
import { FeaturedImageUploader } from '@/components/admin/FeaturedImageUploader';
import { SEOPanel } from '@/components/admin/SEOPanel';
import { PublishingPanel } from '@/components/admin/PublishingPanel';
import {
  getBlogById,
  updateBlog,
  autosaveBlog,
  type BlogStatus,
  type Blog,
} from '@/actions/blog';
import { getReadingTimeStats } from '@/lib/utils/reading-time';
import { isValidSlug } from '@/lib/utils/slug';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { notFound } from 'next/navigation';

const blogSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().refine((slug) => isValidSlug(slug), {
    message: 'Slug must be URL-friendly (lowercase, numbers, and hyphens only)',
  }),
  excerpt: z.string().max(160, 'Excerpt must be 160 characters or less'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  featuredImage: z.object({
    url: z.string().min(1, 'Featured image is required'),
    alt: z.string(),
  }),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()),
  featured: z.boolean(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED']),
  scheduledAt: z.string().nullable(),
  seoTitle: z.string(),
  seoDescription: z.string(),
  canonicalUrl: z.string(),
  ogTitle: z.string(),
  ogDescription: z.string(),
  ogImage: z.string(),
  robotsIndex: z.boolean(),
  robotsFollow: z.boolean(),
});

type BlogFormData = z.infer<typeof blogSchema>;

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [blog, setBlog] = useState<Blog | null>(null);

  const {
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featuredImage: undefined,
      category: '',
      tags: [],
      featured: false,
      status: 'DRAFT',
      scheduledAt: null,
      seoTitle: '',
      seoDescription: '',
      canonicalUrl: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      robotsIndex: true,
      robotsFollow: true,
    },
    mode: 'onChange',
  });

  const formData = watch();
  const readingTimeStats = getReadingTimeStats(formData.content);

  // Fetch blog data
  useEffect(() => {
    async function fetchBlog() {
      try {
        const blogId = params.id as string;
        const fetchedBlog = await getBlogById(blogId);

        if (!fetchedBlog) {
          notFound();
          return;
        }

        setBlog(fetchedBlog);

        // Populate form with fetched data
        reset({
          title: fetchedBlog.title,
          slug: fetchedBlog.slug,
          excerpt: fetchedBlog.excerpt,
          content: fetchedBlog.content,
          featuredImage: {
            url: fetchedBlog.featuredImage,
            alt: fetchedBlog.title,
          },
          category: fetchedBlog.category,
          tags: fetchedBlog.tags,
          featured: false, // Not in current Blog type
          status: fetchedBlog.status,
          scheduledAt: fetchedBlog.publishedAt,
          seoTitle: '',
          seoDescription: '',
          canonicalUrl: '',
          ogTitle: '',
          ogDescription: '',
          ogImage: '',
          robotsIndex: true,
          robotsFollow: true,
        });
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to load blog post.',
        });
        console.error('Fetch blog error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, [params.id, reset, toast]);

  // Autosave every 30 seconds
  useEffect(() => {
    if (!blog) return;

    const interval = setInterval(async () => {
      if (formData.title || formData.content) {
        try {
          const result = await autosaveBlog(blog.id, {
            title: formData.title,
            slug: formData.slug,
            excerpt: formData.excerpt,
            content: formData.content,
            featuredImage: formData.featuredImage?.url || '',
            category: formData.category,
            tags: formData.tags,
            status: formData.status,
            publishedAt: formData.scheduledAt,
            readingTime: readingTimeStats.minutes,
          });

          if (result.success) {
            setLastSaved(new Date(result.timestamp));
          }
        } catch (error) {
          console.error('Autosave failed:', error);
        }
      }
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [formData, blog, readingTimeStats.minutes]);

  const handleSaveDraft = async () => {
    if (!blog) return;

    setIsSaving(true);
    try {
      const result = await autosaveBlog(blog.id, {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featuredImage: formData.featuredImage?.url || '',
        category: formData.category,
        tags: formData.tags,
        status: 'DRAFT',
        publishedAt: null,
        readingTime: readingTimeStats.minutes,
      });

      if (result.success) {
        setLastSaved(new Date(result.timestamp));
        toast({
          title: 'Draft saved',
          description: 'Your changes have been saved.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Save failed',
        description: 'Failed to save draft. Please try again.',
      });
      console.error('Save draft error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    if (formData.slug) {
      window.open(`/blog/${formData.slug}`, '_blank');
    } else {
      toast({
        variant: 'destructive',
        title: 'No slug',
        description: 'Please add a slug before previewing.',
      });
    }
  };

  const onUpdate = async (data: BlogFormData) => {
    if (!blog) return;

    setIsSaving(true);
    try {
      await updateBlog(blog.id, {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        featuredImage: data.featuredImage.url,
        category: data.category,
        tags: data.tags,
        status: data.status,
        publishedAt:
          data.status === 'PUBLISHED'
            ? new Date().toISOString()
            : data.scheduledAt,
        readingTime: readingTimeStats.minutes,
      });

      toast({
        title: 'Blog post updated',
        description: 'Your changes have been published successfully.',
      });

      router.push('/admin/blogs');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Update failed',
        description: 'Failed to update blog post. Please try again.',
      });
      console.error('Update error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <AdminHeader
          breadcrumbs={[
            { label: 'Admin', href: '/admin' },
            { label: 'Blogs', href: '/admin/blogs' },
            { label: 'Edit' },
          ]}
        />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:w-[70%] space-y-4">
              <Skeleton className="h-[500px] w-full" />
            </div>
            <div className="lg:w-[30%] space-y-6">
              <Skeleton className="h-[300px] w-full" />
              <Skeleton className="h-[400px] w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Blogs', href: '/admin/blogs' },
          { label: blog.title },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit(onUpdate)}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Editor (70%) */}
            <div className="flex-1 lg:w-[70%] space-y-4">
              <TiptapEditor
                content={formData.content}
                onChange={(html) => setValue('content', html)}
                placeholder="Start writing your blog post..."
              />
              {errors.content && (
                <p className="text-sm text-destructive">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* Right Column - Sidebar (30%) */}
            <div className="lg:w-[30%] space-y-6">
              <PublishingPanel
                mode="edit"
                status={formData.status}
                scheduledAt={formData.scheduledAt}
                lastSaved={lastSaved}
                isSaving={isSaving}
                onStatusChange={(status) => setValue('status', status)}
                onScheduledAtChange={(date) => setValue('scheduledAt', date)}
                onSave={handleSaveDraft}
                onPreview={handlePreview}
                onPublish={handleSubmit(onUpdate)}
              />

              <MetadataPanel
                title={formData.title}
                slug={formData.slug}
                excerpt={formData.excerpt}
                category={formData.category}
                tags={formData.tags}
                featured={formData.featured}
                readingTime={readingTimeStats.text}
                onTitleChange={(title) => setValue('title', title)}
                onSlugChange={(slug) => setValue('slug', slug)}
                onExcerptChange={(excerpt) => setValue('excerpt', excerpt)}
                onCategoryChange={(category) => setValue('category', category)}
                onTagsChange={(tags) => setValue('tags', tags)}
                onFeaturedChange={(featured) => setValue('featured', featured)}
                errors={{
                  title: errors.title?.message,
                  slug: errors.slug?.message,
                  excerpt: errors.excerpt?.message,
                  category: errors.category?.message,
                }}
              />

              <div>
                <h3 className="text-sm font-medium mb-2">Featured Image</h3>
                <FeaturedImageUploader
                  value={formData.featuredImage}
                  onChange={(value) => setValue('featuredImage', value ?? { url: '', alt: '' })}
                  error={errors.featuredImage?.url?.message}
                />
              </div>

              <SEOPanel
                seoTitle={formData.seoTitle}
                seoDescription={formData.seoDescription}
                canonicalUrl={formData.canonicalUrl}
                ogTitle={formData.ogTitle}
                ogDescription={formData.ogDescription}
                ogImage={formData.ogImage}
                robotsIndex={formData.robotsIndex}
                robotsFollow={formData.robotsFollow}
                onSeoTitleChange={(value) => setValue('seoTitle', value)}
                onSeoDescriptionChange={(value) =>
                  setValue('seoDescription', value)
                }
                onCanonicalUrlChange={(value) => setValue('canonicalUrl', value)}
                onOgTitleChange={(value) => setValue('ogTitle', value)}
                onOgDescriptionChange={(value) =>
                  setValue('ogDescription', value)
                }
                onOgImageChange={(value) => setValue('ogImage', value)}
                onRobotsIndexChange={(value) => setValue('robotsIndex', value)}
                onRobotsFollowChange={(value) => setValue('robotsFollow', value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

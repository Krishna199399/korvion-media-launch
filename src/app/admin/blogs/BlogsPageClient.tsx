'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { BlogTable } from '@/components/admin/BlogTable';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Blog,
  publishBlog,
  unpublishBlog,
  duplicateBlog,
  deleteBlog,
} from '@/actions/blog';

interface BlogsPageClientProps {
  blogs: Blog[];
  total: number;
  currentPage: number;
  totalPages: number;
  initialSearch: string;
  initialStatus: string;
  initialCategory: string;
}

export function BlogsPageClient({
  blogs,
  total,
  currentPage,
  totalPages,
  initialSearch,
  initialStatus,
  initialCategory,
}: BlogsPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchState, setSearchState] = useState(initialSearch);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  // Get unique categories from blogs
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

  // Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateFilters({ search: searchState });
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchState]);

  const updateFilters = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // Reset to page 1 when filters change
    if (!updates.page) {
      params.delete('page');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleStatusChange = (value: string) => {
    updateFilters({ status: value === 'ALL' ? '' : value });
  };

  const handleCategoryChange = (value: string) => {
    updateFilters({ category: value === 'ALL' ? '' : value });
  };

  const handlePageChange = (page: number) => {
    updateFilters({ page: page.toString() });
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/blogs/${id}/edit`);
  };

  const handlePreview = (slug: string) => {
    window.open(`/blog/${slug}`, '_blank');
  };

  const handlePublish = async (id: string) => {
    try {
      setActionLoading(true);
      await publishBlog(id);
      router.refresh();
    } catch (error) {
      console.error('Failed to publish blog:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleUnpublish = async (id: string) => {
    try {
      setActionLoading(true);
      await unpublishBlog(id);
      router.refresh();
    } catch (error) {
      console.error('Failed to unpublish blog:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDuplicate = async (id: string) => {
    try {
      setActionLoading(true);
      await duplicateBlog(id);
      router.refresh();
    } catch (error) {
      console.error('Failed to duplicate blog:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setDeletingId(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!deletingId) return;

    try {
      setActionLoading(true);
      await deleteBlog(deletingId);
      setDeleteDialogOpen(false);
      setDeletingId(null);
      router.refresh();
    } catch (error) {
      console.error('Failed to delete blog:', error);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <AdminHeader breadcrumbs={[{ label: 'Admin', href: '/admin' }, { label: 'Blogs' }]} />

      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-display">Blogs</h1>
          <Link href="/admin/blogs/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Blog
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-3 flex-wrap items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search blogs..."
                  value={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  className="pl-9"
                />
              </div>

              <Select value={initialStatus || 'ALL'} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Statuses</SelectItem>
                  <SelectItem value="PUBLISHED">Published</SelectItem>
                  <SelectItem value="DRAFT">Draft</SelectItem>
                  <SelectItem value="SCHEDULED">Scheduled</SelectItem>
                  <SelectItem value="ARCHIVED">Archived</SelectItem>
                </SelectContent>
              </Select>

              <Select value={initialCategory || 'ALL'} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Info */}
        <p className="text-sm text-muted-foreground">
          {total} blog post{total !== 1 ? 's' : ''} found
        </p>

        {/* Table */}
        <BlogTable
          blogs={blogs}
          loading={actionLoading}
          onEdit={handleEdit}
          onPreview={handlePreview}
          onPublish={handlePublish}
          onUnpublish={handleUnpublish}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Delete Blog Post"
        description="This action cannot be undone. The blog post will be permanently deleted."
        onConfirm={confirmDelete}
        loading={actionLoading}
        destructive
      />
    </div>
  );
}

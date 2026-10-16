'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Upload, X } from 'lucide-react';
import { MediaItem, getMedia, deleteMedia } from '@/actions/media';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { MediaGrid } from '@/components/admin/MediaGrid';
import { MediaUploader } from '@/components/admin/MediaUploader';
import { MediaDetailModal } from '@/components/admin/MediaDetailModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

export default function MediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const pageSize = 12;

  const loadMedia = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getMedia({ search, page, pageSize });
      setItems(result.items);
      setTotal(result.total);
      setTotalPages(result.totalPages);
    } catch (error) {
      toast.error('Failed to load media');
      console.error('Failed to load media:', error);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => {
    loadMedia();
  }, [loadMedia]);

  const handleDelete = async (id: string) => {
    try {
      await deleteMedia(id);
      toast.success('Media deleted successfully');
      loadMedia();
    } catch (error) {
      toast.error('Failed to delete media');
    }
  };

  const handleUpdate = (id: string, data: Partial<MediaItem>) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const handleView = (item: MediaItem) => {
    setSelectedItem(item);
    setShowDetailModal(true);
  };

  const handleUploadComplete = () => {
    setShowUploadDialog(false);
    setPage(1);
    loadMedia();
    toast.success('Images uploaded successfully');
  };

  const breadcrumbs = [
    { label: 'Admin', href: '/admin' },
    { label: 'Media Library' },
  ];

  return (
    <div className="flex flex-col h-full">
      <AdminHeader breadcrumbs={breadcrumbs} />

      <div className="flex-1 overflow-auto">
        <div className="container py-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Media Library</h1>
              <p className="text-muted-foreground mt-1">
                Manage your images and media files
              </p>
            </div>
            <Button onClick={() => setShowUploadDialog(true)}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Images
            </Button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search images..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="pl-9"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          {/* Media Grid */}
          <MediaGrid
            items={items}
            isLoading={loading}
            onView={handleView}
            onDelete={handleDelete}
          />

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, total)} of {total}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <div className="flex items-center px-4 text-sm">
                  Page {page} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {search ? 'No images found matching your search' : 'No images uploaded yet'}
              </p>
              {!search && (
                <Button
                  onClick={() => setShowUploadDialog(true)}
                  className="mt-4"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your First Image
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Upload Images</DialogTitle>
          </DialogHeader>
          <MediaUploader onUploadComplete={handleUploadComplete} />
        </DialogContent>
      </Dialog>

      {/* Detail Modal */}
      <MediaDetailModal
        item={selectedItem}
        open={showDetailModal}
        onClose={() => {
          setShowDetailModal(false);
          setSelectedItem(null);
        }}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

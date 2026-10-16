'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { MediaItem, getMedia } from '@/actions/media';
import { MediaGrid } from './MediaGrid';
import { MediaUploader } from './MediaUploader';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MediaLibraryModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string, alt?: string) => void;
}

export function MediaLibraryModal({
  open,
  onClose,
  onSelect,
}: MediaLibraryModalProps) {
  const [activeTab, setActiveTab] = useState<'library' | 'upload'>('library');
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const pageSize = 12;

  const loadMedia = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getMedia({ search, page, pageSize });
      setItems(result.items);
      setTotal(result.total);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error('Failed to load media:', error);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => {
    if (open && activeTab === 'library') {
      loadMedia();
    }
  }, [open, activeTab, loadMedia]);

  const handleSelect = () => {
    if (selectedItem) {
      onSelect(selectedItem.url, selectedItem.alt);
      handleClose();
    }
  };

  const handleUploadComplete = (urls: string[]) => {
    // Switch to library tab and refresh
    setActiveTab('library');
    setPage(1);
    loadMedia();
  };

  const handleClose = () => {
    setSelectedItem(null);
    setSearch('');
    setPage(1);
    setActiveTab('library');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Media Library</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'library' | 'upload')} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="flex-1 overflow-auto space-y-4 mt-4">
            {/* Search */}
            <div className="relative">
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

            {/* Media Grid */}
            <div className="min-h-[400px]">
              <MediaGrid
                items={items}
                isLoading={loading}
                selectable={true}
                selectedId={selectedItem?.id}
                onSelect={setSelectedItem}
              />
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
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
          </TabsContent>

          <TabsContent value="upload" className="flex-1 overflow-auto mt-4">
            <MediaUploader onUploadComplete={handleUploadComplete} />
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSelect}
            disabled={!selectedItem || activeTab !== 'library'}
          >
            Select Image
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

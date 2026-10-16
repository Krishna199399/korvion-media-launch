'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Copy, Trash2 } from 'lucide-react';
import { MediaItem, updateMedia } from '@/actions/media';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface MediaDetailModalProps {
  item: MediaItem | null;
  open: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: Partial<MediaItem>) => void;
}

export function MediaDetailModal({
  item,
  open,
  onClose,
  onDelete,
  onUpdate,
}: MediaDetailModalProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [updating, setUpdating] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      alt: '',
      caption: '',
    },
  });

  useEffect(() => {
    if (item) {
      reset({
        alt: item.alt,
        caption: item.caption,
      });
    }
  }, [item, reset]);

  if (!item) return null;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(item.url);
      toast.success('URL copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy URL');
    }
  };

  const handleUpdate = async (data: { alt: string; caption: string }) => {
    setUpdating(true);
    try {
      await updateMedia(item.id, data);
      onUpdate(item.id, data);
      toast.success('Media updated successfully');
      onClose();
    } catch (error) {
      toast.error('Failed to update media');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = () => {
    onDelete(item.id);
    setShowDeleteConfirm(false);
    onClose();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Media Details</DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Image Preview */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted border">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column - Details & Form */}
            <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
              {/* Read-only Info */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Filename</p>
                  <p className="text-sm">{item.fileName}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Dimensions</p>
                    <p className="text-sm">
                      {item.width} × {item.height}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">File Size</p>
                    <p className="text-sm">{formatFileSize(item.fileSize)}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Type</p>
                    <p className="text-sm">{item.mimeType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Uploaded</p>
                    <p className="text-sm">{formatDate(item.uploadedAt)}</p>
                  </div>
                </div>
              </div>

              {/* Editable Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="alt">Alt Text</Label>
                  <Input
                    id="alt"
                    {...register('alt')}
                    placeholder="Describe the image for accessibility"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caption">Caption</Label>
                  <Textarea
                    id="caption"
                    {...register('caption')}
                    placeholder="Optional caption for the image"
                    rows={3}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleCopyUrl}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy URL
                </Button>

                <Button
                  type="button"
                  variant="destructive"
                  className="w-full"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Image
                </Button>
              </div>
            </form>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit(handleUpdate)} disabled={updating}>
              {updating ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &quot;{item.fileName}&quot;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

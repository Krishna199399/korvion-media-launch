'use client';

import { type Editor } from '@tiptap/react';
import { Button } from '@/components/ui/button';
import { ImagePlus } from 'lucide-react';
import { useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadButtonProps {
  editor: Editor | null;
  onUploadStart?: () => void;
  onUploadComplete?: (url: string) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export function ImageUploadButton({
  editor,
  onUploadStart,
  onUploadComplete,
}: ImageUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      toast({
        variant: 'destructive',
        title: 'Invalid file type',
        description: 'Please upload a JPG, PNG, or WebP image.',
      });
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      toast({
        variant: 'destructive',
        title: 'File too large',
        description: 'Image must be less than 5MB.',
      });
      return;
    }

    // Start upload
    setUploading(true);
    setProgress(0);
    onUploadStart?.();

    try {
      // Mock upload with progress
      // TODO: Replace with actual Supabase upload
      const mockUpload = new Promise<string>((resolve) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += 10;
          setProgress(currentProgress);
          if (currentProgress >= 100) {
            clearInterval(interval);
            // For now, use object URL
            const url = URL.createObjectURL(file);
            resolve(url);
          }
        }, 100);
      });

      const url = await mockUpload;

      // Insert image into editor
      if (editor) {
        editor.chain().focus().setImage({ src: url }).run();
      }

      onUploadComplete?.(url);

      toast({
        title: 'Image uploaded',
        description: 'Image has been inserted into your blog post.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Upload failed',
        description: 'Failed to upload image. Please try again.',
      });
      console.error('Image upload error:', error);
    } finally {
      setUploading(false);
      setProgress(0);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileSelect}
        disabled={uploading}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading || !editor}
        aria-label="Upload image"
      >
        <ImagePlus className="h-4 w-4" />
      </Button>
      {uploading && (
        <div className="fixed bottom-4 right-4 bg-background border border-border rounded-lg p-4 shadow-lg min-w-[300px]">
          <p className="text-sm font-medium mb-2">Uploading image...</p>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
        </div>
      )}
    </div>
  );
}

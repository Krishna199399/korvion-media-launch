'use client';

import { useDropzone } from 'react-dropzone';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ImagePlus, X, Upload } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface FeaturedImageUploaderProps {
  value?: { url: string; alt: string } | null;
  onChange: (value: { url: string; alt: string } | null) => void;
  error?: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp'],
};

export function FeaturedImageUploader({
  value,
  onChange,
  error,
}: FeaturedImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

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

      onChange({
        url,
        alt: value?.alt || '',
      });

      toast({
        title: 'Image uploaded',
        description: 'Featured image has been uploaded successfully.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Upload failed',
        description: 'Failed to upload image. Please try again.',
      });
      console.error('Featured image upload error:', error);
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_IMAGE_TYPES,
    maxFiles: 1,
    disabled: uploading,
  });

  const handleRemove = () => {
    onChange(null);
  };

  const handleAltChange = (alt: string) => {
    if (value) {
      onChange({ ...value, alt });
    }
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        {!value?.url ? (
          <div
            {...getRootProps()}
            className={cn(
              'border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-primary/50 hover:bg-accent/50',
              isDragActive && 'border-primary bg-accent',
              error && 'border-destructive'
            )}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-primary/10 p-3">
                {uploading ? (
                  <Upload className="h-6 w-6 text-primary animate-pulse" />
                ) : (
                  <ImagePlus className="h-6 w-6 text-primary" />
                )}
              </div>
              {uploading ? (
                <div className="w-full max-w-xs space-y-2">
                  <p className="text-sm font-medium">Uploading...</p>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">{progress}%</p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-medium">
                    {isDragActive
                      ? 'Drop the image here'
                      : 'Drag & drop an image here'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    JPG, PNG or WebP (max 5MB)
                  </p>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="relative group">
              <img
                src={value.url}
                alt={value.alt || 'Featured image'}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleRemove}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="featured-image-alt">Alt Text</Label>
              <Input
                id="featured-image-alt"
                placeholder="Describe the image for accessibility"
                value={value.alt}
                onChange={(e) => handleAltChange(e.target.value)}
              />
            </div>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </CardContent>
    </Card>
  );
}

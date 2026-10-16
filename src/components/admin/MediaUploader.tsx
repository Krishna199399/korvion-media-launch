'use client';

import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface FileWithPreview extends File {
  preview?: string;
  progress?: number;
}

interface MediaUploaderProps {
  onUploadComplete?: (urls: string[]) => void;
  maxSize?: number; // in bytes, default 10MB
}

export function MediaUploader({
  onUploadComplete,
  maxSize = 10 * 1024 * 1024, // 10MB
}: MediaUploaderProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        progress: 0,
      })
    );

    setFiles((prev) => [...prev, ...newFiles]);

    // Handle rejected files
    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach((rejected) => {
        const error = rejected.errors[0];
        if (error.code === 'file-too-large') {
          alert(`File ${rejected.file.name} is too large. Max size is ${maxSize / 1024 / 1024}MB`);
        } else if (error.code === 'file-invalid-type') {
          alert(`File ${rejected.file.name} has invalid type. Only images are allowed.`);
        }
      });
    }
  }, [maxSize]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp'],
      'image/svg+xml': ['.svg'],
    },
    maxSize,
    multiple: true,
  });

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview!);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const simulateUpload = async () => {
    setUploading(true);
    const urls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      // Simulate progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setFiles((prev) => {
          const newFiles = [...prev];
          newFiles[i] = { ...newFiles[i], progress };
          return newFiles;
        });
      }

      // Mock uploaded URL
      urls.push(files[i].preview || '');
    }

    setUploadedUrls(urls);
    setUploading(false);

    if (onUploadComplete) {
      onUploadComplete(urls);
    }
  };

  const clearCompleted = () => {
    files.forEach((file) => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
    setUploadedUrls([]);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25 hover:border-primary/50'
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full bg-primary/10 p-4">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">
              {isDragActive ? 'Drop images here' : 'Drop images here or click to browse'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              JPEG, PNG, GIF, WebP, SVG up to {maxSize / 1024 / 1024}MB
            </p>
          </div>
        </div>
      </div>

      {/* File Preview Grid */}
      {files.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative border rounded-lg p-2 bg-card"
              >
                {/* Preview Image */}
                <div className="aspect-square rounded overflow-hidden bg-muted mb-2">
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileImage className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div className="space-y-1">
                  <p className="text-xs font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(0)} KB
                  </p>

                  {/* Progress Bar */}
                  {uploading && file.progress !== undefined && (
                    <Progress value={file.progress} className="h-1" />
                  )}
                </div>

                {/* Remove Button */}
                {!uploading && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1 right-1 h-6 w-6"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Upload Actions */}
          <div className="flex gap-2">
            {!uploading && uploadedUrls.length === 0 && (
              <>
                <Button onClick={simulateUpload} disabled={files.length === 0}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload {files.length} {files.length === 1 ? 'file' : 'files'}
                </Button>
                <Button variant="outline" onClick={clearCompleted}>
                  Clear
                </Button>
              </>
            )}

            {uploadedUrls.length > 0 && (
              <Button variant="outline" onClick={clearCompleted}>
                Clear Completed
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

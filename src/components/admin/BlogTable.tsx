'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { StatusBadge } from './StatusBadge';
import { EmptyState } from './EmptyState';
import { Blog } from '@/actions/blog';
import {
  MoreHorizontal,
  Pencil,
  ExternalLink,
  CheckCircle,
  XCircle,
  Copy,
  Trash2,
  FileText,
} from 'lucide-react';

interface BlogTableProps {
  blogs: Blog[];
  loading?: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onPublish: (id: string) => void;
  onUnpublish: (id: string) => void;
  onDuplicate: (id: string) => void;
  onPreview: (slug: string) => void;
}

export function BlogTable({
  blogs,
  loading = false,
  onEdit,
  onDelete,
  onPublish,
  onUnpublish,
  onDuplicate,
  onPreview,
}: BlogTableProps) {
  if (loading) {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Title & Excerpt</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead>Reading Time</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-10 w-[60px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[250px] mb-2" />
                  <Skeleton className="h-3 w-[200px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[80px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[80px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[40px] ml-auto" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <EmptyState
        icon={FileText}
        title="No blog posts found"
        description="Create your first blog post or adjust your filters."
      />
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title & Excerpt</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead>Reading Time</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id} className="hover:bg-muted/50">
              <TableCell>
                {blog.featuredImage ? (
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    width={60}
                    height={40}
                    className="object-cover rounded"
                    unoptimized
                  />
                ) : (
                  <div className="h-10 w-[60px] bg-muted rounded" />
                )}
              </TableCell>
              <TableCell className="max-w-md">
                <div className="font-medium">{blog.title}</div>
                <div className="text-sm text-muted-foreground truncate line-clamp-2">
                  {blog.excerpt}
                </div>
              </TableCell>
              <TableCell className="text-sm">{blog.author}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  {blog.category}
                </Badge>
              </TableCell>
              <TableCell>
                <StatusBadge status={blog.status} />
              </TableCell>
              <TableCell className="text-sm text-right">
                {blog.viewCount.toLocaleString()}
              </TableCell>
              <TableCell className="text-sm">{blog.readingTime} min</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {blog.status === 'PUBLISHED' && blog.publishedAt
                  ? format(new Date(blog.publishedAt), 'MMM d, yyyy')
                  : format(new Date(blog.updatedAt), 'MMM d, yyyy')}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(blog.id)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onPreview(blog.slug)}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {blog.status === 'PUBLISHED' ? (
                      <DropdownMenuItem onClick={() => onUnpublish(blog.id)}>
                        <XCircle className="mr-2 h-4 w-4" />
                        Unpublish
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem onClick={() => onPublish(blog.id)}>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Publish
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={() => onDuplicate(blog.id)}>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => onDelete(blog.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

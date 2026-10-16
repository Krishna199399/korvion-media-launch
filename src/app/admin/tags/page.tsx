'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Search, Pencil, Trash2, X } from 'lucide-react';
import {
  Tag,
  getTags,
  createTag,
  updateTag,
  deleteTag,
} from '@/actions/tag';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { TagForm } from '@/components/admin/TagForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';

export default function TagsPage() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [deletingTag, setDeletingTag] = useState<Tag | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadTags = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTags();
      setTags(data);
      setFilteredTags(data);
    } catch (error) {
      toast.error('Failed to load tags');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTags();
  }, [loadTags]);

  useEffect(() => {
    if (search) {
      const searchLower = search.toLowerCase();
      setFilteredTags(
        tags.filter(
          (tag) =>
            tag.name.toLowerCase().includes(searchLower) ||
            tag.slug.toLowerCase().includes(searchLower) ||
            (tag.description && tag.description.toLowerCase().includes(searchLower))
        )
      );
    } else {
      setFilteredTags(tags);
    }
  }, [search, tags]);

  const handleCreate = () => {
    setEditingTag(null);
    setShowDialog(true);
  };

  const handleEdit = (tag: Tag) => {
    setEditingTag(tag);
    setShowDialog(true);
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      if (editingTag) {
        await updateTag(editingTag.id, data);
        toast.success('Tag updated successfully');
      } else {
        await createTag(data);
        toast.success('Tag created successfully');
      }
      setShowDialog(false);
      setEditingTag(null);
      loadTags();
    } catch (error: any) {
      toast.error(error.message || 'Failed to save tag');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingTag) return;

    try {
      await deleteTag(deletingTag.id);
      toast.success('Tag deleted successfully');
      setDeletingTag(null);
      loadTags();
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete tag');
    }
  };

  const breadcrumbs = [
    { label: 'Admin', href: '/admin' },
    { label: 'Tags' },
  ];

  return (
    <div className="flex flex-col h-full">
      <AdminHeader breadcrumbs={breadcrumbs} />

      <div className="flex-1 overflow-auto">
        <div className="container py-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Tags</h1>
              <p className="text-muted-foreground mt-1">
                Manage blog tags for content organization
              </p>
            </div>
            <Button onClick={handleCreate}>
              <Plus className="h-4 w-4 mr-2" />
              Create Tag
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

          {/* Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead className="text-center">Posts</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Skeleton className="h-4 w-32" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-24" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-8 mx-auto" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-8 w-20 ml-auto" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : filteredTags.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-12">
                      <p className="text-muted-foreground">
                        {search ? 'No tags found matching your search' : 'No tags yet'}
                      </p>
                      {!search && (
                        <Button onClick={handleCreate} className="mt-4">
                          <Plus className="h-4 w-4 mr-2" />
                          Create Your First Tag
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTags.map((tag) => (
                    <TableRow key={tag.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{tag.name}</p>
                          {tag.description && (
                            <p className="text-sm text-muted-foreground truncate max-w-md">
                              {tag.description}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {tag.slug}
                        </code>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">{tag.postCount}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(tag)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeletingTag(tag)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>
              {editingTag ? 'Edit Tag' : 'Create Tag'}
            </DialogTitle>
          </DialogHeader>
          <TagForm
            tag={editingTag}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowDialog(false);
              setEditingTag(null);
            }}
            isLoading={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog
        open={!!deletingTag}
        onOpenChange={() => setDeletingTag(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Tag</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &quot;{deletingTag?.name}&quot;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

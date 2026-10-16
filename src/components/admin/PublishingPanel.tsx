'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Eye, Loader2, Save } from 'lucide-react';
import { type BlogStatus } from '@/actions/blog';
import { cn } from '@/lib/utils';

interface PublishingPanelProps {
  mode: 'create' | 'edit';
  status: BlogStatus;
  scheduledAt: string | null;
  lastSaved: Date | null;
  isSaving: boolean;
  onStatusChange: (status: BlogStatus) => void;
  onScheduledAtChange: (date: string | null) => void;
  onSave: () => void;
  onPreview: () => void;
  onPublish: () => void;
}

export function PublishingPanel({
  mode,
  status,
  scheduledAt,
  lastSaved,
  isSaving,
  onStatusChange,
  onScheduledAtChange,
  onSave,
  onPreview,
  onPublish,
}: PublishingPanelProps) {
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onScheduledAtChange(date.toISOString());
    } else {
      onScheduledAtChange(null);
    }
  };

  const scheduledDate = scheduledAt ? new Date(scheduledAt) : undefined;

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Publishing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={onStatusChange}>
            <SelectTrigger id="status">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DRAFT">Draft</SelectItem>
              <SelectItem value="PUBLISHED">Published</SelectItem>
              <SelectItem value="SCHEDULED">Scheduled</SelectItem>
              <SelectItem value="ARCHIVED">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Scheduled Date/Time - Only show if status is SCHEDULED */}
        {status === 'SCHEDULED' && (
          <div className="space-y-2">
            <Label>Publish Date & Time</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !scheduledDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {scheduledDate ? (
                    format(scheduledDate, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={scheduledDate}
                  onSelect={handleDateSelect}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        )}

        {/* Autosave Indicator */}
        <div className="pt-2 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {isSaving ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>Saving...</span>
              </>
            ) : lastSaved ? (
              <>
                <Save className="h-3 w-3" />
                <span>Saved {format(lastSaved, 'h:mm a')}</span>
              </>
            ) : (
              <span>Not saved yet</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={onSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </>
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={onPreview}
            disabled={isSaving}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>

          <Button
            className="w-full"
            onClick={onPublish}
            disabled={isSaving}
          >
            {mode === 'create' ? 'Publish Post' : 'Update Post'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { Badge } from '@/components/ui/badge';
import { BlogStatus } from '@/actions/blog';

interface StatusBadgeProps {
  status: BlogStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case 'DRAFT':
      return <Badge variant="secondary">{status}</Badge>;
    case 'PUBLISHED':
      return (
        <Badge
          variant="default"
          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100"
        >
          {status}
        </Badge>
      );
    case 'SCHEDULED':
      return (
        <Badge
          variant="outline"
          className="border-blue-300 text-blue-700 dark:text-blue-300"
        >
          {status}
        </Badge>
      );
    case 'ARCHIVED':
      return (
        <Badge
          variant="outline"
          className="border-yellow-300 text-yellow-700 dark:text-yellow-300"
        >
          {status}
        </Badge>
      );
  }
}

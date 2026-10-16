'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Mail,
  Search,
  Download,
  Trash2,
  CheckCircle2,
  XCircle,
  X,
  Users,
  UserCheck,
  UserMinus,
  RefreshCw,
} from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import {
  getSubscribers,
  deleteSubscriber,
  toggleSubscriberStatus,
  type Subscriber,
} from '@/actions/newsletter';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { StatsCard } from '@/components/admin/StatsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { Skeleton } from '@/components/ui/skeleton';

export default function NewsletterAdminPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');
  const [deletingSubscriber, setDeletingSubscriber] = useState<Subscriber | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const loadSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getSubscribers();
      setSubscribers(data);
    } catch (error) {
      toast.error('Failed to load subscribers');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSubscribers();
  }, [loadSubscribers]);

  // Filter subscribers based on search and status
  useEffect(() => {
    let result = [...subscribers];

    if (statusFilter !== 'all') {
      result = result.filter((s) => s.status === statusFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((s) => s.email.toLowerCase().includes(q));
    }

    setFilteredSubscribers(result);
  }, [subscribers, search, statusFilter]);

  const handleDelete = async () => {
    if (!deletingSubscriber) return;

    setIsProcessing(true);
    try {
      const res = await deleteSubscriber(deletingSubscriber.id);
      if (res.success) {
        toast.success(res.message);
        setDeletingSubscriber(null);
        loadSubscribers();
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error('Failed to remove subscriber');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleToggleStatus = async (subscriber: Subscriber) => {
    try {
      const res = await toggleSubscriberStatus(subscriber.id);
      if (res.success) {
        toast.success(res.message);
        loadSubscribers();
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error('Failed to update subscriber status');
    }
  };

  const handleExportCsv = () => {
    if (subscribers.length === 0) {
      toast.error('No subscribers to export');
      return;
    }

    const headers = ['Email', 'Status', 'Subscribed At'];
    const rows = subscribers.map((s) => [
      s.email,
      s.status,
      s.subscribedAt ? new Date(s.subscribedAt).toISOString() : '',
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `korvion-subscribers-${new Date().toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Subscribers exported to CSV');
  };

  const totalCount = subscribers.length;
  const activeCount = subscribers.filter((s) => s.status === 'active').length;
  const unsubscribedCount = subscribers.filter((s) => s.status === 'unsubscribed').length;

  const breadcrumbs = [
    { label: 'Admin', href: '/admin' },
    { label: 'Newsletter' },
  ];

  return (
    <div className="flex flex-col h-full">
      <AdminHeader breadcrumbs={breadcrumbs} />

      <div className="flex-1 overflow-auto">
        <div className="container py-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-display">Newsletter Subscribers</h1>
              <p className="text-muted-foreground mt-1">
                Monitor and manage growth email subscribers and audience reach
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={loadSubscribers} disabled={loading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button size="sm" onClick={handleExportCsv} disabled={totalCount === 0}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            <StatsCard
              title="Total Audience"
              value={totalCount}
              subtitle="All registered subscribers"
              icon={Users}
              iconColor="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
            />
            <StatsCard
              title="Active Subscribers"
              value={activeCount}
              subtitle={`${totalCount > 0 ? Math.round((activeCount / totalCount) * 100) : 0}% active retention`}
              icon={UserCheck}
              iconColor="bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400"
            />
            <StatsCard
              title="Unsubscribed"
              value={unsubscribedCount}
              subtitle="Opted out"
              icon={UserMinus}
              iconColor="bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400"
            />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search subscribers by email..."
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

            {/* Status Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg border border-border bg-card self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  statusFilter === 'all'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All ({totalCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('active')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  statusFilter === 'active'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Active ({activeCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('unsubscribed')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  statusFilter === 'unsubscribed'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Unsubscribed ({unsubscribedCount})
              </button>
            </div>
          </div>

          {/* Subscribers Table */}
          <div className="border rounded-lg bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">#</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Subscribed Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Skeleton className="h-4 w-6" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-48" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-6 w-20" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-32" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-8 w-24 ml-auto" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : filteredSubscribers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <Mail className="h-10 w-10 text-muted-foreground/40 mx-auto mb-2" />
                      <p className="text-muted-foreground font-medium">
                        {search
                          ? `No subscribers match "${search}"`
                          : 'No subscribers in this filter category'}
                      </p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredSubscribers.map((subscriber, index) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="text-muted-foreground text-xs">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{subscriber.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={subscriber.status === 'active' ? 'default' : 'secondary'}
                          className={
                            subscriber.status === 'active'
                              ? 'bg-emerald-600/10 text-emerald-600 border-emerald-600/20 hover:bg-emerald-600/20'
                              : 'bg-muted text-muted-foreground'
                          }
                        >
                          {subscriber.status === 'active' ? (
                            <CheckCircle2 className="w-3 h-3 mr-1 inline" />
                          ) : (
                            <XCircle className="w-3 h-3 mr-1 inline" />
                          )}
                          <span className="capitalize">{subscriber.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {subscriber.subscribedAt
                          ? format(new Date(subscriber.subscribedAt), 'MMM d, yyyy · h:mm a')
                          : '—'}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleStatus(subscriber)}
                            title={
                              subscriber.status === 'active'
                                ? 'Mark as unsubscribed'
                                : 'Mark as active'
                            }
                            className="text-xs"
                          >
                            {subscriber.status === 'active' ? 'Deactivate' : 'Activate'}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDeletingSubscriber(subscriber)}
                            className="text-destructive hover:text-destructive"
                            title="Delete subscriber"
                          >
                            <Trash2 className="h-4 w-4" />
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

      {/* Delete Confirmation Alert Dialog */}
      <AlertDialog
        open={!!deletingSubscriber}
        onOpenChange={() => setDeletingSubscriber(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Subscriber</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove &quot;{deletingSubscriber?.email}&quot; from the
              newsletter list? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isProcessing}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isProcessing}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isProcessing ? 'Removing...' : 'Remove'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

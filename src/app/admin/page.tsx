import { getDashboardStats, getRecentPosts } from "@/actions/dashboard";
import { StatsCard } from "@/components/admin/StatsCard";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  FileText,
  Folder,
  Eye,
  Mail,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboard() {
  const stats = await getDashboardStats();
  const recentPosts = await getRecentPosts();

  return (
    <div className="flex flex-col">
      <AdminHeader
        breadcrumbs={[{ label: "Dashboard" }]}
      />

      <div className="flex-1 space-y-6 p-6">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-display">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of your blog.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Blogs"
            value={stats.totalBlogs}
            subtitle={`${stats.published} published, ${stats.drafts} drafts`}
            icon={FileText}
            iconColor="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
          />
          <StatsCard
            title="Categories"
            value={stats.totalCategories}
            subtitle={`${stats.totalTags} tags`}
            icon={Folder}
            iconColor="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
          />
          <StatsCard
            title="Total Views"
            value={stats.totalViews.toLocaleString()}
            subtitle="All-time views"
            icon={Eye}
            iconColor="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
          />
          <StatsCard
            title="Subscribers"
            value={stats.subscribers}
            subtitle="Newsletter subscribers"
            icon={Mail}
            iconColor="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400"
          />
        </div>

        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium max-w-md truncate">
                      {post.title}
                    </TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          post.status === "PUBLISHED"
                            ? "default"
                            : post.status === "DRAFT"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{post.views}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {post.publishedAt || post.updatedAt}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use server";

export interface DashboardStats {
  totalBlogs: number;
  published: number;
  drafts: number;
  scheduled: number;
  totalCategories: number;
  totalTags: number;
  totalViews: number;
  subscribers: number;
}

export interface RecentPost {
  id: string;
  title: string;
  status: string;
  category: string;
  views: number;
  publishedAt: string | null;
  updatedAt: string;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  // TODO: Get real stats from Supabase
  // Mock data for development
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    totalBlogs: 8,
    published: 5,
    drafts: 2,
    scheduled: 1,
    totalCategories: 5,
    totalTags: 12,
    totalViews: 1240,
    subscribers: 42,
  };
}

export async function getRecentPosts(): Promise<RecentPost[]> {
  // TODO: Get real recent posts from Supabase
  // Mock data for development
  await new Promise((resolve) => setTimeout(resolve, 300));

  return [
    {
      id: "1",
      title: "How AI Is Transforming Digital Marketing in 2026",
      status: "PUBLISHED",
      category: "AI & Automation",
      views: 342,
      publishedAt: "2026-10-05",
      updatedAt: "2026-10-05",
    },
    {
      id: "2",
      title: "SEO Strategies for Growing Businesses",
      status: "PUBLISHED",
      category: "SEO",
      views: 198,
      publishedAt: "2026-10-03",
      updatedAt: "2026-10-03",
    },
    {
      id: "3",
      title: "The Future of Social Media Marketing",
      status: "DRAFT",
      category: "Social Media",
      views: 0,
      publishedAt: null,
      updatedAt: "2026-10-07",
    },
    {
      id: "4",
      title: "Building High-Performance Websites",
      status: "PUBLISHED",
      category: "Web Development",
      views: 276,
      publishedAt: "2026-09-28",
      updatedAt: "2026-09-28",
    },
    {
      id: "5",
      title: "Content Marketing Best Practices",
      status: "SCHEDULED",
      category: "Digital Marketing",
      views: 0,
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-06",
    },
  ];
}

'use server';

export type BlogStatus = 'PUBLISHED' | 'DRAFT' | 'SCHEDULED' | 'ARCHIVED';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML string
  featuredImage: string; // URL
  status: BlogStatus;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string | null;
  updatedAt: string;
  viewCount: number;
  readingTime: number; // minutes
}

export interface BlogFilters {
  search?: string;
  status?: BlogStatus | 'ALL';
  category?: string;
  page?: number;
  pageSize?: number;
}

export interface BlogsResult {
  blogs: Blog[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'How AI Is Transforming Digital Marketing in 2026',
    slug: 'how-ai-is-transforming-digital-marketing-2026',
    category: 'AI & Automation',
    status: 'PUBLISHED',
    tags: ['AI', 'Digital Marketing', 'Automation'],
    author: 'Korvion Team',
    viewCount: 342,
    readingTime: 8,
    publishedAt: '2026-10-05',
    updatedAt: '2026-10-05',
    featuredImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
    excerpt: 'Discover how AI is revolutionizing...',
    content: '<p>Artificial intelligence is reshaping...</p>',
  },
  {
    id: '2',
    title: 'SEO Strategies for Growing Businesses',
    slug: 'seo-strategies-growing-businesses',
    category: 'SEO',
    status: 'PUBLISHED',
    tags: ['SEO', 'Growth', 'Strategy'],
    author: 'Korvion Team',
    viewCount: 198,
    readingTime: 6,
    publishedAt: '2026-10-03',
    updatedAt: '2026-10-03',
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
    excerpt: 'Learn the latest SEO techniques...',
    content: '<p>Search engine optimization remains...</p>',
  },
  {
    id: '3',
    title: 'Building High-Performance Websites That Convert',
    slug: 'building-high-performance-websites-that-convert',
    category: 'Web Development',
    status: 'PUBLISHED',
    tags: ['Web Dev', 'Performance', 'Conversion'],
    author: 'Korvion Team',
    viewCount: 276,
    readingTime: 7,
    publishedAt: '2026-09-28',
    updatedAt: '2026-09-28',
    featuredImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    excerpt: 'Speed and conversion go hand in hand...',
    content: '<p>A high-performance website...</p>',
  },
  {
    id: '4',
    title: 'Social Media Marketing Best Practices 2026',
    slug: 'social-media-marketing-best-practices-2026',
    category: 'Social Media',
    status: 'PUBLISHED',
    tags: ['Social Media', 'Marketing', 'Best Practices'],
    author: 'Korvion Team',
    viewCount: 187,
    readingTime: 5,
    publishedAt: '2026-09-20',
    updatedAt: '2026-09-20',
    featuredImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
    excerpt: 'Stay ahead with the latest social media trends...',
    content: '<p>Social media continues to evolve...</p>',
  },
  {
    id: '5',
    title: 'Content Marketing ROI: Measuring What Matters',
    slug: 'content-marketing-roi-measuring-what-matters',
    category: 'Digital Marketing',
    status: 'PUBLISHED',
    tags: ['Content Marketing', 'ROI', 'Analytics'],
    author: 'Korvion Team',
    viewCount: 154,
    readingTime: 9,
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    excerpt: 'Understand the true return on content investment...',
    content: '<p>Measuring content marketing ROI...</p>',
  },
  {
    id: '6',
    title: 'The Future of Automation in Business',
    slug: 'future-of-automation-in-business',
    category: 'AI & Automation',
    status: 'SCHEDULED',
    tags: ['Automation', 'Business', 'Future'],
    author: 'Korvion Team',
    viewCount: 0,
    readingTime: 7,
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-07',
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    excerpt: 'Automation is no longer optional...',
    content: '<p>The age of automation...</p>',
  },
  {
    id: '7',
    title: 'Branding Strategies for Modern Businesses',
    slug: 'branding-strategies-modern-businesses',
    category: 'Branding',
    status: 'DRAFT',
    tags: ['Branding', 'Strategy', 'Design'],
    author: 'Korvion Team',
    viewCount: 0,
    readingTime: 6,
    publishedAt: null,
    updatedAt: '2026-10-08',
    featuredImage: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800',
    excerpt: 'Your brand is your promise...',
    content: '<p>Building a powerful brand...</p>',
  },
  {
    id: '8',
    title: 'Web Development Trends to Watch in 2026',
    slug: 'web-development-trends-2026',
    category: 'Web Development',
    status: 'DRAFT',
    tags: ['Web Dev', 'Trends', 'Technology'],
    author: 'Korvion Team',
    viewCount: 0,
    readingTime: 8,
    publishedAt: null,
    updatedAt: '2026-10-09',
    featuredImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    excerpt: 'The web development landscape is shifting...',
    content: '<p>2026 is proving to be...</p>',
  },
];

// In-memory storage for mock data mutations
let blogsStore = [...MOCK_BLOGS];

// Simulate async delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBlogs(filters?: BlogFilters): Promise<BlogsResult> {
  try {
    await delay(300);

    let filtered = [...blogsStore];

    // Filter by search
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchLower) ||
          blog.excerpt.toLowerCase().includes(searchLower)
      );
    }

    // Filter by status
    if (filters?.status && filters.status !== 'ALL') {
      filtered = filtered.filter((blog) => blog.status === filters.status);
    }

    // Filter by category
    if (filters?.category && filters.category !== 'ALL') {
      filtered = filtered.filter((blog) => blog.category === filters.category);
    }

    // Sort by updatedAt desc
    filtered.sort((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });

    const total = filtered.length;
    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 10;
    const totalPages = Math.ceil(total / pageSize);

    // Paginate
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const blogs = filtered.slice(start, end);

    return {
      blogs,
      total,
      page,
      pageSize,
      totalPages,
    };
  } catch (error) {
    throw new Error('Failed to fetch blogs');
  }
}

export async function getBlogById(id: string): Promise<Blog | null> {
  try {
    await delay(300);
    const blog = blogsStore.find((b) => b.id === id);
    return blog || null;
  } catch (error) {
    throw new Error('Failed to fetch blog');
  }
}

export async function createBlog(data: Partial<Blog>): Promise<Blog> {
  try {
    await delay(300);

    const newBlog: Blog = {
      id: Date.now().toString(),
      title: data.title || 'Untitled',
      slug: data.slug || `untitled-${Date.now()}`,
      excerpt: data.excerpt || '',
      content: data.content || '',
      featuredImage: data.featuredImage || '',
      status: data.status || 'DRAFT',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      author: data.author || 'Korvion Team',
      publishedAt: data.publishedAt || null,
      updatedAt: new Date().toISOString(),
      viewCount: 0,
      readingTime: data.readingTime || 5,
    };

    blogsStore.push(newBlog);
    return newBlog;
  } catch (error) {
    throw new Error('Failed to create blog');
  }
}

export async function updateBlog(id: string, data: Partial<Blog>): Promise<Blog> {
  try {
    await delay(300);

    const index = blogsStore.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new Error('Blog not found');
    }

    blogsStore[index] = {
      ...blogsStore[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    return blogsStore[index];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to update blog');
  }
}

export async function deleteBlog(id: string): Promise<{ success: boolean }> {
  try {
    await delay(300);

    const index = blogsStore.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new Error('Blog not found');
    }

    blogsStore.splice(index, 1);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to delete blog');
  }
}

export async function publishBlog(id: string): Promise<Blog> {
  try {
    await delay(300);

    const index = blogsStore.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new Error('Blog not found');
    }

    blogsStore[index] = {
      ...blogsStore[index],
      status: 'PUBLISHED',
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return blogsStore[index];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to publish blog');
  }
}

export async function unpublishBlog(id: string): Promise<Blog> {
  try {
    await delay(300);

    const index = blogsStore.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new Error('Blog not found');
    }

    blogsStore[index] = {
      ...blogsStore[index],
      status: 'DRAFT',
      updatedAt: new Date().toISOString(),
    };

    return blogsStore[index];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to unpublish blog');
  }
}

export async function duplicateBlog(id: string): Promise<Blog> {
  try {
    await delay(300);

    const original = blogsStore.find((b) => b.id === id);
    if (!original) {
      throw new Error('Blog not found');
    }

    const newBlog: Blog = {
      ...original,
      id: Date.now().toString(),
      title: `Copy of ${original.title}`,
      slug: `${original.slug}-copy-${Date.now()}`,
      status: 'DRAFT',
      publishedAt: null,
      updatedAt: new Date().toISOString(),
      viewCount: 0,
    };

    blogsStore.push(newBlog);
    return newBlog;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to duplicate blog');
  }
}

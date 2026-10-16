'use server';

import slugify from 'slugify';

export type CategoryStatus = 'ACTIVE' | 'INACTIVE';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string | null;
  seoTitle: string;
  seoDescription: string;
  postCount: number;
  status: CategoryStatus;
  createdAt: string;
  updatedAt: string;
}

const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Comprehensive digital marketing strategies and insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    seoTitle: 'Digital Marketing Tips & Strategies | Korvion Media',
    seoDescription: 'Explore expert digital marketing strategies, tips, and best practices to grow your business online.',
    postCount: 12,
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    name: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization tips and techniques',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
    seoTitle: 'SEO Tips & Optimization Techniques | Korvion Media',
    seoDescription: 'Learn the latest SEO strategies to improve your website rankings and drive organic traffic.',
    postCount: 8,
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Modern web development practices and tutorials',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    seoTitle: 'Web Development Tutorials & Best Practices | Korvion Media',
    seoDescription: 'Discover modern web development techniques, frameworks, and best practices for building amazing websites.',
    postCount: 5,
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    name: 'AI & Automation',
    slug: 'ai-automation',
    description: 'Artificial intelligence and business automation',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
    seoTitle: 'AI & Automation Solutions | Korvion Media',
    seoDescription: 'Explore how AI and automation can transform your business processes and boost productivity.',
    postCount: 3,
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    name: 'Branding',
    slug: 'branding',
    description: 'Brand strategy and identity design',
    image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800',
    seoTitle: 'Branding & Identity Design | Korvion Media',
    seoDescription: 'Build a powerful brand identity with our expert branding strategies and design tips.',
    postCount: 2,
    status: 'INACTIVE',
    createdAt: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// In-memory storage for mock data mutations
const categoriesStore = [...MOCK_CATEGORIES];

// Simulate async delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCategories(): Promise<Category[]> {
  try {
    await delay(300);
    return [...categoriesStore].sort((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
}

export async function getCategoryById(id: string): Promise<Category | null> {
  try {
    await delay(300);
    const category = categoriesStore.find((c) => c.id === id);
    return category || null;
  } catch (error) {
    throw new Error('Failed to fetch category');
  }
}

export async function createCategory(
  data: Omit<Category, 'id' | 'createdAt' | 'updatedAt' | 'postCount'>
): Promise<Category> {
  try {
    await delay(300);

    const slug = data.slug || slugify(data.name, { lower: true, strict: true });

    // Check for duplicate slug
    if (categoriesStore.some((c) => c.slug === slug)) {
      throw new Error('A category with this slug already exists');
    }

    const newCategory: Category = {
      id: Date.now().toString(),
      name: data.name,
      slug,
      description: data.description || '',
      image: data.image || null,
      seoTitle: data.seoTitle || data.name,
      seoDescription: data.seoDescription || '',
      postCount: 0,
      status: data.status || 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    categoriesStore.push(newCategory);
    return newCategory;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to create category');
  }
}

export async function updateCategory(
  id: string,
  data: Partial<Omit<Category, 'id' | 'createdAt' | 'updatedAt' | 'postCount'>>
): Promise<Category> {
  try {
    await delay(300);

    const index = categoriesStore.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }

    // If slug is being updated, check for duplicates
    if (data.slug && data.slug !== categoriesStore[index].slug) {
      if (categoriesStore.some((c) => c.id !== id && c.slug === data.slug)) {
        throw new Error('A category with this slug already exists');
      }
    }

    categoriesStore[index] = {
      ...categoriesStore[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    return categoriesStore[index];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to update category');
  }
}

export async function deleteCategory(id: string): Promise<{ success: boolean }> {
  try {
    await delay(300);

    const index = categoriesStore.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }

    // Check if category has posts
    if (categoriesStore[index].postCount > 0) {
      throw new Error(
        `Cannot delete category with ${categoriesStore[index].postCount} posts. Please reassign or delete the posts first.`
      );
    }

    categoriesStore.splice(index, 1);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to delete category');
  }
}

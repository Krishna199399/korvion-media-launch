'use server';

import slugify from 'slugify';

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  postCount: number;
  createdAt: string;
  updatedAt: string;
}

const MOCK_TAGS: Tag[] = [
  {
    id: '1',
    name: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization tips and techniques',
    postCount: 15,
    createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    name: 'Marketing',
    slug: 'marketing',
    description: 'Marketing strategies and best practices',
    postCount: 12,
    createdAt: new Date(Date.now() - 85 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    name: 'Social Media',
    slug: 'social-media',
    description: 'Social media marketing and engagement',
    postCount: 10,
    createdAt: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    name: 'Content',
    slug: 'content',
    description: 'Content creation and marketing',
    postCount: 8,
    createdAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    name: 'Branding',
    slug: 'branding',
    description: 'Brand identity and strategy',
    postCount: 7,
    createdAt: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '6',
    name: 'Automation',
    slug: 'automation',
    description: 'Business process automation',
    postCount: 6,
    createdAt: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '7',
    name: 'AI',
    slug: 'ai',
    description: 'Artificial intelligence applications',
    postCount: 5,
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '8',
    name: 'Web Design',
    slug: 'web-design',
    description: 'Website design and user experience',
    postCount: 5,
    createdAt: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '9',
    name: 'Mobile',
    slug: 'mobile',
    description: 'Mobile app development and marketing',
    postCount: 4,
    createdAt: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '10',
    name: 'Analytics',
    slug: 'analytics',
    description: 'Data analytics and insights',
    postCount: 4,
    createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '11',
    name: 'Strategy',
    slug: 'strategy',
    description: 'Business and marketing strategy',
    postCount: 3,
    createdAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '12',
    name: 'Growth',
    slug: 'growth',
    description: 'Business growth and scaling',
    postCount: 3,
    createdAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 32 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// In-memory storage for mock data mutations
const tagsStore = [...MOCK_TAGS];

// Simulate async delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getTags(): Promise<Tag[]> {
  try {
    await delay(300);
    return [...tagsStore].sort((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  } catch (error) {
    throw new Error('Failed to fetch tags');
  }
}

export async function getTagById(id: string): Promise<Tag | null> {
  try {
    await delay(300);
    const tag = tagsStore.find((t) => t.id === id);
    return tag || null;
  } catch (error) {
    throw new Error('Failed to fetch tag');
  }
}

export async function createTag(
  data: Omit<Tag, 'id' | 'createdAt' | 'updatedAt' | 'postCount'>
): Promise<Tag> {
  try {
    await delay(300);

    const slug = data.slug || slugify(data.name, { lower: true, strict: true });

    // Check for duplicate slug
    if (tagsStore.some((t) => t.slug === slug)) {
      throw new Error('A tag with this slug already exists');
    }

    const newTag: Tag = {
      id: Date.now().toString(),
      name: data.name,
      slug,
      description: data.description || null,
      postCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tagsStore.push(newTag);
    return newTag;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to create tag');
  }
}

export async function updateTag(
  id: string,
  data: Partial<Omit<Tag, 'id' | 'createdAt' | 'updatedAt' | 'postCount'>>
): Promise<Tag> {
  try {
    await delay(300);

    const index = tagsStore.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Tag not found');
    }

    // If slug is being updated, check for duplicates
    if (data.slug && data.slug !== tagsStore[index].slug) {
      if (tagsStore.some((t) => t.id !== id && t.slug === data.slug)) {
        throw new Error('A tag with this slug already exists');
      }
    }

    tagsStore[index] = {
      ...tagsStore[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    return tagsStore[index];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to update tag');
  }
}

export async function deleteTag(id: string): Promise<{ success: boolean }> {
  try {
    await delay(300);

    const index = tagsStore.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Tag not found');
    }

    tagsStore.splice(index, 1);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to delete tag');
  }
}

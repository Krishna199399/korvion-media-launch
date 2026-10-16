'use server';

export interface MediaItem {
  id: string;
  url: string;
  thumbnailUrl: string;
  alt: string;
  caption: string;
  fileName: string;
  fileSize: number; // bytes
  mimeType: string;
  width: number;
  height: number;
  uploadedAt: string;
}

export interface MediaFilters {
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface MediaResult {
  items: MediaItem[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

const MOCK_MEDIA: MediaItem[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    alt: 'Digital Marketing Strategy Dashboard',
    caption: 'Modern marketing analytics and strategy planning',
    fileName: 'digital-marketing-strategy.jpg',
    fileSize: 2457600, // ~2.4MB
    mimeType: 'image/jpeg',
    width: 1920,
    height: 1080,
    uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920',
    thumbnailUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400',
    alt: 'SEO Optimization Workspace',
    caption: 'Search engine optimization tools and techniques',
    fileName: 'seo-optimization.jpg',
    fileSize: 2867200, // ~2.7MB
    mimeType: 'image/jpeg',
    width: 1920,
    height: 1080,
    uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    alt: 'Business Analytics Dashboard',
    caption: 'Data-driven decision making and ROI analysis',
    fileName: 'business-analytics.jpg',
    fileSize: 3145728, // ~3MB
    mimeType: 'image/jpeg',
    width: 1920,
    height: 1080,
    uploadedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1280',
    thumbnailUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400',
    alt: 'Content Writing and Blogging',
    caption: 'Creative content creation workspace',
    fileName: 'content-writing.jpg',
    fileSize: 1572864, // ~1.5MB
    mimeType: 'image/jpeg',
    width: 1280,
    height: 720,
    uploadedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=1280',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=400',
    alt: 'Brand Design Studio',
    caption: 'Professional branding and identity design',
    fileName: 'brand-design.jpg',
    fileSize: 1310720, // ~1.25MB
    mimeType: 'image/jpeg',
    width: 1280,
    height: 720,
    uploadedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1280',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400',
    alt: 'Social Media Marketing',
    caption: 'Social media strategy and engagement',
    fileName: 'social-media.jpg',
    fileSize: 1468006, // ~1.4MB
    mimeType: 'image/jpeg',
    width: 1280,
    height: 720,
    uploadedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400',
    alt: 'Web Development Code',
    caption: 'Modern web development and coding',
    fileName: 'web-development.jpg',
    fileSize: 819200, // ~800KB
    mimeType: 'image/jpeg',
    width: 800,
    height: 600,
    uploadedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    alt: 'AI and Automation Technology',
    caption: 'Artificial intelligence and machine learning',
    fileName: 'ai-automation.jpg',
    fileSize: 716800, // ~700KB
    mimeType: 'image/jpeg',
    width: 800,
    height: 600,
    uploadedAt: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400',
    alt: 'Mobile App Design',
    caption: 'Responsive mobile application interface',
    fileName: 'mobile-design.png',
    fileSize: 512000, // ~500KB
    mimeType: 'image/png',
    width: 600,
    height: 400,
    uploadedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400',
    alt: 'AI Technology Interface',
    caption: 'Next-generation AI user interface',
    fileName: 'ai-interface.png',
    fileSize: 409600, // ~400KB
    mimeType: 'image/png',
    width: 600,
    height: 400,
    uploadedAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// In-memory storage for mock data mutations
const mediaStore = [...MOCK_MEDIA];

// Simulate async delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMedia(filters?: MediaFilters): Promise<MediaResult> {
  try {
    await delay(300);

    let filtered = [...mediaStore];

    // Filter by search
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.fileName.toLowerCase().includes(searchLower) ||
          item.alt.toLowerCase().includes(searchLower) ||
          item.caption.toLowerCase().includes(searchLower)
      );
    }

    // Sort by uploadedAt desc
    filtered.sort((a, b) => {
      return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
    });

    const total = filtered.length;
    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 12;
    const totalPages = Math.ceil(total / pageSize);

    // Paginate
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const items = filtered.slice(start, end);

    return {
      items,
      total,
      page,
      pageSize,
      totalPages,
    };
  } catch (error) {
    throw new Error('Failed to fetch media');
  }
}

export async function getMediaById(id: string): Promise<MediaItem | null> {
  try {
    await delay(300);
    const item = mediaStore.find((m) => m.id === id);
    return item || null;
  } catch (error) {
    throw new Error('Failed to fetch media item');
  }
}

export async function uploadMedia(formData: FormData): Promise<MediaItem[]> {
  try {
    await delay(300);

    // Mock upload - in real app would upload to storage
    const files = formData.getAll('files');
    const uploadedItems: MediaItem[] = [];

    for (let i = 0; i < files.length; i++) {
      const newItem: MediaItem = {
        id: Date.now().toString() + i,
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        alt: 'Uploaded image',
        caption: '',
        fileName: `uploaded-${Date.now()}-${i}.jpg`,
        fileSize: 1048576,
        mimeType: 'image/jpeg',
        width: 800,
        height: 600,
        uploadedAt: new Date().toISOString(),
      };

      mediaStore.unshift(newItem);
      uploadedItems.push(newItem);
    }

    return uploadedItems;
  } catch (error) {
    throw new Error('Failed to upload media');
  }
}

export async function updateMedia(
  id: string,
  data: Partial<MediaItem>
): Promise<MediaItem> {
  try {
    await delay(300);

    const index = mediaStore.findIndex((m) => m.id === id);
    if (index === -1) {
      throw new Error('Media item not found');
    }

    mediaStore[index] = {
      ...mediaStore[index],
      ...data,
    };

    return mediaStore[index];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to update media');
  }
}

export async function deleteMedia(id: string): Promise<{ success: boolean }> {
  try {
    await delay(300);

    const index = mediaStore.findIndex((m) => m.id === id);
    if (index === -1) {
      throw new Error('Media item not found');
    }

    mediaStore.splice(index, 1);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to delete media');
  }
}

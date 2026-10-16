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
    publishedAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing strategies, from predictive analytics to personalized customer experiences.',
    content: `
      <h2 id="ai-revolution">The AI Revolution in Marketing</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's reshaping how businesses approach digital marketing today. From predictive analytics to hyper-personalized customer experiences, AI is enabling marketers to achieve unprecedented levels of efficiency and effectiveness.</p>
      <p>The integration of machine learning algorithms into marketing platforms has democratized access to sophisticated analytics that were once available only to enterprise-level organizations. Today, businesses of all sizes can leverage AI to understand customer behavior, predict trends, and optimize campaigns in real-time.</p>
      
      <h2 id="key-applications">Key AI Applications in Modern Marketing</h2>
      <p>AI-powered tools are transforming every aspect of the marketing funnel. Chatbots provide instant customer support, predictive analytics forecast campaign performance, and recommendation engines deliver personalized content at scale.</p>
      <ul>
        <li>Predictive lead scoring that identifies high-value prospects</li>
        <li>Dynamic content personalization based on user behavior</li>
        <li>Automated A/B testing and campaign optimization</li>
        <li>Natural language processing for sentiment analysis</li>
        <li>Computer vision for visual content analysis and generation</li>
      </ul>
      
      <blockquote>
        "AI doesn't replace marketers—it amplifies their capabilities. The brands winning today are those that blend human creativity with machine intelligence."
      </blockquote>
      
      <h2 id="implementation-strategy">Building Your AI Marketing Stack</h2>
      <p>Implementing AI in your marketing strategy doesn't require a complete overhaul. Start with specific use cases where AI can deliver immediate value, such as email personalization or predictive analytics for ad spend optimization.</p>
      <p>The key is to ensure your data infrastructure can support AI initiatives. Clean, structured data is the foundation of any successful AI implementation. Without quality data, even the most sophisticated algorithms will underperform.</p>
      
      <pre><code>// Example: Simple customer segmentation with AI
const segmentCustomers = async (customerData) => {
  const segments = await aiModel.predict({
    features: ['lifetime_value', 'engagement_score', 'purchase_frequency'],
    data: customerData
  });
  return segments;
};</code></pre>
      
      <h2 id="future-outlook">The Future of AI-Driven Marketing</h2>
      <p>As AI technology continues to evolve, we're seeing the emergence of more sophisticated applications like generative AI for content creation, voice search optimization, and predictive customer journey mapping. The marketers who embrace these tools early will gain a significant competitive advantage.</p>
      <p>The future belongs to those who can seamlessly integrate AI into their marketing workflows while maintaining the human touch that builds genuine customer relationships. Technology enables scale, but authenticity drives loyalty.</p>
    `,
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
    publishedAt: '2026-01-10T14:00:00Z',
    updatedAt: '2026-01-10T14:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
    excerpt: 'Learn the latest SEO techniques that drive organic traffic and sustainable growth for modern businesses.',
    content: `
      <h2 id="modern-seo">Modern SEO: Beyond Keywords</h2>
      <p>Search engine optimization has evolved far beyond simple keyword stuffing. Today's SEO requires a holistic approach that considers user experience, technical performance, and content quality as equal pillars of success.</p>
      <p>Google's algorithms have become increasingly sophisticated, prioritizing websites that deliver genuine value to users. This shift means that sustainable SEO success comes from building great experiences, not gaming the system.</p>
      
      <h2 id="technical-foundation">Building a Strong Technical Foundation</h2>
      <p>Technical SEO forms the backbone of your organic visibility. Without proper technical optimization, even the best content will struggle to rank.</p>
      <ul>
        <li>Core Web Vitals optimization for speed and user experience</li>
        <li>Mobile-first indexing compliance</li>
        <li>Structured data implementation for rich snippets</li>
        <li>XML sitemap and robots.txt configuration</li>
        <li>HTTPS security and SSL certificates</li>
      </ul>
      
      <h2 id="content-strategy">Content That Ranks and Converts</h2>
      <p>Creating content that both ranks well and converts visitors requires understanding search intent. Every query represents a specific need—your content must address that need comprehensively.</p>
      
      <blockquote>
        "The best SEO is no SEO. When your content genuinely serves your audience, search engines will naturally reward you."
      </blockquote>
      
      <p>Focus on creating comprehensive, authoritative content that covers topics in depth. Google's algorithms increasingly favor content that demonstrates expertise, authoritativeness, and trustworthiness (E-A-T).</p>
      
      <h2 id="link-building">Strategic Link Building</h2>
      <p>Quality backlinks remain a crucial ranking factor, but the approach has changed. Focus on earning links through valuable content, strategic partnerships, and genuine relationship building rather than manipulative tactics.</p>
      
      <pre><code>// Monitor your SEO metrics
const trackSEOMetrics = {
  organicTraffic: 'Track monthly growth trends',
  keywordRankings: 'Monitor target keyword positions',
  backlinks: 'Quality over quantity',
  conversionRate: 'Traffic that converts matters most'
};</code></pre>
    `,
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
    publishedAt: '2026-01-05T09:00:00Z',
    updatedAt: '2026-01-05T09:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    excerpt: 'Speed and conversion go hand in hand. Learn how to build websites that load instantly and convert visitors into customers.',
    content: `
      <h2 id="performance-matters">Why Performance Is Revenue</h2>
      <p>Website performance directly impacts your bottom line. Studies show that a one-second delay in page load time can reduce conversions by 7%. For e-commerce sites, this translates to significant revenue loss.</p>
      <p>But performance isn't just about speed—it's about creating a smooth, responsive experience that builds trust and encourages users to take action. A high-performance website signals professionalism and reliability.</p>
      
      <h2 id="optimization-strategies">Core Optimization Strategies</h2>
      <p>Building a fast website requires attention to multiple factors, from server response times to client-side rendering optimization.</p>
      <ul>
        <li>Image optimization with next-gen formats (WebP, AVIF)</li>
        <li>Code splitting and lazy loading for JavaScript</li>
        <li>CDN implementation for global content delivery</li>
        <li>Browser caching strategies</li>
        <li>Minification and compression of assets</li>
      </ul>
      
      <blockquote>
        "Performance is not a feature—it's a fundamental requirement. Users expect instant gratification, and slow sites simply don't compete."
      </blockquote>
      
      <h2 id="conversion-optimization">Conversion-Focused Design</h2>
      <p>A fast website is worthless if it doesn't convert. Every element on your site should guide users toward your conversion goals, whether that's making a purchase, signing up for a newsletter, or booking a call.</p>
      <p>Use clear calls-to-action, reduce friction in forms, and ensure your value proposition is immediately obvious. Test everything—colors, copy, placement, and flow—to continuously improve conversion rates.</p>
      
      <pre><code>// Performance monitoring example
const monitorPerformance = () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
  console.log('Time to First Byte:', perfData.responseStart - perfData.requestStart);
};</code></pre>
      
      <h2 id="mobile-first">Mobile-First Approach</h2>
      <p>With mobile traffic dominating web usage, a mobile-first approach is essential. Design for small screens first, then progressively enhance for larger devices. This ensures your core experience is optimized for the majority of your audience.</p>
    `,
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
    publishedAt: '2025-12-28T11:00:00Z',
    updatedAt: '2025-12-28T11:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
    excerpt: 'Stay ahead with the latest social media trends and strategies that drive engagement and business growth.',
    content: `
      <h2 id="social-landscape">The Evolving Social Landscape</h2>
      <p>Social media marketing in 2026 is about authentic connection, not broadcast messaging. Platforms reward content that sparks genuine engagement and keeps users on the platform longer.</p>
      <p>The rise of short-form video, ephemeral content, and social commerce has transformed how brands interact with audiences. Success requires adapting to these formats while maintaining brand consistency.</p>
      
      <h2 id="content-strategy">Creating Engaging Content</h2>
      <p>Content that performs well on social media shares common characteristics: it's authentic, valuable, and designed for the specific platform. What works on LinkedIn won't necessarily work on TikTok.</p>
      <ul>
        <li>Platform-native content that feels natural, not forced</li>
        <li>Behind-the-scenes content that humanizes your brand</li>
        <li>User-generated content that builds community</li>
        <li>Educational content that provides real value</li>
        <li>Interactive content that encourages participation</li>
      </ul>
      
      <blockquote>
        "Social media is not a megaphone—it's a conversation. Brands that listen and respond authentically build loyal communities."
      </blockquote>
      
      <h2 id="community-building">Building Community, Not Just Followers</h2>
      <p>Follower count is a vanity metric. What matters is the strength of your community—engaged followers who actively participate and advocate for your brand.</p>
      <p>Foster community by responding to comments, featuring user content, and creating spaces for your audience to connect with each other. A strong community becomes your most powerful marketing asset.</p>
      
      <h2 id="measurement">Measuring What Matters</h2>
      <p>Track metrics that align with business goals: engagement rate, website traffic from social, lead generation, and customer acquisition cost. Likes and shares are nice, but revenue impact is what justifies investment.</p>
    `,
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
    publishedAt: '2025-12-20T08:00:00Z',
    updatedAt: '2025-12-20T08:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    excerpt: 'Understand the true return on content investment and learn how to measure content marketing effectiveness.',
    content: `
      <h2 id="roi-challenge">The Content ROI Challenge</h2>
      <p>Measuring content marketing ROI remains one of the biggest challenges for marketers. Unlike paid advertising with its clear attribution, content often influences conversions indirectly and over extended time periods.</p>
      <p>But difficulty doesn't mean impossibility. With the right framework and tools, you can quantify content's impact on revenue and justify continued investment.</p>
      
      <h2 id="metrics-framework">Building a Measurement Framework</h2>
      <p>Effective content measurement requires tracking metrics across the entire customer journey, from awareness to advocacy.</p>
      <ul>
        <li>Awareness metrics: reach, impressions, traffic, brand searches</li>
        <li>Engagement metrics: time on page, scroll depth, social shares</li>
        <li>Lead generation: email signups, demo requests, downloads</li>
        <li>Conversion metrics: influenced conversions, assisted conversions</li>
        <li>Retention metrics: repeat visits, customer lifetime value</li>
      </ul>
      
      <h2 id="attribution">Understanding Attribution</h2>
      <p>Content rarely converts on first touch. A prospect might read multiple blog posts, download a guide, watch a webinar, and then convert. Attribution models help you understand content's role in this journey.</p>
      
      <blockquote>
        "Content marketing is a long game. The ROI compounds over time as your content library grows and continues attracting qualified traffic."
      </blockquote>
      
      <pre><code>// Simple ROI calculation
const calculateContentROI = (contentCost, revenueGenerated) => {
  const roi = ((revenueGenerated - contentCost) / contentCost) * 100;
  return \`\${roi.toFixed(2)}%\`;
};

// Example
const monthlyContentCost = 5000;
const attributedRevenue = 25000;
console.log(calculateContentROI(monthlyContentCost, attributedRevenue));
// Output: "400.00%"</code></pre>
      
      <h2 id="optimization">Continuous Optimization</h2>
      <p>Use data to inform content strategy decisions. Double down on topics and formats that drive results. Retire or refresh underperforming content. Test headlines, CTAs, and content structures to improve performance.</p>
      
      <h2 id="long-term-value">The Long-Term Value Equation</h2>
      <p>Content's true value accumulates over time. A blog post published today can continue driving traffic and conversions for years. Factor this compound effect into your ROI calculations for a complete picture.</p>
    `,
  },
  {
    id: '6',
    title: 'The Future of CRM Automation',
    slug: 'future-of-crm-automation',
    category: 'CRM Automation',
    status: 'PUBLISHED',
    tags: ['CRM', 'Automation', 'Sales'],
    author: 'Korvion Team',
    viewCount: 134,
    readingTime: 7,
    publishedAt: '2025-12-15T10:00:00Z',
    updatedAt: '2025-12-15T10:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    excerpt: 'Automation is transforming customer relationship management. Learn how to build systems that scale personalized engagement.',
    content: `
      <h2 id="crm-evolution">The Evolution of CRM</h2>
      <p>Customer relationship management has evolved from simple contact databases to intelligent systems that predict behavior, automate outreach, and personalize experiences at scale.</p>
      <p>Modern CRM platforms integrate with every touchpoint in the customer journey, creating a unified view that enables truly personalized engagement. Automation amplifies this capability, allowing teams to maintain personal connections as they scale.</p>
      
      <h2 id="automation-opportunities">Key Automation Opportunities</h2>
      <ul>
        <li>Lead scoring and qualification based on behavior and firmographics</li>
        <li>Automated email sequences triggered by specific actions</li>
        <li>Task creation and assignment based on deal stage changes</li>
        <li>Data enrichment and cleansing workflows</li>
        <li>Predictive analytics for churn risk and upsell opportunities</li>
      </ul>
      
      <blockquote>
        "The best automation feels personal. When done right, customers don't realize they're interacting with automated systems."
      </blockquote>
      
      <h2 id="implementation">Implementing Smart Automation</h2>
      <p>Start with workflows that solve specific pain points. Map out your current processes, identify bottlenecks, and design automation that eliminates manual work while maintaining quality.</p>
      <p>The key is balance—automate repetitive tasks while preserving human touchpoints for high-value interactions. Not everything should be automated.</p>
      
      <h2 id="future-trends">Emerging Trends</h2>
      <p>AI-powered CRM systems are becoming predictive, not just reactive. They identify at-risk customers before they churn, suggest optimal outreach timing, and even generate personalized messaging based on customer data.</p>
    `,
  },
  {
    id: '7',
    title: 'Branding for Startups: Building Recognition',
    slug: 'branding-for-startups',
    category: 'Branding',
    status: 'PUBLISHED',
    tags: ['Branding', 'Startups', 'Design'],
    author: 'Korvion Team',
    viewCount: 167,
    readingTime: 6,
    publishedAt: '2025-12-10T13:00:00Z',
    updatedAt: '2025-12-10T13:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800',
    excerpt: 'Your brand is your promise to customers. Learn how to build a memorable brand identity from the ground up.',
    content: `
      <h2 id="brand-foundation">Building Your Brand Foundation</h2>
      <p>A strong brand is more than a logo—it's the complete experience customers have with your company. For startups, establishing a clear brand identity early creates consistency and trust as you grow.</p>
      <p>Your brand encompasses your visual identity, tone of voice, values, and the emotions you evoke. Every touchpoint should reinforce your brand promise.</p>
      
      <h2 id="brand-strategy">Developing Brand Strategy</h2>
      <ul>
        <li>Define your mission, vision, and core values</li>
        <li>Identify your target audience and their pain points</li>
        <li>Articulate your unique value proposition</li>
        <li>Establish brand personality and voice</li>
        <li>Create visual identity guidelines</li>
      </ul>
      
      <blockquote>
        "Your brand is what people say about you when you're not in the room. Make sure you're intentional about shaping that conversation."
      </blockquote>
      
      <h2 id="visual-identity">Creating Visual Identity</h2>
      <p>Your visual brand should be distinctive, memorable, and appropriate for your audience. Invest in professional design—your visual identity is often the first impression potential customers have of your business.</p>
      <p>Consistency is crucial. Use the same colors, fonts, and design elements across all channels to build recognition and trust.</p>
      
      <h2 id="brand-experience">Delivering Brand Experience</h2>
      <p>Every interaction is an opportunity to reinforce your brand. From your website to customer service to product packaging, ensure every touchpoint reflects your brand identity and values.</p>
    `,
  },
  {
    id: '8',
    title: 'E-Learning Content Creation: Best Practices',
    slug: 'e-learning-content-creation',
    category: 'Content Creation',
    status: 'PUBLISHED',
    tags: ['E-Learning', 'Content', 'Education'],
    author: 'Korvion Team',
    viewCount: 145,
    readingTime: 8,
    publishedAt: '2025-12-05T15:00:00Z',
    updatedAt: '2025-12-05T15:00:00Z',
    featuredImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    excerpt: 'Creating engaging e-learning content requires understanding pedagogy and technology. Learn the best practices for online education.',
    content: `
      <h2 id="elearning-landscape">The E-Learning Revolution</h2>
      <p>Online education has transformed how people learn and develop skills. Creating effective e-learning content requires balancing pedagogical principles with engaging multimedia experiences.</p>
      <p>The best e-learning content is interactive, bite-sized, and immediately applicable. Learners want to gain skills they can use right away, not just consume information.</p>
      
      <h2 id="content-design">Designing Effective Content</h2>
      <ul>
        <li>Break content into digestible modules (microlearning)</li>
        <li>Use multimedia (video, audio, interactive elements)</li>
        <li>Include practice exercises and assessments</li>
        <li>Provide immediate feedback on performance</li>
        <li>Design for mobile learning on-the-go</li>
      </ul>
      
      <h2 id="engagement">Maximizing Engagement</h2>
      <p>Engagement is the biggest challenge in e-learning. Without physical presence, keeping learners motivated requires intentional design choices.</p>
      
      <blockquote>
        "The best e-learning doesn't feel like learning—it feels like an experience. Make it interactive, relevant, and rewarding."
      </blockquote>
      
      <p>Gamification elements like progress tracking, achievements, and leaderboards can boost engagement. But don't overdo it—the focus should remain on learning outcomes.</p>
      
      <h2 id="technology">Leveraging Technology</h2>
      <p>Modern learning management systems offer powerful tools for creating and delivering content. Use analytics to understand how learners interact with your content and identify areas for improvement.</p>
      
      <pre><code>// Track learning progress
const trackProgress = (userId, moduleId, completion) => {
  return {
    user: userId,
    module: moduleId,
    completed: completion,
    timestamp: new Date().toISOString()
  };
};</code></pre>
      
      <h2 id="accessibility">Accessibility Matters</h2>
      <p>Design e-learning content that's accessible to all learners, including those with disabilities. Provide captions, transcripts, and keyboard navigation. Inclusive design benefits everyone.</p>
    `,
  },
];

// In-memory storage for mock data mutations
const blogsStore = [...MOCK_BLOGS];

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

export interface AutosaveResult {
  success: boolean;
  id?: string;
  timestamp: string;
}

export async function autosaveBlog(
  id: string | null,
  data: Partial<Blog>
): Promise<AutosaveResult> {
  try {
    // TODO: Connect to Supabase for autosave
    await delay(200);

    const timestamp = new Date().toISOString();

    if (!id) {
      // Create new draft
      const newBlog: Blog = {
        id: Date.now().toString(),
        title: data.title || 'Untitled',
        slug: data.slug || `untitled-${Date.now()}`,
        excerpt: data.excerpt || '',
        content: data.content || '',
        featuredImage: data.featuredImage || '',
        status: 'DRAFT',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        author: data.author || 'Korvion Team',
        publishedAt: null,
        updatedAt: timestamp,
        viewCount: 0,
        readingTime: data.readingTime || 5,
      };

      blogsStore.push(newBlog);

      return {
        success: true,
        id: newBlog.id,
        timestamp,
      };
    } else {
      // Update existing blog
      const index = blogsStore.findIndex((b) => b.id === id);
      if (index !== -1) {
        blogsStore[index] = {
          ...blogsStore[index],
          ...data,
          updatedAt: timestamp,
        };
      }

      return {
        success: true,
        id,
        timestamp,
      };
    }
  } catch (error) {
    console.error('Autosave error:', error);
    return {
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// ====================================
// PUBLIC BLOG FUNCTIONS (Frontend)
// ====================================

export interface Category {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface PublishedBlogsResult {
  posts: Blog[];
  total: number;
  hasMore: boolean;
}

/**
 * Get published blogs with optional filters
 */
export async function getPublishedBlogs(filters?: {
  categorySlug?: string;
  tagSlug?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<PublishedBlogsResult> {
  try {
    await delay(300);

    let filtered = blogsStore.filter((blog) => blog.status === 'PUBLISHED');

    // Filter by category
    if (filters?.categorySlug) {
      filtered = filtered.filter(
        (blog) => blog.category.toLowerCase().replace(/\s+/g, '-') === filters.categorySlug
      );
    }

    // Filter by tag
    if (filters?.tagSlug) {
      filtered = filtered.filter((blog) =>
        blog.tags.some((tag) => tag.toLowerCase().replace(/\s+/g, '-') === filters.tagSlug)
      );
    }

    // Filter by search
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchLower) ||
          blog.excerpt.toLowerCase().includes(searchLower) ||
          blog.content.toLowerCase().includes(searchLower)
      );
    }

    // Sort by published date desc
    filtered.sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });

    const total = filtered.length;
    const page = filters?.page || 1;
    const limit = filters?.limit || 6;

    // Paginate
    const start = (page - 1) * limit;
    const end = start + limit;
    const posts = filtered.slice(start, end);
    const hasMore = end < total;

    return { posts, total, hasMore };
  } catch (error) {
    throw new Error('Failed to fetch published blogs');
  }
}

/**
 * Get the featured blog post (first one with featured flag)
 * For mock, we'll just return the most recent published post
 */
export async function getFeaturedPost(): Promise<Blog | null> {
  try {
    await delay(300);

    const published = blogsStore
      .filter((blog) => blog.status === 'PUBLISHED')
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });

    return published[0] || null;
  } catch (error) {
    throw new Error('Failed to fetch featured post');
  }
}

/**
 * Get a blog by slug
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    await delay(300);
    const blog = blogsStore.find(
      (b) => b.slug === slug && b.status === 'PUBLISHED'
    );
    return blog || null;
  } catch (error) {
    throw new Error('Failed to fetch blog by slug');
  }
}

/**
 * Get related posts by category
 */
export async function getRelatedPosts(
  blogId: string,
  categoryName: string,
  limit: number = 3
): Promise<Blog[]> {
  try {
    await delay(300);

    const related = blogsStore
      .filter(
        (blog) =>
          blog.id !== blogId &&
          blog.category === categoryName &&
          blog.status === 'PUBLISHED'
      )
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, limit);

    return related;
  } catch (error) {
    throw new Error('Failed to fetch related posts');
  }
}

/**
 * Search blogs
 */
export async function searchBlogs(query: string): Promise<Blog[]> {
  try {
    await delay(300);

    if (!query.trim()) {
      return [];
    }

    const searchLower = query.toLowerCase();
    const results = blogsStore
      .filter(
        (blog) =>
          blog.status === 'PUBLISHED' &&
          (blog.title.toLowerCase().includes(searchLower) ||
            blog.excerpt.toLowerCase().includes(searchLower) ||
            blog.content.toLowerCase().includes(searchLower) ||
            blog.tags.some((tag) => tag.toLowerCase().includes(searchLower)))
      )
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });

    return results;
  } catch (error) {
    throw new Error('Failed to search blogs');
  }
}

/**
 * Get blogs by category slug
 */
export async function getBlogsByCategory(categorySlug: string): Promise<Blog[]> {
  try {
    await delay(300);

    const blogs = blogsStore
      .filter(
        (blog) =>
          blog.status === 'PUBLISHED' &&
          blog.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
      )
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });

    return blogs;
  } catch (error) {
    throw new Error('Failed to fetch blogs by category');
  }
}

/**
 * Get blogs by tag slug
 */
export async function getBlogsByTag(tagSlug: string): Promise<Blog[]> {
  try {
    await delay(300);

    const blogs = blogsStore
      .filter(
        (blog) =>
          blog.status === 'PUBLISHED' &&
          blog.tags.some((tag) => tag.toLowerCase().replace(/\s+/g, '-') === tagSlug)
      )
      .sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });

    return blogs;
  } catch (error) {
    throw new Error('Failed to fetch blogs by tag');
  }
}

/**
 * Increment view count (mock implementation)
 */
export async function incrementViewCount(id: string): Promise<void> {
  try {
    const blog = blogsStore.find((b) => b.id === id);
    if (blog) {
      blog.viewCount += 1;
      console.log(`View count incremented for blog ${id}: ${blog.viewCount}`);
    }
  } catch (error) {
    console.error('Failed to increment view count:', error);
  }
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<Category[]> {
  try {
    await delay(300);

    const categoryMap = new Map<string, Category>();

    blogsStore
      .filter((blog) => blog.status === 'PUBLISHED')
      .forEach((blog) => {
        const slug = blog.category.toLowerCase().replace(/\s+/g, '-');
        if (!categoryMap.has(slug)) {
          categoryMap.set(slug, {
            name: blog.category,
            slug,
          });
        }
      });

    return Array.from(categoryMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<Tag[]> {
  try {
    await delay(300);

    const tagMap = new Map<string, Tag>();

    blogsStore
      .filter((blog) => blog.status === 'PUBLISHED')
      .forEach((blog) => {
        blog.tags.forEach((tag) => {
          const slug = tag.toLowerCase().replace(/\s+/g, '-');
          if (!tagMap.has(slug)) {
            tagMap.set(slug, {
              name: tag,
              slug,
            });
          }
        });
      });

    return Array.from(tagMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } catch (error) {
    throw new Error('Failed to fetch tags');
  }
}

-- =================================================================
-- Korvion Media Blog - Seed Data
-- Run AFTER schema.sql
-- =================================================================

-- Categories
INSERT INTO public.categories (name, slug, description, color) VALUES
  ('Digital Marketing', 'digital-marketing', 'Tips, strategies, and insights on digital marketing trends and best practices', '#FF6B35'),
  ('SEO & Performance', 'seo-performance', 'Search engine optimization techniques, Core Web Vitals, and website performance', '#E55A2B'),
  ('Social Media', 'social-media', 'Social media marketing strategies for Instagram, LinkedIn, Facebook and more', '#FF8C00'),
  ('Branding & Design', 'branding-design', 'Brand identity, visual design, and creative strategy insights', '#CC4400'),
  ('Business Growth', 'business-growth', 'Business strategy, lead generation, and growth hacking for startups and SMEs', '#FF6B35')
ON CONFLICT (slug) DO NOTHING;

-- Tags
INSERT INTO public.tags (name, slug) VALUES
  ('SEO', 'seo'),
  ('Content Marketing', 'content-marketing'),
  ('Social Media Marketing', 'social-media-marketing'),
  ('Google Ads', 'google-ads'),
  ('Instagram Marketing', 'instagram-marketing'),
  ('Lead Generation', 'lead-generation'),
  ('Brand Strategy', 'brand-strategy'),
  ('Web Design', 'web-design'),
  ('Analytics', 'analytics'),
  ('Email Marketing', 'email-marketing')
ON CONFLICT (slug) DO NOTHING;

-- Sample Blog Posts
INSERT INTO public.blog_posts (
  title, slug, excerpt, content, status,
  author_name, reading_time_minutes, is_featured,
  meta_title, meta_description, published_at
) VALUES
(
  '10 Digital Marketing Strategies That Actually Work in 2025',
  '10-digital-marketing-strategies-2025',
  'Discover the proven digital marketing strategies that leading brands use to drive real growth in 2025. From AI-powered personalization to short-form video dominance.',
  '<h2>The Digital Marketing Landscape in 2025</h2><p>Digital marketing has evolved dramatically. Brands that adapt thrive; those that don''t fall behind. At Korvion Media, we''ve tested hundreds of strategies across industries. Here are the 10 that consistently deliver results.</p><h2>1. AI-Powered Content Personalization</h2><p>Personalization is no longer optional. AI tools now allow even small businesses to deliver tailored experiences at scale...</p>',
  'published',
  'Korvion Media Team',
  8,
  TRUE,
  '10 Digital Marketing Strategies That Work in 2025 | Korvion Media',
  'Discover proven digital marketing strategies for 2025. Expert insights from Korvion Media on SEO, social media, paid ads, and more.',
  NOW() - INTERVAL '2 days'
),
(
  'How to Rank #1 on Google: A Complete SEO Guide for 2025',
  'how-to-rank-1-on-google-seo-guide-2025',
  'Learn the exact SEO techniques used to rank websites at the top of Google search results. Step-by-step guide covering technical SEO, on-page optimization, and link building.',
  '<h2>Why SEO Still Matters in 2025</h2><p>Despite countless predictions about SEO''s death, organic search continues to drive the highest quality traffic to websites. Here''s how to dominate Google rankings...</p>',
  'published',
  'Korvion Media Team',
  12,
  TRUE,
  'How to Rank #1 on Google: Complete SEO Guide 2025 | Korvion Media',
  'Complete SEO guide for 2025. Learn technical SEO, keyword research, on-page optimization, and link building strategies from Korvion Media experts.',
  NOW() - INTERVAL '5 days'
),
(
  'Instagram Marketing for Businesses: The 2025 Playbook',
  'instagram-marketing-businesses-2025-playbook',
  'Master Instagram marketing with our comprehensive 2025 playbook. Learn Reels strategy, Stories optimization, hashtag research, and how to convert followers into customers.',
  '<h2>Instagram in 2025: Opportunity or Noise?</h2><p>With over 2 billion monthly active users, Instagram remains one of the most powerful platforms for businesses. But the algorithm has changed...</p>',
  'published',
  'Korvion Media Team',
  10,
  FALSE,
  'Instagram Marketing for Businesses: 2025 Playbook | Korvion Media',
  'Master Instagram marketing in 2025. Reels strategy, Stories optimization, hashtag research, and conversion tactics from Korvion Media.',
  NOW() - INTERVAL '8 days'
),
(
  'Why Your Brand Identity Is Costing You Customers',
  'why-brand-identity-costing-you-customers',
  'A weak brand identity silently kills sales. Discover the 7 signs your branding is hurting your business and how to fix them with strategic design and messaging.',
  '<h2>The Hidden Cost of Poor Branding</h2><p>Most businesses focus on marketing tactics while ignoring their brand foundation. This is a costly mistake...</p>',
  'published',
  'Korvion Media Team',
  7,
  FALSE,
  'Why Your Brand Identity Is Costing You Customers | Korvion Media',
  '7 signs your brand identity is hurting sales. Learn how strategic branding drives customer trust and revenue growth.',
  NOW() - INTERVAL '12 days'
),
(
  'Google Ads vs. Facebook Ads: Which Delivers Better ROI in 2025?',
  'google-ads-vs-facebook-ads-roi-2025',
  'The eternal debate settled with real data. We analyzed ₹50 lakhs in ad spend across industries to determine which platform delivers superior ROI for different business types.',
  '<h2>The Great Ad Platform Debate</h2><p>Every business owner asks: Google Ads or Facebook Ads? The honest answer is: it depends. But we can give you a data-driven framework to decide...</p>',
  'published',
  'Korvion Media Team',
  9,
  TRUE,
  'Google Ads vs Facebook Ads: ROI Comparison 2025 | Korvion Media',
  'Data-driven comparison of Google Ads vs Facebook Ads ROI. Real campaign data analysis to help you choose the right platform for your business.',
  NOW() - INTERVAL '15 days'
),
(
  'How to Build a Content Marketing Strategy from Scratch',
  'build-content-marketing-strategy-from-scratch',
  'No fluff, just a proven framework for building a content marketing strategy that drives traffic, generates leads, and builds brand authority.',
  '<h2>Why Most Content Strategies Fail</h2><p>Businesses publish content without a strategy and wonder why they get no results. A real content strategy starts with understanding your audience deeply...</p>',
  'published',
  'Korvion Media Team',
  11,
  FALSE,
  'How to Build a Content Marketing Strategy | Korvion Media',
  'Step-by-step guide to building a content marketing strategy that drives traffic and generates leads for your business.',
  NOW() - INTERVAL '20 days'
),
(
  'CRM Selection Guide: Choosing the Right Tool for Your Business',
  'crm-selection-guide-right-tool-business',
  'With hundreds of CRM options available, choosing the right one is overwhelming. We compare the top CRMs for small and medium businesses in India.',
  '<h2>Why CRM Selection Matters</h2><p>The wrong CRM can cost you thousands of hours and hundreds of thousands of rupees. The right CRM transforms your sales and marketing operations...</p>',
  'published',
  'Korvion Media Team',
  8,
  FALSE,
  'CRM Selection Guide for Small Businesses India 2025 | Korvion Media',
  'Compare top CRM tools for small and medium businesses in India. Expert recommendations from Korvion Media based on real implementation experience.',
  NOW() - INTERVAL '25 days'
),
(
  'The Ultimate Guide to Email Marketing Automation',
  'ultimate-guide-email-marketing-automation',
  'Email marketing still delivers the highest ROI of any digital marketing channel. Learn how to build automated email sequences that nurture leads and drive conversions 24/7.',
  '<h2>Email Marketing in the Age of AI</h2><p>While social media algorithms change constantly, email remains the one channel you truly own. Here''s how to maximize its potential through automation...</p>',
  'draft',
  'Korvion Media Team',
  13,
  FALSE,
  'Ultimate Guide to Email Marketing Automation 2025 | Korvion Media',
  'Build email marketing automation sequences that nurture leads and drive conversions. Complete guide from Korvion Media.',
  NULL
)
ON CONFLICT (slug) DO NOTHING;

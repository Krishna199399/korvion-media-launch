# Blog CMS Implementation Plan: Phases 8-12

## Exploration Summary

### Existing Files Found
- **Actions**: `d:\korvion-media-launch\src\actions\blog.ts` already exists with mock data (8 blogs, CRUD operations)
- **Admin pages**: Blog admin dashboard exists at `d:\korvion-media-launch\src\app\admin\blogs\page.tsx`
- **Root layout**: `d:\korvion-media-launch\src\app\layout.tsx` includes Nav, Footer, SmoothScroll wrapper
- **Blog directory**: `d:\korvion-media-launch\src\app\blog\` does NOT exist yet
- **Newsletter actions**: Does not exist, needs to be created

### Project Context
- **Framework**: Next.js 15 App Router with TypeScript strict mode
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Design System**: 
  - Primary orange: `oklch(0.70 0.20 45)` via `--primary` CSS variable
  - Fonts: Space Grotesk (display/headings), Inter (body), JetBrains Mono (mono)
  - Gradient: `--gradient-primary` already defined
  - Shadow utilities: `.shadow-glow`, `.shadow-glow-sm`, `.shadow-elegant`
- **Dependencies Confirmed**:
  - `reading-time`: ✅ Installed (v1.5.0)
  - `date-fns`: ✅ Installed (v4.1.0)
  - `dompurify`: ✅ Installed (v3.4.16) + types
  - `lucide-react`: ✅ Installed (v0.460.0)
  - `sonner`: ✅ Installed (v2.0.7)
  - `framer-motion`: ✅ Installed (v12.38.0)
  - `slugify`: ✅ Installed (v1.6.9)
- **Build Commands**: 
  - Dev: `npm run dev`
  - Build: `npm run build`
  - No test framework configured
- **Key Pattern**: Layout already wraps all pages with Nav+Footer+SmoothScroll — page files must NOT duplicate these

### Potential Conflicts
- ✅ `blog.ts` actions already exist with 8 mock posts but need additional public functions
- ⚠️ Need to ADD functions to existing `blog.ts`, not replace it
- ⚠️ No test framework exists, so verification will use build success + manual inspection

### Design Decisions
1. **Mock data approach**: Extend existing mock patterns in `blog.ts` with richer HTML content for 8 posts
2. **Component organization**: Create `src/components/blog/` directory for all blog-specific components
3. **Route structure**: 
   - `/blog` → homepage
   - `/blog/[slug]` → individual post
   - `/blog/category/[slug]` → category pages
   - `/blog/tag/[slug]` → tag pages
   - `/blog/search` → search results
4. **Newsletter storage**: Mock in-memory array similar to blog posts pattern
5. **Admin newsletter**: Place at `/admin/newsletter` alongside existing `/admin/blogs`

---

## Implementation Plan

### PHASE 8: BLOG HOMEPAGE

- [ ] 1. Extend blog actions with public functions for the homepage.
      Add to `d:\korvion-media-launch\src\actions\blog.ts`: `getPublishedBlogs(filters)`, `getFeaturedPost()`, `getBlogsByCategory(categorySlug)`, `getBlogsByTag(tagSlug)`, `searchBlogs(query)`, `getRelatedPosts(blogId, categoryId)`, `incrementViewCount(id)`. Replace the 8 mock posts with full HTML content (3-5 paragraphs with headings, lists, blockquotes, code blocks, images). Return only published posts from public functions.
      Files: `d:\korvion-media-launch\src\actions\blog.ts`
      Verify: Run `npm run build` and confirm no TypeScript errors in blog.ts.

- [ ] 2. Create BlogHero component.
      Large centered hero: H1 "Insights, Ideas & Digital Growth", subtitle, search bar with icon (redirects to `/blog/search?q={query}`), gradient orange background using `bg-hero-glow` utility class, responsive padding. Use existing design system colors and fonts.
      Files: `d:\korvion-media-launch\src\components\blog\BlogHero.tsx`
      Verify: Run `npm run build` and confirm BlogHero compiles without errors.

- [ ] 3. Create FeaturedBlogCard component.
      Horizontal layout (image 50% left, content 50% right on desktop; stacked on mobile). Category pill with orange bg, H2 title, excerpt (2 lines), author avatar+name, date formatted with date-fns, reading time, "Read Article" button with arrow, hover scale animation using framer-motion. Link to `/blog/[slug]`.
      Files: `d:\korvion-media-launch\src\components\blog\FeaturedBlogCard.tsx`
      Verify: Run `npm run build` and confirm FeaturedBlogCard compiles without errors.

- [ ] 4. Create BlogCard component.
      Vertical card: featured image top with aspect-ratio, category pill, H3 title, 2-line truncated excerpt, author+date+reading time row, hover lift effect (translateY + shadow-elegant). Full card is Link to `/blog/[slug]`.
      Files: `d:\korvion-media-launch\src\components\blog\BlogCard.tsx`
      Verify: Run `npm run build` and confirm BlogCard compiles without errors.

- [ ] 5. Create BlogGrid component.
      Responsive grid: 3 columns desktop (lg:grid-cols-3), 2 columns tablet (md:grid-cols-2), 1 column mobile. Gap spacing (gap-6 lg:gap-8). Optional loading skeleton state with animated pulse.
      Files: `d:\korvion-media-launch\src\components\blog\BlogGrid.tsx`
      Verify: Run `npm run build` and confirm BlogGrid compiles without errors.

- [ ] 6. Create CategoryNav component.
      Horizontal scrollable tab nav: "All" tab + dynamic category tabs extracted from blog posts. Orange underline for active state (border-b-2 border-primary). Smooth horizontal scroll on mobile. Filter posts on click using URL search params.
      Files: `d:\korvion-media-launch\src\components\blog\CategoryNav.tsx`
      Verify: Run `npm run build` and confirm CategoryNav compiles without errors.

- [ ] 7. Create NewsletterCTA component.
      Centered section: "Get Digital Growth Insights" heading, subtitle, email input + "Subscribe" button with gradient-primary bg, success toast (sonner) on submit, error state for invalid email. Calls `subscribeNewsletter` action (to be created in Phase 12).
      Files: `d:\korvion-media-launch\src\components\blog\NewsletterCTA.tsx`
      Verify: Run `npm run build` and confirm NewsletterCTA compiles without errors.

- [ ] 8. Create blog homepage at /blog.
      Server component: fetch published blogs and featured post. Layout: BlogHero, FeaturedBlogCard (if featured exists), CategoryNav, BlogGrid (6 posts), pagination if >6 posts, NewsletterCTA. Do NOT add Nav or Footer (already in root layout). Set page metadata for SEO.
      Files: `d:\korvion-media-launch\src\app\blog\page.tsx`
      Verify: Run `npm run build`, then `npm run dev` and navigate to `http://localhost:3000/blog` to confirm the page renders correctly.

### PHASE 9: INDIVIDUAL BLOG POST

- [ ] 9. Create ArticleHeader component.
      Breadcrumb navigation (Blog > Category > Title) using lucide-react ChevronRight. Category pill, H1 title, excerpt paragraph, meta row (author avatar+name, publish date, updated date if different, reading time), share buttons row. Featured image hero with proper aspect ratio below header.
      Files: `d:\korvion-media-launch\src\components\blog\ArticleHeader.tsx`
      Verify: Run `npm run build` and confirm ArticleHeader compiles without errors.

- [ ] 10. Create ArticleContent component.
      Render sanitized HTML using DOMPurify (isomorphic-dompurify for SSR). Apply prose styling: H2/H3 with Space Grotesk, paragraph spacing, ul/ol lists, blockquotes with orange left border (border-l-4 border-primary), code blocks with dark bg (bg-muted), responsive images (max-w-full h-auto), tables with borders, styled links. Use Tailwind prose utilities or custom classes.
      Files: `d:\korvion-media-launch\src\components\blog\ArticleContent.tsx`
      Verify: Run `npm run build` and confirm ArticleContent compiles without errors.

- [ ] 11. Create TableOfContents component.
      Extract H2/H3 headings from content HTML string. Desktop: sticky sidebar (sticky top-20). Mobile: collapsible at top. Scroll-spy highlights current section (track scroll position with useEffect + IntersectionObserver). Links scroll to section IDs.
      Files: `d:\korvion-media-launch\src\components\blog\TableOfContents.tsx`
      Verify: Run `npm run build` and confirm TableOfContents compiles without errors.

- [ ] 12. Create ShareButtons component.
      Row of share buttons: LinkedIn, Facebook, X/Twitter, WhatsApp, Copy Link. Use proper share URLs (e.g., LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url={url}`). Copy Link shows success toast using sonner. Lucide-react icons.
      Files: `d:\korvion-media-launch\src\components\blog\ShareButtons.tsx`
      Verify: Run `npm run build` and confirm ShareButtons compiles without errors.

- [ ] 13. Create AuthorCard component.
      Card with author avatar (large), name (H3), bio paragraph, social links row (LinkedIn, Twitter) with icons. Use gradient border or shadow-elegant for card styling.
      Files: `d:\korvion-media-launch\src\components\blog\AuthorCard.tsx`
      Verify: Run `npm run build` and confirm AuthorCard compiles without errors.

- [ ] 14. Create RelatedPosts component.
      "Related Articles" heading, grid of 3 BlogCards filtered by same category. Fetch from `getRelatedPosts(blogId, categoryId)` action. Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile.
      Files: `d:\korvion-media-launch\src\components\blog\RelatedPosts.tsx`
      Verify: Run `npm run build` and confirm RelatedPosts compiles without errors.

- [ ] 15. Create ArticleNavigation component.
      Two-column layout: Previous post (left) and Next post (right). Each shows small thumbnail, post title, arrow icon. Links to `/blog/[slug]`. Pass prev/next blog objects as props.
      Files: `d:\korvion-media-launch\src\components\blog\ArticleNavigation.tsx`
      Verify: Run `npm run build` and confirm ArticleNavigation compiles without errors.

- [ ] 16. Create individual blog post page at /blog/[slug].
      Server component: fetch blog by slug using `getBlogBySlug(slug)`, return 404 if not found. Generate metadata for SEO (title, description, OpenGraph). Increment view count server-side. Layout: ArticleHeader, two-column desktop (ArticleContent 66%, TableOfContents 33% sticky), mobile TOC collapsible at top, ShareButtons, AuthorCard, RelatedPosts, ArticleNavigation, NewsletterCTA. Add JSON-LD BlogPosting schema in metadata.
      Files: `d:\korvion-media-launch\src\app\blog\[slug]\page.tsx`
      Verify: Run `npm run build`, then `npm run dev` and navigate to a specific blog post URL (e.g., `http://localhost:3000/blog/how-ai-is-transforming-digital-marketing-2026`) to confirm the page renders correctly.

### PHASE 10: CATEGORY & TAG PAGES

- [ ] 17. Create category page at /blog/category/[slug].
      Server component: fetch blogs by category using `getBlogsByCategory(slug)`. Show breadcrumb (Blog > Category Name), category header with name, description, post count. BlogGrid with filtered posts. Pagination if >6 posts. Generate metadata with category name in title.
      Files: `d:\korvion-media-launch\src\app\blog\category\[slug]\page.tsx`
      Verify: Run `npm run build`, then `npm run dev` and navigate to a category page (e.g., `http://localhost:3000/blog/category/ai-automation`) to confirm filtering works.

- [ ] 18. Create tag page at /blog/tag/[slug].
      Server component: fetch blogs by tag using `getBlogsByTag(slug)`. Same layout pattern as category page: breadcrumb (Blog > Tag Name), tag header with name and post count, BlogGrid, pagination. Generate metadata with tag name.
      Files: `d:\korvion-media-launch\src\app\blog\tag\[slug]\page.tsx`
      Verify: Run `npm run build`, then `npm run dev` and navigate to a tag page (e.g., `http://localhost:3000/blog/tag/ai`) to confirm filtering works.

### PHASE 11: SEARCH

- [ ] 19. Create SearchBar component.
      Large input with search icon (lucide-react), placeholder "Search articles...". Debounce input 500ms (using setTimeout or custom hook). On submit or enter, redirect to `/blog/search?q={query}`. Loading spinner shown during debounce.
      Files: `d:\korvion-media-launch\src\components\blog\SearchBar.tsx`
      Verify: Run `npm run build` and confirm SearchBar compiles without errors.

- [ ] 20. Create search results page at /blog/search.
      Server component: read `q` from searchParams, call `searchBlogs(query)`. Display "Search results for '{query}'" heading, results count, BlogGrid with results. Empty state component when no results: "No articles found. Try different keywords" with SearchBar to try again.
      Files: `d:\korvion-media-launch\src\app\blog\search\page.tsx`
      Verify: Run `npm run build`, then `npm run dev` and test search at `http://localhost:3000/blog/search?q=marketing` to confirm search works.

### PHASE 12: NEWSLETTER

- [ ] 21. Create newsletter actions.
      New file with `subscribeNewsletter(email)` function: validate email format (zod schema), check for duplicates in mock array, add to mock subscribers array with timestamp. `getSubscribers()` function returns all subscribers (admin only - no actual auth check in mock). Export `Subscriber` type with email, subscribedAt, status fields.
      Files: `d:\korvion-media-launch\src\actions\newsletter.ts`
      Verify: Run `npm run build` and confirm newsletter.ts compiles without TypeScript errors.

- [ ] 22. Create newsletter admin page at /admin/newsletter.
      Server component: fetch subscribers using `getSubscribers()`. Display table: email, subscribed date (formatted with date-fns), status (Active/Unsubscribed). Mock "Export to CSV" button (shows toast, doesn't actually export). Filter dropdown by status. Match admin dashboard styling from existing `/admin/blogs` page.
      Files: `d:\korvion-media-launch\src\app\admin\newsletter\page.tsx`
      Verify: Run `npm run build`, then `npm run dev` and navigate to `http://localhost:3000/admin/newsletter` to confirm the page renders and displays the newsletter table.

---

## Verification Strategy

Since no test framework is configured:
1. **Build verification**: Run `npm run build` after each component/page creation to catch TypeScript errors
2. **Dev server testing**: After completing each phase, run `npm run dev` and manually test:
   - Phase 8: Navigate to `/blog` homepage
   - Phase 9: Click through to individual blog posts
   - Phase 10: Test category and tag filtering
   - Phase 11: Test search functionality
   - Phase 12: Test newsletter subscription and admin view
3. **Browser console**: Check for runtime errors in browser console
4. **Responsive testing**: Test on mobile viewport (DevTools) to verify responsive layouts

## Order of Implementation

The phases are ordered by dependency:
1. **Phase 8 first**: Establishes blog actions and homepage components (foundation)
2. **Phase 9 next**: Individual post pages depend on Phase 8 components (BlogCard for related posts, NewsletterCTA)
3. **Phase 10 & 11 parallel**: Category/tag/search pages all use BlogGrid from Phase 8 (can be done in any order)
4. **Phase 12 last**: Newsletter depends on NewsletterCTA from Phase 8 being referenced correctly

## Notes

- All file paths are absolute using `d:\korvion-media-launch\` prefix
- TypeScript strict mode is enabled, ensure proper typing
- Use existing design system tokens (`--primary`, `--gradient-primary`, etc.) from `styles.css`
- Nav and Footer are in root layout - do NOT add to page files
- Mock data approach matches existing `blog.ts` pattern for consistency
- DOMPurify sanitization is critical for rendering user HTML content safely
- Reading time calculation: use existing `reading-time` package installed in dependencies
- Date formatting: use `date-fns` format function for consistency
- All components should be responsive mobile-first

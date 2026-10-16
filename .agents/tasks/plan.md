# Implementation Plan: Phase 6 (Media Library) & Phase 7 (Categories & Tags)

This plan covers building the Media Library and Categories/Tags management features for the Korvion Media admin CMS. All implementations follow the existing patterns found in the codebase, particularly from `src/actions/blog.ts`, `src/components/admin/BlogTable.tsx`, and `src/app/admin/blogs/page.tsx`.

## Context & Patterns

**Existing Patterns to Follow:**
- **Server Actions**: Use `"use server"` directive, TypeScript interfaces, mock data arrays, in-memory stores, async/await with 300ms delay simulation (see `blog.ts`, `dashboard.ts`)
- **Admin Pages**: Server component wrapper + client component for interactivity (see `blogs/page.tsx` + `BlogsPageClient.tsx`)
- **Admin Layout**: Pages under `/admin` automatically inherit `AdminSidebar` via `layout.tsx`
- **Components**: Client components with `'use client'` directive, shadcn/ui primitives (Dialog, Table, Form, Badge, Button, etc.)
- **TypeScript**: Strict typing with exported interfaces
- **Slug Generation**: Use `slugify` package from node_modules
- **Forms**: react-hook-form + zod validation (already available in dependencies)
- **Modals**: Radix UI Dialog component (already configured in `src/components/ui/dialog.tsx`)
- **Tables**: shadcn/ui Table component with dropdown menus for actions
- **Delete Confirmation**: Use existing `ConfirmDialog` component pattern

**Available Dependencies:**
- react-dropzone (for file uploads)
- slugify (for slug auto-generation)
- zod + react-hook-form (for validation)
- lucide-react (for icons)
- All shadcn/ui Radix primitives

---

## PHASE 6 - MEDIA LIBRARY

### Media Library Features:
1. Mock image library with Unsplash URLs
2. Grid display with responsive columns (4→3→2)
3. Drag-and-drop upload with preview
4. Image selection modal for blog editor
5. Image detail modal with metadata editing

---

- [ ] 1. Create media server actions at `src/actions/media.ts`
      
      Implement TypeScript interfaces and CRUD operations with 10 mock images using Unsplash URLs. Each image should have: id, filename, url, thumbnailUrl, mimeType (image/jpeg or image/png), size (in bytes), width, height, altText, caption, uploadedAt, uploadedBy. Include: getMedia (with search/pagination), getMediaById, uploadMedia (mock upload with progress), updateMedia (for alt text/caption), deleteMedia. Follow the exact pattern from `blog.ts` with in-memory store, 300ms delays, and proper error handling.
      
      **Files:** `src/actions/media.ts`
      
      **Verify:** Run `npm run build` and confirm no TypeScript errors in media.ts

- [ ] 2. Create MediaGrid component at `src/components/admin/MediaGrid.tsx`
      
      Build a responsive grid component that displays images in 4 columns (desktop), 3 columns (tablet), 2 columns (mobile). Each grid item shows the image thumbnail with a hover overlay containing: checkbox for selection mode, file size, dimensions. Use Next.js Image component with `unoptimized` prop for external Unsplash URLs. Include loading skeleton states following the pattern in `BlogTable.tsx`. Props: `images`, `loading`, `selectionMode`, `selectedIds`, `onSelect`, `onImageClick`.
      
      **Files:** `src/components/admin/MediaGrid.tsx`
      
      **Verify:** Run `npm run build` and confirm component compiles without errors

- [ ] 3. Create MediaUploader component at `src/components/admin/MediaUploader.tsx`
      
      Implement drag-and-drop file upload using react-dropzone. Accept only image files (image/jpeg, image/png, image/webp, image/gif). Show dropzone with dashed border and upload icon. Display selected files as thumbnail previews with filename and size. Show mock upload progress bar using shadcn/ui Progress component (simulate progress 0→100% over 2 seconds). Include file type and size validation (max 10MB per file). Support multiple file selection. Use lucide-react icons: Upload, Image, X (for removing files).
      
      **Files:** `src/components/admin/MediaUploader.tsx`
      
      **Verify:** Run `npm run build` and confirm component compiles without errors

- [ ] 4. Create MediaLibraryModal component at `src/components/admin/MediaLibraryModal.tsx`
      
      Build a modal for selecting images from the media library (to be used in blog editor). Use shadcn/ui Dialog component following the pattern in `dialog.tsx`. Include: search input, tabs for "Library" and "Upload", MediaGrid for library view, MediaUploader for upload tab, pagination controls (using shadcn/ui Pagination component), "Select" button that returns the selected image URL via `onSelect` callback, "Cancel" button. Modal should be large (max-w-4xl). Props: `open`, `onOpenChange`, `onSelect`, `allowMultiple` (default false).
      
      **Files:** `src/components/admin/MediaLibraryModal.tsx`
      
      **Verify:** Run `npm run build` and confirm component compiles without errors

- [ ] 5. Create MediaDetailModal component at `src/components/admin/MediaDetailModal.tsx`
      
      Build a modal for viewing/editing single image details. Use Dialog component with two-column layout: left side shows large image preview, right side shows metadata form. Include: filename (read-only), dimensions and file size (read-only), MIME type (read-only), uploaded date (read-only), alt text input field, caption textarea field, "Copy URL" button with copy-to-clipboard functionality (show toast on success using sonner), "Delete" button (opens ConfirmDialog), "Save" button to update alt text and caption. Use react-hook-form for form state. Props: `image`, `open`, `onOpenChange`, `onUpdate`, `onDelete`.
      
      **Files:** `src/components/admin/MediaDetailModal.tsx`
      
      **Verify:** Run `npm run build` and confirm component compiles without errors

- [ ] 6. Create media library page at `src/app/admin/media/page.tsx`
      
      Build the full media library management page. Create two files: `page.tsx` (server component) and `MediaPageClient.tsx` (client component). Server component fetches media using getMedia action and passes data to client component. Client component includes: AdminHeader with breadcrumb "Media Library", search input, "Upload" button (opens upload dialog), MediaGrid with click handler to open MediaDetailModal, pagination controls, empty state with EmptyState component when no images exist. Handle search with URL params and client-side state. Layout automatically inherits AdminSidebar from `/admin/layout.tsx`. Follow the exact pattern from `blogs/page.tsx` and `BlogsPageClient.tsx`.
      
      **Files:** `src/app/admin/media/page.tsx`, `src/app/admin/media/MediaPageClient.tsx`
      
      **Verify:** Run `npm run build` then `npm run dev`, navigate to http://localhost:3000/admin/media and confirm page renders with mock images, search works, upload modal opens, detail modal opens on image click, and pagination controls appear

---

## PHASE 7 - CATEGORIES & TAGS

### Categories & Tags Features:
1. Full CRUD for categories with SEO fields
2. Full CRUD for tags
3. Table views with inline actions
4. Modal forms for create/edit
5. Slug auto-generation

---

- [ ] 7. Create category server actions at `src/actions/category.ts`
      
      Implement category CRUD with 5 mock categories: "Digital Marketing", "SEO", "Web Development", "AI & Automation", "Branding". Each category has: id, name, slug, description, image (Unsplash URL for category hero image), seoTitle, seoDescription, postCount (number of blogs in category), status ('ACTIVE' | 'INACTIVE'), createdAt, updatedAt. Include: getCategories (with search/pagination), getCategoryById, createCategory (auto-generate slug from name using slugify if not provided), updateCategory, deleteCategory (check postCount > 0 and throw error if category has posts). Follow the blog.ts pattern with in-memory store and 300ms delays. Export CategoryStatus type.
      
      **Files:** `src/actions/category.ts`
      
      **Verify:** Run `npm run build` and confirm no TypeScript errors in category.ts

- [ ] 8. Create tag server actions at `src/actions/tag.ts`
      
      Implement tag CRUD with 12 mock tags: "seo", "marketing", "social-media", "content", "branding", "automation", "ai", "web-design", "mobile", "analytics", "strategy", "growth". Each tag has: id, name, slug, description, postCount, createdAt, updatedAt. Include: getTags (with search/pagination), getTagById, createTag (auto-generate slug from name using slugify if not provided), updateTag, deleteTag. Follow the blog.ts pattern. Tags are simpler than categories (no image, no SEO fields, no status).
      
      **Files:** `src/actions/tag.ts`
      
      **Verify:** Run `npm run build` and confirm no TypeScript errors in tag.ts

- [ ] 9. Create CategoryForm component at `src/components/admin/CategoryForm.tsx`
      
      Build a form component for creating/editing categories using react-hook-form + zod validation. Fields: name (required, Input), slug (Input with auto-generate button - use slugify on name, show copy icon button), description (Textarea), image URL (Input with "Browse Media" button that opens MediaLibraryModal), SEO Title (Input with character counter, max 60 chars), SEO Description (Textarea with character counter, max 160 chars), status toggle (Switch component - Active/Inactive). Include form validation: name required, slug required and URL-safe format, seoTitle max 60 chars, seoDescription max 160 chars. Show validation errors. Props: `category` (for edit mode), `onSubmit`, `onCancel`, `loading`. Use shadcn/ui Form components (form, form-field, form-item, form-label, form-control, form-message).
      
      **Files:** `src/components/admin/CategoryForm.tsx`
      
      **Verify:** Run `npm run build` and confirm component compiles without errors

- [ ] 10. Create TagForm component at `src/components/admin/TagForm.tsx`
      
      Build a simpler form for tags using react-hook-form + zod. Fields: name (required, Input), slug (Input with auto-generate button), description (Textarea, optional). Validation: name required, slug required and URL-safe. Props: `tag` (for edit mode), `onSubmit`, `onCancel`, `loading`. Follow the same pattern as CategoryForm but simpler (no image, no SEO fields, no status).
      
      **Files:** `src/components/admin/TagForm.tsx`
      
      **Verify:** Run `npm run build` and confirm component compiles without errors

- [ ] 11. Create categories management page at `src/app/admin/categories/page.tsx`
      
      Build full categories management with two files: `page.tsx` (server component) and `CategoriesPageClient.tsx` (client component). Server component fetches categories using getCategories action. Client component includes: AdminHeader with breadcrumb "Categories", search input, "New Category" button (opens modal with CategoryForm), Table displaying: thumbnail (60x40), name, slug, post count, status badge (Active=green, Inactive=gray), actions dropdown (Edit, Delete). Edit opens Dialog with CategoryForm. Delete opens ConfirmDialog and shows error toast if category has posts. Include pagination. Empty state when no categories. Follow BlogTable patterns for table structure and dropdown menus. Handle search with URL params.
      
      **Files:** `src/app/admin/categories/page.tsx`, `src/app/admin/categories/CategoriesPageClient.tsx`
      
      **Verify:** Run `npm run build` then `npm run dev`, navigate to http://localhost:3000/admin/categories and confirm: table renders with 5 mock categories, search works, "New Category" opens modal with form, edit modal opens with pre-filled data, delete shows confirmation dialog, slug auto-generates when typing name, and status toggle works

- [ ] 12. Create tags management page at `src/app/admin/tags/page.tsx`
      
      Build tags management with two files: `page.tsx` and `TagsPageClient.tsx`. Similar structure to categories but simpler: Table displays name, slug, post count, actions dropdown (Edit, Delete). No thumbnail, no status column. Edit opens Dialog with TagForm. Delete opens ConfirmDialog. Include search, pagination, empty state. Follow the same pattern as categories page but simplified for tags.
      
      **Files:** `src/app/admin/tags/page.tsx`, `src/app/admin/tags/TagsPageClient.tsx`
      
      **Verify:** Run `npm run build` then `npm run dev`, navigate to http://localhost:3000/admin/tags and confirm: table renders with 12 mock tags, search works, "New Tag" opens modal with form, edit modal pre-fills correctly, delete confirmation works, and slug auto-generation works

---

## Mock Data Specifications

### Media Mock Data (10 images):
Use high-quality Unsplash images relevant to digital marketing/business:
- 3 images: 1920x1080, ~2-3MB, image/jpeg
- 3 images: 1280x720, ~1-1.5MB, image/jpeg  
- 2 images: 800x600, ~500-800KB, image/jpeg
- 2 images: 600x400, ~300-500KB, image/png
Filenames: professional names like "digital-marketing-strategy.jpg", "seo-optimization.jpg", etc.
Upload dates: spread across last 30 days
Alt texts and captions: relevant marketing descriptions

### Category Mock Data (5 categories):
1. **Digital Marketing** - slug: digital-marketing, description: "Comprehensive digital marketing strategies and insights", image: marketing hero, 12 posts, ACTIVE
2. **SEO** - slug: seo, description: "Search engine optimization tips and techniques", image: SEO hero, 8 posts, ACTIVE  
3. **Web Development** - slug: web-development, description: "Modern web development practices and tutorials", image: coding hero, 5 posts, ACTIVE
4. **AI & Automation** - slug: ai-automation, description: "Artificial intelligence and business automation", image: AI hero, 3 posts, ACTIVE
5. **Branding** - slug: branding, description: "Brand strategy and identity design", image: design hero, 2 posts, INACTIVE

Each category includes seoTitle and seoDescription fields populated with relevant meta content.

### Tag Mock Data (12 tags):
"seo" (15 posts), "marketing" (12 posts), "social-media" (10 posts), "content" (8 posts), "branding" (7 posts), "automation" (6 posts), "ai" (5 posts), "web-design" (5 posts), "mobile" (4 posts), "analytics" (4 posts), "strategy" (3 posts), "growth" (3 posts)

---

## Dependencies & Build Commands

**Build Command:** `npm run build`  
**Dev Server:** `npm run dev`  
**Test Framework:** None configured (manual testing via dev server)

**Key Dependencies Already Available:**
- Next.js 15 with App Router
- TypeScript (strict mode)
- react-dropzone 20.1.2
- slugify 1.6.9
- zod 3.24.2
- react-hook-form 7.71.2
- lucide-react 0.460.0
- sonner 2.0.7 (toast notifications)
- All shadcn/ui components in `src/components/ui/`

**No new dependencies needed** - all required packages are already installed.

---

## Verification Strategy

After each step:
1. Run `npm run build` to catch TypeScript errors
2. For page steps (6, 11, 12): run `npm run dev` and manually test in browser
3. Verify responsive behavior at different breakpoints (mobile, tablet, desktop)
4. Test all interactive features (modals, forms, search, pagination)
5. Verify slug auto-generation works correctly
6. Test error states and validation messages
7. Confirm toast notifications appear for actions (copy, save, delete)

**Final Integration Test:**
- Navigate through all admin pages: /admin/media, /admin/categories, /admin/tags
- Test full workflows: create category with image from media library, edit tag with slug auto-gen, delete with confirmation
- Verify AdminSidebar navigation highlights correct active page
- Test search and pagination across all pages
- Verify all modals open/close correctly
- Test responsive layout on mobile viewport

---

## Notes

- All pages automatically inherit AdminSidebar layout via `/admin/layout.tsx` - no need to add it manually
- Use AdminHeader component at the top of each page for consistent breadcrumb navigation
- Follow the exact pattern from BlogTable for dropdown menus and table structure
- Use ConfirmDialog for all delete operations with destructive styling
- All forms should use react-hook-form + zod for validation
- Use sonner toast for success/error notifications (already configured)
- Media library should integrate with future blog editor (MediaLibraryModal designed for that)
- Categories and tags link to existing blog.ts mock data categories
- All server actions follow the same pattern: TypeScript interfaces, mock data, in-memory stores, 300ms async delays
- Slug generation: use `slugify(name, { lower: true, strict: true })` for URL-safe slugs

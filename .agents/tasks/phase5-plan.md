# Implementation Plan: Phase 5 - Blog Editor with Tiptap

## Project Context

**Project Type**: Next.js 15 App Router + TypeScript (strict mode) + Tailwind CSS 4
**Build System**: npm, Next.js build
**Test Command**: `npm run lint` (no test framework detected)
**Build Command**: `npm run build`
**Dev Command**: `npm run dev`

**Key Patterns Discovered**:
- All admin pages use `AdminHeader` with breadcrumbs
- Admin layout (`src/app/admin/layout.tsx`) provides `AdminSidebar` and auth check
- Server actions in `src/actions/*.ts` with mock implementations
- Client components use `"use client"` directive
- shadcn/ui components in `src/components/ui/*`
- Utility function `cn()` from `src/lib/utils.ts` for className merging
- Path alias `@/*` maps to `./src/*`
- Korvion brand colors: primary orange `oklch(0.70 0.20 45)`, custom CSS properties in `src/styles.css`
- Existing utilities: `generateSlug`, `sanitizeSlug`, `isValidSlug` in `src/lib/utils/slug.ts`
- Existing utilities: `calculateReadingTime`, `formatReadingTime`, `getReadingTimeStats` in `src/lib/utils/reading-time.ts`
- Blog actions already exist in `src/actions/blog.ts` with `createBlog`, `updateBlog`, `getBlogById` (mock implementations)

**Dependencies Confirmed Installed**:
- @tiptap/react, @tiptap/starter-kit
- @tiptap/extension-image, @tiptap/extension-link, @tiptap/extension-code-block, @tiptap/extension-table, @tiptap/extension-youtube, @tiptap/extension-placeholder
- react-dropzone, slugify, reading-time
- date-fns, zod, react-hook-form, @hookform/resolvers

**Existing Admin Structure**:
- `/admin` - Dashboard (StatsCard, AdminHeader, recent posts table)
- `/admin/blogs` - Blog listing page with filters, search, pagination (BlogsPageClient, BlogTable)
- `/admin/login` - Login page
- Admin components: AdminHeader, AdminSidebar, BlogTable, ConfirmDialog, EmptyState, StatsCard, StatusBadge

## Implementation Plan

- [ ] 1. **Create TiptapEditor component** in `src/components/admin/TiptapEditor.tsx`
      
      Configure Tiptap with all required extensions: StarterKit (document, paragraph, text, bold, italic, strike, code, heading, bulletList, orderedList, blockquote, codeBlock, horizontalRule, dropcursor, gapcursor, history), Image, Link, CodeBlock, Table (with TableRow, TableCell, TableHeader), YouTube, Placeholder. Use `useEditor` hook with editable content. Apply custom styles matching Korvion design: H2/H3 bold with proper sizing, paragraphs with line-height 1.7, lists indented, blockquotes with left border and gray background, code blocks with monospace and dark background, links blue underlined, images max-width 100% centered, tables bordered. EditorContent wrapper with min-height 400px. Export `TiptapEditor` component accepting `content: string`, `onChange: (html: string) => void`, `placeholder?: string`, `className?: string` props.
      
      **Files**: `src/components/admin/TiptapEditor.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in the TiptapEditor component.

- [ ] 2. **Create EditorToolbar component** in `src/components/admin/EditorToolbar.tsx`
      
      Build sticky toolbar with formatting buttons using shadcn/ui Toggle and ToggleGroup components. Include buttons for: bold, italic, strike, code, H2, H3, bulletList, orderedList, blockquote, codeBlock, link (with URL input dialog), image (trigger ImageUploadButton), table (insert 3x3), YouTube (with URL input dialog), horizontalRule, undo, redo. Each button checks `editor.isActive()` state and calls appropriate `editor.chain().focus()` commands. Use Lucide React icons. Toolbar should be sticky (top-0) with backdrop-blur background. Group related buttons with Separator. Accept `editor: Editor | null` prop.
      
      **Files**: `src/components/admin/EditorToolbar.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors. Check that toolbar buttons compile without issues.

- [ ] 3. **Create ImageUploadButton component** in `src/components/admin/ImageUploadButton.tsx`
      
      Create button that opens file picker for JPG/PNG/WebP images (max 5MB). Use `<input type="file" accept="image/jpeg,image/png,image/webp" />` hidden input. On file select, validate file type and size, show progress bar (mock progress 0-100% over 1 second using setTimeout), mock upload returning URL (for now use `URL.createObjectURL(file)`), insert image into Tiptap editor at cursor using `editor.chain().focus().setImage({ src: url }).run()`. Show error toast for validation failures. Accept `editor: Editor | null`, `onUploadStart?: () => void`, `onUploadComplete?: (url: string) => void` props. Use Button from shadcn/ui with ImagePlus icon.
      
      **Files**: `src/components/admin/ImageUploadButton.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in ImageUploadButton.

- [ ] 4. **Create FeaturedImageUploader component** in `src/components/admin/FeaturedImageUploader.tsx`
      
      Use `react-dropzone` (`useDropzone` hook) with drag & drop area. Accept JPG/PNG/WebP, max 5MB. Show dashed border dropzone when no image, image preview with remove button when uploaded. Include Input field for alt text below preview. Mock upload with progress bar (0-100% over 1 second). Return uploaded image URL via `onChange({ url: string, alt: string })` callback. Show file validation errors. Accept `value?: { url: string; alt: string }`, `onChange: (value: { url: string; alt: string } | null) => void`, `error?: string` props. Use Card component for container.
      
      **Files**: `src/components/admin/FeaturedImageUploader.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in FeaturedImageUploader.

- [ ] 5. **Create MetadataPanel component** in `src/components/admin/MetadataPanel.tsx`
      
      Create form panel with: title Input (required), slug Input with auto-generate from title using `generateSlug()` and real-time validation using `isValidSlug()` showing green checkmark or red error, excerpt Textarea with 160 char counter, category Select dropdown (hardcoded options: "AI & Automation", "SEO", "Web Development", "Social Media", "Digital Marketing", "Branding"), tags multi-select input (comma-separated or use Combobox), featured Switch toggle, reading time display (calculated from content using `getReadingTimeStats()`, read-only Badge). Accept form values via props and call `onChange` for each field. Use react-hook-form compatible field props. Show validation errors below fields.
      
      **Files**: `src/components/admin/MetadataPanel.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in MetadataPanel.

- [ ] 6. **Create SEOPanel component** in `src/components/admin/SEOPanel.tsx`
      
      Create Collapsible section (collapsed by default) with SEO fields: SEO title Input with 60 char counter, SEO description Textarea with 160 char counter, canonical URL Input, Open Graph section (og:title, og:description, og:image URL), robots meta Select (index/noindex, follow/nofollow options), Google search preview card showing title (blue link), URL (green), description (gray). All fields optional. Use Card and Collapsible from shadcn/ui. Accept form values and `onChange` callback.
      
      **Files**: `src/components/admin/SEOPanel.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in SEOPanel.

- [ ] 7. **Create PublishingPanel component** in `src/components/admin/PublishingPanel.tsx`
      
      Create right sidebar panel with: status Select ("DRAFT", "PUBLISHED", "SCHEDULED", "ARCHIVED"), scheduled date/time picker using Calendar and Popover (only show if status is SCHEDULED), save as draft Button (secondary variant), preview Button (outline variant, opens `/blog/[slug]` in new tab), publish/update Button (primary variant, different text based on mode), autosave indicator (small text showing "Saved" with timestamp or "Saving..." with loading spinner). Accept `mode: "create" | "edit"`, `status: BlogStatus`, `scheduledAt: string | null`, `lastSaved: Date | null`, `isSaving: boolean`, `onStatusChange`, `onScheduledAtChange`, `onSave`, `onPreview`, `onPublish` props. Use Card component for container with sticky positioning.
      
      **Files**: `src/components/admin/PublishingPanel.tsx`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in PublishingPanel.

- [ ] 8. **Create blog editor page for new posts** at `src/app/admin/blogs/new/page.tsx`
      
      Build two-column layout: 70% left (editor), 30% right (sidebar) on desktop, stacked on mobile using flexbox/grid. Include AdminHeader with breadcrumbs: Admin > Blogs > New Post. Use react-hook-form with zod schema validation for form management. Fields: title (required, min 3 chars), slug (required, must pass `isValidSlug()`), excerpt (max 160 chars), content (required, min 10 chars HTML), featuredImage (required), category (required), tags (array), status (default "DRAFT"), publishedAt (null for drafts), SEO fields (optional). Left column: TiptapEditor with EditorToolbar. Right column: MetadataPanel, FeaturedImageUploader, SEOPanel, PublishingPanel. Implement autosave every 30 seconds using `useEffect` + `setInterval`, calls `autosaveBlog` action (to be added), updates lastSaved state. On publish, validate form, call `createBlog` action from `src/actions/blog.ts`, redirect to `/admin/blogs` on success. Show loading state during save. Handle errors with toast notifications.
      
      **Files**: `src/app/admin/blogs/new/page.tsx`
      
      **Verify**: Run `npm run dev`, navigate to `/admin/blogs/new`, confirm page renders without errors, check browser console for issues.

- [ ] 9. **Create blog editor page for editing** at `src/app/admin/blogs/[id]/edit/page.tsx`
      
      Same layout and structure as new post page. Fetch blog data using `getBlogById(id)` from `src/actions/blog.ts` in server component, pass to client component. Pre-populate all form fields with existing blog data. Show loading skeleton while fetching. Change "Publish" button text to "Update". On update, call `updateBlog(id, data)` action, redirect to `/admin/blogs` on success. Show 404 page if blog not found. Handle autosave same as create page. Use `notFound()` from next/navigation if blog doesn't exist.
      
      **Files**: `src/app/admin/blogs/[id]/edit/page.tsx`
      
      **Verify**: Run `npm run dev`, navigate to `/admin/blogs/1/edit` (mock blog ID 1 exists), confirm page loads with pre-populated data, check browser console for issues.

- [ ] 10. **Add autosaveBlog action** to `src/actions/blog.ts`
      
      Add `autosaveBlog` server action function that accepts `id: string | null` (null for new drafts) and `data: Partial<Blog>`. For new drafts, create temporary blog with status "DRAFT" and return new ID. For existing blogs, update the blog. Add delay(200) to simulate network. Return `{ success: boolean; id?: string; timestamp: string }`. Add TypeScript types. This is a mock implementation - add TODO comment to connect to Supabase later.
      
      **Files**: `src/actions/blog.ts`
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors in blog actions file.

- [ ] 11. **Add Tiptap editor styles** to `src/styles.css`
      
      Add custom CSS layer for Tiptap editor prose styles at the end of file. Target `.tiptap-editor` class with styles for: `h2` (text-2xl font-bold mt-8 mb-4), `h3` (text-xl font-bold mt-6 mb-3), `p` (my-4 leading-relaxed), `ul/ol` (ml-6 my-4 space-y-2), `blockquote` (border-l-4 border-primary pl-4 py-2 my-4 italic bg-muted/30), `code` (inline: bg-muted px-1.5 py-0.5 rounded text-sm font-mono), `pre` (bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4), `a` (text-primary underline hover:text-primary/80), `img` (max-w-full mx-auto my-6 rounded-lg), `table` (w-full border-collapse my-4), `th/td` (border border-border p-2), `hr` (my-8 border-t-2 border-border). Use Tailwind @apply directive where possible.
      
      **Files**: `src/styles.css`
      
      **Verify**: Run `npm run build` and confirm CSS compiles without errors.

- [ ] 12. **Final integration testing and mobile responsiveness**
      
      Test complete flow: navigate to `/admin/blogs/new`, fill in title (auto-generates slug), write content in editor using all toolbar buttons (bold, headings, lists, images, links, tables), add featured image, fill metadata, select category/tags, fill SEO fields, save as draft, verify autosave indicator updates, publish blog, verify redirect to `/admin/blogs` and new blog appears in table. Test editing flow: click edit on existing blog, modify content, update blog. Test mobile: verify sidebar stacks below editor on small screens, toolbar wraps or scrolls horizontally, all inputs accessible. Fix any layout issues, TypeScript errors, or broken functionality discovered during testing.
      
      **Files**: Multiple files may need adjustments based on testing findings
      
      **Verify**: Run full manual test suite as described above. Confirm all features work in both desktop (1920px) and mobile (375px) viewports using browser dev tools.

## Notes

- All components follow existing patterns: shadcn/ui components, `cn()` utility, TypeScript strict mode
- Mock implementations for file uploads (use `URL.createObjectURL()` temporarily)
- Autosave uses mock backend - add TODO comments for Supabase integration
- Error handling uses console.error for now - can add toast notifications library later if needed
- All dates formatted using `date-fns` (already installed)
- Validation uses zod schemas with react-hook-form
- Mobile-first responsive design using Tailwind breakpoints (md:, lg:)
- Korvion brand colors from `src/styles.css` CSS variables
- No test framework found, so verification relies on build checks and manual testing

## Design Requirements Met

✅ All Tiptap extensions configured (StarterKit, Image, Link, CodeBlock, Table, YouTube, Placeholder)
✅ Toolbar with all formatting buttons and icons
✅ Auto-slug generation from title with real-time validation
✅ Image upload UI with progress and validation (mock backend)
✅ Form validation for required fields using zod
✅ Autosave every 30 seconds with indicator
✅ Mobile responsive (sidebar stacks below editor)
✅ TypeScript strict mode with proper types
✅ Professional Korvion brand design
✅ Loading states during save operations
✅ Error handling for validation and save errors
✅ Existing shadcn/ui components reused throughout

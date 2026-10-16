# Blog management system with mock data and full CRUD interface

A complete blog management interface built on Next.js server actions with in-memory mock data. The implementation includes a filterable blog list, status management workflow, and all CRUD operations. The interface uses Korvion's design system and handles pagination, search, and status transitions.

**Watch for:** Status badge color mismatch (likely), missing confirmation on publish/unpublish actions (confirmed), category filter derives from current page results only (confirmed), actions menu positioning on mobile (possible).

**Verdict**: NEEDS_CHANGES

## High-level view

The blog actions module maintains an in-memory store of 8 mock blog posts covering different categories and statuses, with all CRUD operations simulating 300ms network delay. Search and category filtering work against the full dataset before pagination, but the category dropdown list is built from the current page's results after filtering, so switching status filters can make categories disappear from the dropdown even when posts in those categories exist. Status badge colors mostly follow the spec except ARCHIVED uses yellow/outline instead of a muted gray treatment. The confirmation dialog handles loading state and destructive styling, but only delete operations use it — publish and unpublish apply immediately without confirmation, which may surprise users expecting a safety check. The table includes all required columns with thumbnail, reading time, and view count, and wraps in overflow-x-auto for mobile. The page composition follows Next.js App Router patterns with async server component fetching data and passing to client component for interactivity.

<details>
<summary>Issues (6)</summary>

1. **ARCHIVED status badge color** — uses yellow/outline instead of muted gray. Change to `variant="secondary"` with muted text color to match DRAFT treatment, or explain why yellow is intentional.

2. **Category filter built from paginated results** — `categories` array in BlogsPageClient derives from the `blogs` prop (current page results), not the full dataset. If you filter to DRAFT status and the current page has only Web Development posts, the category dropdown won't show AI & Automation even if draft posts exist in that category. Move category list calculation to the server action or fetch all categories separately.

3. **No confirmation on publish/unpublish** — these status transitions apply immediately. Most CMS tools confirm publish actions because they affect public visibility. Add confirmation dialogs for publish/unpublish or document that immediate action is intentional.

4. **Type assertion in page.tsx** — `status: status as any` bypasses type checking. Change to `status: (status || undefined) as BlogStatus | undefined` or add type guard.

5. **Empty action in EmptyState** — component accepts optional `action` prop but EmptyState usage in BlogTable doesn't provide one. Consider adding a "Create Blog" action or remove the optional action prop if it's unused.

6. **Skeleton count mismatch** — BlogTable loading state renders 5 skeleton rows but pagination shows 10 results per page. Change to `Array.from({ length: 10 })` or make configurable.

</details>

<details>
<summary>Details</summary>

## Mock blog data and category filter gap

The `blog.ts` actions module defines 8 mock blog posts covering AI & Automation (2), SEO (1), Web Development (2), Social Media (1), Digital Marketing (1), and Branding (1). Statuses: 5 published, 1 scheduled, 2 drafts.

**Category list gap (confirmed)**: BlogsPageClient builds the category dropdown from `blogs` prop, which is the current page's results after filtering. If you select DRAFT status and the current page has only Web Development posts, the dropdown won't show AI & Automation even if draft posts in that category exist on other pages. The dropdown should represent all available categories given the current status filter, not just the categories on the current page.

Fix: calculate unique categories in the server action and pass as a separate prop. Example in `page.tsx`:

```typescript
const allBlogs = await getBlogs({ status, category }); // no pagination
const allCategories = Array.from(new Set(allBlogs.blogs.map(b => b.category)));
```

Then pass `allCategories` to BlogsPageClient and use that for the dropdown.

## Server action type safety

The `getBlogs` function accepts `filters?: BlogFilters` where `BlogFilters` defines `status?: BlogStatus | 'ALL'`. The server page.tsx passes `status: status as any` because `status` comes from URL params as a string and may not match the union type. This bypasses type safety.

Replace `status as any` with a type guard or explicit cast:

```typescript
const statusValue = status && ['PUBLISHED', 'DRAFT', 'SCHEDULED', 'ARCHIVED'].includes(status)
  ? (status as BlogStatus)
  : undefined;

const result = await getBlogs({
  search,
  status: statusValue,
  category,
  page,
  pageSize: 10,
});
```

## Status badge color divergence

ARCHIVED uses yellow outline. The spec called for muted gray similar to DRAFT, signaling "not active" rather than "warning". Yellow typically signals caution or pending action. If yellow is intentional (e.g., ARCHIVED means "review before permanent deletion"), document it. Otherwise, change ARCHIVED to:

```typescript
case 'ARCHIVED':
  return <Badge variant="secondary" className="opacity-70">{status}</Badge>;
```

## Publish/unpublish without confirmation

Publish and unpublish handlers apply immediately with no confirmation step. ConfirmDialog is only used for delete.

Publishing a blog post affects public visibility. Most CMS tools confirm this action to prevent accidental status changes. Add confirmation dialogs for publish and unpublish, or document that immediate action is intentional.

## BlogTable columns and mobile handling

All required columns present: Thumbnail, Title & Excerpt, Author, Category, Status, Views, Reading Time, Date, Actions. Date shows publishedAt for published posts, updatedAt otherwise.

The table wrapper has `overflow-x-auto` for horizontal scroll on narrow screens. On mobile, the dropdown positions via `align="end"`, but if the Actions column is cut off by overflow scroll, the dropdown trigger may not be reachable. Test on a narrow viewport to confirm the Actions column stays accessible.

## Loading states and empty state

BlogTable renders 5 skeleton rows when loading, but pagination uses 10 results per page. Change `Array.from({ length: 5 })` to `Array.from({ length: 10 })` or make it configurable.

EmptyState component accepts an optional `action` prop. BlogTable calls EmptyState without providing one. Consider adding a "Create Blog" action or remove the optional action prop if unused elsewhere.









</details>

<details>
<summary>File map</summary>

- `src/actions/blog.ts` — 8 mock blog posts, in-memory store, all CRUD server actions with 300ms delay
- `src/app/admin/blogs/page.tsx` — async server component fetching blogs via getBlogs and passing to client
- `src/app/admin/blogs/BlogsPageClient.tsx` — client component with search, status/category filters, pagination, all action handlers
- `src/components/admin/BlogTable.tsx` — table with 9 columns, dropdown actions, loading skeleton, empty state
- `src/components/admin/StatusBadge.tsx` — status-specific badge colors, uses Badge component
- `src/components/admin/ConfirmDialog.tsx` — AlertDialog wrapper with loading state and destructive variant
- `src/components/admin/EmptyState.tsx` — icon, title, description, optional action button

</details>

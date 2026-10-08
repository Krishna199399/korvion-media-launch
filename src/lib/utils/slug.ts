import slugifyLib from 'slugify';

/**
 * Generate a URL-safe slug from a string.
 * Uses slugify library with sensible defaults for blog posts.
 */
export function generateSlug(input: string): string {
  return slugifyLib(input, {
    lower: true,
    strict: true,
    trim: true,
    locale: 'en',
  });
}

/**
 * Generate a unique slug by appending a suffix.
 * Use when the base slug already exists in the database.
 */
export function generateUniqueSlug(baseSlug: string, suffix: number | string): string {
  return `${baseSlug}-${suffix}`;
}

/**
 * Validate that a slug follows URL-safe conventions.
 * Returns true if valid.
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/**
 * Sanitize a user-provided slug — strip invalid characters and enforce lowercase.
 */
export function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

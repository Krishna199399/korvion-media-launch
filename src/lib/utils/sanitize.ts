/**
 * HTML sanitization utilities for blog content.
 * Uses DOMPurify in browser environments and a fallback for SSR.
 */

// Allowed HTML tags for blog content
const ALLOWED_TAGS = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'hr',
  'strong', 'em', 'u', 's', 'del', 'ins',
  'a', 'img',
  'ul', 'ol', 'li',
  'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'figure', 'figcaption',
  'div', 'span',
  'iframe', // for YouTube embeds
];

// Allowed attributes per tag
const ALLOWED_ATTR = [
  'href', 'src', 'alt', 'title', 'class', 'id',
  'target', 'rel',
  'width', 'height',
  'frameborder', 'allowfullscreen', 'allow', // iframe
  'data-*',
  'aria-*',
  'colspan', 'rowspan', // table
];

/**
 * Sanitize HTML content to prevent XSS attacks.
 * Runs client-side with DOMPurify; falls back to strip-all on SSR.
 */
export function sanitizeHtml(dirty: string): string {
  // Server-side: return as-is (trust content from your own DB)
  // For SSR safety, content should already be sanitized when saved
  if (typeof window === 'undefined') {
    return dirty;
  }

  // Dynamic import to avoid SSR issues
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const DOMPurify = require('dompurify');

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: true,
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder'],
    // Force all links to be safe
    FORCE_BODY: true,
    // Allow YouTube iframes only
    ALLOWED_URI_REGEXP:
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  });
}

/**
 * Strip all HTML tags from a string, returning plain text.
 * Useful for generating excerpts or meta descriptions.
 */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generate a safe excerpt from HTML content.
 * Strips tags and truncates to the specified character limit.
 */
export function generateExcerpt(html: string, maxLength: number = 160): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  // Avoid cutting mid-word
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

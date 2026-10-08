import readingTime from 'reading-time';

/**
 * Calculate estimated reading time for a piece of content.
 * Strips HTML tags before calculating to get accurate word count.
 *
 * @param content - Raw text or HTML content
 * @returns Reading time in minutes (minimum 1)
 */
export function calculateReadingTime(content: string): number {
  // Strip HTML tags for accurate word count
  const plainText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const stats = readingTime(plainText);
  return Math.max(1, Math.ceil(stats.minutes));
}

/**
 * Format reading time as a human-readable string.
 * e.g., "5 min read"
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return '< 1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
}

/**
 * Get reading time stats including word count and estimated time range.
 */
export interface ReadingTimeStats {
  minutes: number;
  words: number;
  text: string;
}

export function getReadingTimeStats(content: string): ReadingTimeStats {
  const plainText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const stats = readingTime(plainText);
  return {
    minutes: Math.max(1, Math.ceil(stats.minutes)),
    words: stats.words,
    text: formatReadingTime(Math.max(1, Math.ceil(stats.minutes))),
  };
}

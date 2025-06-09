import dayjs from 'dayjs';

/**
 * Format a date using dayjs.
 *
 * @param date - A Date object or date string to format.
 * @param format - Optional dayjs format string. Defaults to 'YYYY-MM-DD'.
 * @returns The formatted date string.
 */
export function formatDate(date: Date | string, format = 'YYYY-MM-DD'): string {
  const d = dayjs(date);
  return d.isValid() ? d.format(format) : '';
}

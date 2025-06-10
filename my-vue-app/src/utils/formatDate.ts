import dayjs from 'dayjs';
import jalali from 'dayjs-jalali';

dayjs.extend(jalali);

export type CalendarType = 'gregorian' | 'jalali';

export function formatDate(
  date: Date | string,
  calendar: CalendarType = 'gregorian',
  format = 'YYYY-MM-DD'
): string {
  const parsed = typeof date === 'string'
    ? dayjs(date, calendar === 'jalali' ? ({ jalali: true } as any) : undefined)
    : dayjs(date);

  if (!parsed.isValid()) {
    return 'Invalid date';
  }

  if (calendar === 'jalali') {
    return parsed.locale('fa').format(format);
  }

  return parsed.format(format);
}

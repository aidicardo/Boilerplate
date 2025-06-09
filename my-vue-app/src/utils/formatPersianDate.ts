import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import 'dayjs/locale/fa';

dayjs.extend(jalaliday);

export function formatPersianDate(date: dayjs.ConfigType, format = 'YYYY/MM/DD'): string {
  return dayjs(date).calendar('jalali').locale('fa').format(format);
}

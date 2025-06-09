/**
 * Capitalize the first letter of a string.
 *
 * @param value - The string to capitalize.
 * @param locale - Optional locale for case conversion.
 */
export function capitalize(value: string, locale = 'en'): string {
  if (!value) return '';
  const [first, ...rest] = value;
  return first.toLocaleUpperCase(locale) + rest.join('').toLocaleLowerCase(locale);
}

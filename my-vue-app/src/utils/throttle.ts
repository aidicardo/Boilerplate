/**
 * Limit how often a function can be invoked.
 *
 * @param func - Function to throttle.
 * @param wait - Delay in milliseconds.
 */
export function throttle<T extends (...args: any[]) => unknown>(
  func: T,
  wait = 200
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastCall = now;
      func(...args);
    } else if (!timer) {
      timer = setTimeout(() => {
        lastCall = Date.now();
        timer = null;
        func(...args);
      }, remaining);
    }
  };
}

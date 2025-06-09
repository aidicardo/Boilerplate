export interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

export interface DebouncedFunction<T extends (...args: any[]) => unknown> {
  (...args: Parameters<T>): void;
  cancel: () => void;
}

/**
 * Create a debounced version of a function.
 *
 * @param func - Function to debounce.
 * @param wait - Delay in milliseconds.
 * @param options - Control leading and trailing behaviour.
 */
export function debounce<T extends (...args: any[]) => unknown>(
  func: T,
  wait = 300,
  options: DebounceOptions = {}
): DebouncedFunction<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const { leading = false, trailing = true } = options;
  let lastArgs: Parameters<T> | null = null;

  const debounced = (...args: Parameters<T>) => {
    lastArgs = args;

    if (timer) {
      clearTimeout(timer);
    } else if (leading) {
      func(...args);
    }

    timer = setTimeout(() => {
      if (trailing && lastArgs) {
        func(...lastArgs);
      }
      timer = null;
      lastArgs = null;
    }, wait);
  };

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    lastArgs = null;
  };

  return debounced;
}

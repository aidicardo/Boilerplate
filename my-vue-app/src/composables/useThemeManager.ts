import { computed } from 'vue'
import type { Ref } from 'vue'
import type { Theme } from '@/types/app';

function updateHtmlTheme(theme: Theme): void {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(theme);
}

export function useThemeManager(theme: Ref<Theme>) {
  const currentTheme = computed(() => theme.value);

  function setTheme(newTheme: Theme): void {
    theme.value = newTheme;
    updateHtmlTheme(newTheme);
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'light' ? 'dark' : 'light');
  }

  return {
    currentTheme,
    setTheme,
    toggleTheme,
  };
}

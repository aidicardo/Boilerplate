import { Ref, computed } from 'vue';
import type { Language } from '@/types/app';

export function useLanguageManager(language: Ref<Language>) {
  const currentLanguage = computed(() => language.value);

  function setLanguage(lang: Language): void {
    language.value = lang;
  }

  return {
    currentLanguage,
    setLanguage,
  };
}

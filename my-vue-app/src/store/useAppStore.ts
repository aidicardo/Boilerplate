import { defineStore } from 'pinia';
import { ref, reactive, toRef } from 'vue';
import type { AppUser, AppSettings } from '@/types/app';
import { useThemeManager } from '@/composables/useThemeManager';
import { useLanguageManager } from '@/composables/useLanguageManager';
import { useLoadingManager } from '@/composables/useLoadingManager';
import { useUserManager } from '@/composables/useUserManager';

export const useAppStore = defineStore(
  'app',
  () => {
    const user = ref<AppUser | null>(null);
    const isLoading = ref(false);
    const settings = reactive<AppSettings>({
      theme: 'light',
      language: 'en',
    });

    const { isLoggedIn, userName, setUser, clearUser } = useUserManager(user);
    const { currentTheme, setTheme, toggleTheme } = useThemeManager(toRef(settings, 'theme'));
    const { setLanguage } = useLanguageManager(toRef(settings, 'language'));
    const { setLoading } = useLoadingManager(isLoading);

    return {
      user,
      isLoading,
      settings,
      isLoggedIn,
      userName,
      currentTheme,
      setUser,
      clearUser,
      toggleTheme,
      setTheme,
      setLanguage,
      setLoading,
    };
  },
  {
    persist: {
      paths: ['user', 'settings'],
    },
  } as any,
);

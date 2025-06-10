import { computed } from 'vue'
import type { Ref } from 'vue'
import type { AppUser } from '@/types/app';

export function useUserManager(user: Ref<AppUser | null>) {
  const isLoggedIn = computed(() => !!user.value);
  const userName = computed(() => user.value?.name ?? '');

  function setUser(newUser: AppUser): void {
    user.value = newUser;
  }

  function clearUser(): void {
    user.value = null;
  }

  return {
    isLoggedIn,
    userName,
    setUser,
    clearUser,
  };
}

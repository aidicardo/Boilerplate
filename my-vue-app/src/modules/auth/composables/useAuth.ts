import { computed } from 'vue';
import { useAuthStore } from '../store/useAuthStore';

export function useAuth() {
  const store = useAuthStore();

  const isAuthenticated = computed(() => !!store.token);

  return {
    user: store.user,
    token: store.token,
    loading: store.loading,
    error: store.error,
    isAuthenticated,
    login: store.login,
    register: store.register,
    logout: store.logout
  };
}

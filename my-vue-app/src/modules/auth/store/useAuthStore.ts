import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import * as authService from '../services/authService';
import type { User } from '../types';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const isAuthenticated = computed(() => !!token.value);

  async function login(username: string, password: string) {
    loading.value = true;
    error.value = null;
    try {
      const response = await authService.login(username, password);
      user.value = response.user;
      token.value = response.token;
      if (!token.value && (authService.supabase.auth.getSession)) {
        const { data } = await authService.supabase.auth.getSession();
        token.value = data.session?.access_token || null;
      }
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function register(payload: { username: string; email: string; password: string; }) {
    loading.value = true;
    error.value = null;
    try {
      const response = await authService.register(payload);
      user.value = response.user;
      token.value = response.token;
      if (!token.value && (authService.supabase.auth.getSession)) {
        const { data } = await authService.supabase.auth.getSession();
        token.value = data.session?.access_token || null;
      }
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function logout() {
    loading.value = true;
    error.value = null;
    try {
      await authService.logout();
      user.value = null;
      token.value = null;
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  return { user, token, loading, error, isAuthenticated, login, register, logout };
});

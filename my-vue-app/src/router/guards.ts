import { useAuthStore } from '@/modules/auth/store/useAuthStore';

/**
 * Guard that ensures the user is authenticated.
 */
export function authGuard(): boolean {
  const auth = useAuthStore();
  return auth.isAuthenticated;
}

/**
 * Guard that checks the user is not authenticated (guest).
 */
export function guestGuard(): boolean {
  const auth = useAuthStore();
  return !auth.isAuthenticated;
}

/**
 * Guard that verifies the user has admin role.
 */
export function adminGuard(): boolean {
  const auth = useAuthStore();
  return auth.user?.role === 'admin';
}

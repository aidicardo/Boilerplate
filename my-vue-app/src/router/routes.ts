import type { RouteRecordRaw } from 'vue-router';

/**
 * Publicly accessible routes.
 */
const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FAQ.vue'),
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue'),
    meta: {
      layout: 'public',
    },
  },
];

/**
 * Routes used for authentication (only accessible to guests).
 */
const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/auth/pages/LoginPage.vue'),
    meta: {
      guestOnly: true,
      layout: 'auth',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/modules/auth/pages/RegisterPage.vue'),
    meta: {
      guestOnly: true,
      layout: 'auth',
    },
  },
];

/**
 * Routes requiring authentication.
 */
const protectedRoutes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    meta: {
      requiresAuth: true,
      roles: ['user', 'admin'],
      layout: 'default',
    },
  },
];

/**
 * Fallback route for 404 pages.
 */
const fallbackRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('@/views/NotFound.vue'),
  meta: {
    layout: 'public',
  },
};

export const routes: RouteRecordRaw[] = [
  ...publicRoutes,
  ...authRoutes,
  ...protectedRoutes,
  fallbackRoute,
];

export default routes;

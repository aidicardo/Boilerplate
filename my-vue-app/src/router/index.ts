import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { authGuard, guestGuard, adminGuard } from './guards';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { requiresAuth, guestOnly, roles } = to.meta as {
    requiresAuth?: boolean;
    guestOnly?: boolean;
    roles?: string[];
  };

  if (guestOnly && !guestGuard()) {
    next({ name: 'home' });
    return;
  }

  if (requiresAuth && !authGuard()) {
    next({ name: 'login', query: { redirect: to.fullPath } });
    return;
  }

  if (roles && roles.includes('admin') && !adminGuard()) {
    next({ name: 'not-found' });
    return;
  }

  next();
});

export default router;

import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dashboard', component: () => import('pages/heroes/Dashboard.vue') },
      { path: 'heroes', component: () => import('pages/heroes/List.vue') },
      { path: 'heroes/:id', component: () => import('pages/heroes/Details.vue') },
    ],
  },

  { path: '/email', component: () => import('pages/auth/Email.vue') },
  { path: '/logout', component: () => import('pages/auth/Logout.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

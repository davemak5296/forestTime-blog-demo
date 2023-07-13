import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
// import Category from '@/views/Category.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue') },
  { path: '/:cat', name: 'category', component: () => import('@/views/Category.vue') },

  {path: '/todo/:id', name: 'todo.show', component: () => import('@/views/TodoShow.vue')}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'route-active'
})

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  {path: '/todo/:id', name: 'todo.show', component: () => import('@/views/TodoShow.vue')}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;
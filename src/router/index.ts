import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import EndPoint from '@/views/EndPoint.vue';
import About from '@/views/About.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/endpoint/:func', name: 'EndPoint', component: EndPoint},
  { path: '/about', name: 'About', component: About},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import FavoritePage from '@/pages/favorite-page';
import HomePage from '@/pages/home-page';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/favorites', name: 'Favorites', component: FavoritePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

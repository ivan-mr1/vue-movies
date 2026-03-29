import { createRouter, createWebHistory } from 'vue-router';
//  Динамический импорт
const HomePage = () => import('@/pages/home-page');
const SearchPage = () => import('@/pages/search-page');
const FavoritePage = () => import('@/pages/favorite-page');
const WatchedPage = () => import('@/pages/watched-page');
const NotFoundPage = () => import('@/pages/not-found-page');

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/favorite', name: 'Favorite', component: FavoritePage },
  { path: '/watched', name: 'Watched', component: WatchedPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Автоматически добавляет класс 'active' к активной ссылке
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  // Прокрутка страницы вверх при переходе на новый маршрут
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

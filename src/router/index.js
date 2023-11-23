import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/TopView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import PictureView from '../views/PictureView.vue'
import MusicView from '../views/MusicView.vue'
import NovelView from '../views/NovelView.vue'
import NovelContentView from '../views/NovelContentView.vue'
import OtherView from '../views/OtherView.vue'
import ErrorView from '../views/ErrorView.vue'
import gsap from 'gsap'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/picture',
    name: 'picture',
    component: PictureView
  },
  {
    path: '/music',
    name: 'music',
    component: MusicView
  },
  {
    path: '/novel',
    name: 'novel',
    component: NovelView
  },
  {
    path: '/novel/:id',
    name: 'novel:id',
    component: NovelContentView,
    props: true
  },
  {
    path: '/others',
    name: 'others',
    component: OtherView
  },
  {
    path: '/',
    name: 'top',
    component: TopView
  },
  {
    path: '/im3py_/:catchAll(.*)',
    name: 'top',
    component: TopView
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: ErrorView
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const tl = gsap.timeline();
  tl.to(".fade", {
    duration: 0.2,
    opacity: 0,
    onComplete: () => {
      next();
    }
  }).to(".fade", {
    duration: 0.2,
    opacity: 1
  }, 0.2);
});

export default router

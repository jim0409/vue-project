import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../views/app-layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'dashboard' },
  },
  { 
    path: '/',
    name: 'admin',
    component: AppLayout,
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('@/views/home-view.vue'),
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('@/views/about-view.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

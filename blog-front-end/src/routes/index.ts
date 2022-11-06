import {createRouter, createWebHistory, Router,RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[] = [
  { path: '/welcome', component: () => import('@/pages/Welcome/Welcome.vue')},
  { path: '/home', component: () => import('@/pages/Home/Home.vue')},
  { path: '/category', component: () => import('@/pages/Category/Category.vue')},
  { path: '/profile', component: () => import('@/pages/Profile/Profile.vue')}
]

const router:Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
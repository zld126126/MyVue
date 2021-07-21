import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pixi',
    name: 'Pixi',
    component: () => import('../views/Pixi.vue')
  },
  {
    path: '/PixiGame',
    name: 'PixiGame',
    component: () => import('../views/PixiGame.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

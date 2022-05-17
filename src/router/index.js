import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/TasksView.vue'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TasksView
  },
  {
    path: '/task/:id?',
    name: 'task',
    component: () => import(/* webpackChunkName: "task" */ '@/views/TaskView.vue'),
    props: true
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "new" */ '@/views/NewView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router

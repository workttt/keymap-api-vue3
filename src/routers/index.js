import { createRouter, createWebHashHistory } from 'vue-router'
import ApiList from '@/pages/api-management/index.vue'
import ApiDetail from '@/pages/api-management/detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ApiList
  },
  // {
  //   path: '/api/list',
  //   name: 'Home',
  //   component: ApiList
  // },
  {
    path: '/api/detail',
    name: 'ApiDetail',
    component: ApiDetail
  },
  // {
  //   path: '/axios',
  //   name: 'Axios',
  //   component: () => import('@/pages/axios.vue') // 懒加载组件
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

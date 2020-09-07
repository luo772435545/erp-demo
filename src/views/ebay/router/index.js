import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'
import { getToken } from '@/utils/cookie'
import config from '@s/token_time'

Vue.use(Router)
const countTime = config.curTime

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/main'), // 引入主文件
    children: [
      {
        path: '/test',
        component: () => import('@v/ebay/components/test')
      },
      {
        path: '/500',
        component: () => import('@/components/common/500')
      }
    ]
  }
]

const router = new Router({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(function(to, from, next) {
  // const prefix = ''
  // 浏览器回退前进点击时菜单状态改变

  /* const token = getToken()
  if (token) {

  } else {

  }*/
  next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Cookies from 'js-cookie'

import Layout from '@/components/Layout'

Vue.use(Router)

const router =  new Router({
  routes: [
    // 首页
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: '/home',
        // component: resolve => { require(['@/pages/home/index'], resolve) },
        component: () => import('@/pages/home/index'),
        name: 'home',
        meta: { title: 'home', icon: 'home', noCache: true }
      }]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      // component: resolve => { require(['@/pages/login/index'], resolve) },
      component: () => import('@/pages/login/index'),
    },
    {
      path: '/404',
      name: '404',
      // component: resolve => { require(['@/pages/errorPage/404'], resolve) },
      component: () => import('@/pages/errorPage/404'),
      hidden: true
    }
  ]
})

// 路由拦截
router.beforeEach(({ meta, path, name }, from, next) => {
  var { auth = true } = meta
  var isLogin = store.state['user']['isLogin'] //true用户已登录， false用户未登录
  if (isLogin && path === '/login') {
    return next({ path: '/' })
  }
  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

export default router

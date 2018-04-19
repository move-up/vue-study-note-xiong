import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

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
        component: resolve => { require(['@/pages/home/index'], resolve) },
        name: 'home',
        meta: { title: 'home', icon: 'home', noCache: true }
      }]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/pages/login/index'], resolve) },
    },
    { path: '/404', component: resolve => { require(['@/pages/errorPage/404'], resolve) }, hidden: true },
  ]
})

// 路由拦截
router.beforeEach(({ meta, path, name }, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state['user']['name']) //true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

export default router

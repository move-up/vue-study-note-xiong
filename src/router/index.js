import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Cookies from 'js-cookie'

import Layout from '@/components/Layout'

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/

/* no role limit */
export const constantRouterMap = [
  // 登录
  {
    path: '/login',
    name: 'login',
    // component: resolve => { require(['@/pages/login/index'], resolve) },
    component: () => import('@/pages/login/index'),
    hidden: true
  },
  // 404
  {
    path: '/404',
    component: () => import('@/pages/errorPage/404'),
    hidden: true
  },
  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      component: () => import('@/pages/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/charts/line-charts',
    name: 'example',
    meta: {
      icon: 'example',
      title: 'example'
    },
    children: [
      {
        path: '/example/charts',
        redirect: '/example/charts/line-charts',
        name: 'charts',
        meta: {
          title: 'charts',
          icon: 'charts'
        },
        children: [
          {
            path: '/example/charts/line',
            component: () => import('@/pages/charts/line/index'),
            name: 'line',
            meta: {
              title: 'line',
              icon: 'line'
            }
          },
          {
            path: '/example/charts/keyboard',
            component: () => import('@/pages/charts/keyboard/index'),
            name: 'keyboard',
            meta: {
              title: 'keyboard',
              icon: 'keyboard'
            }
          }
        ]
      },
      {
        path: '/example/charts/mixChart',
        component: () => import('@/pages/charts/mixChart/index'),
        name: 'mixChart',
        meta: {
          title: 'mixChart',
          icon: 'mixChart'
        }
      }
    ]
  }
]

export const asyncRouterMap = [
  // 此路由务必在最后声明
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
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

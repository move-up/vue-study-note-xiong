import Vue from 'vue'
import Cookies from 'js-cookie'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: {
      userName: Cookies.get('user')
              ? JSON.parse(Cookies.get('user'))
              : '--',
      isLogin: Cookies.get('user')
    },
    mutations: {
      [USER_SIGNIN](state, user) {
        state.userName = user
        state.isLogin = true
        const expires = new Date(new Date().getTime() + 30 * 60 * 1000); // 过期时间30分钟
        Cookies.set('user', JSON.stringify(user), { expires })
      },
      [USER_SIGNOUT](state) {
        Cookies.remove('user')
        state.isLogin = false
        Object.keys(state).forEach(k => Vue.delete(state, k))
      }
    },
    actions: {
      [USER_SIGNIN]({commit}, user) {
        commit(USER_SIGNIN, user)
      },
      [USER_SIGNOUT]({commit}) {
        commit(USER_SIGNOUT)
      }
    }
}

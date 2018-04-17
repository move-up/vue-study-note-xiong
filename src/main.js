// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import FUI from '@falcon/FUI'
// import '@falcon/FUI/dist/fui.min.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import ECharts from 'vue-echarts/components/ECharts'

Vue.use(Element)

Vue.component('chart', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

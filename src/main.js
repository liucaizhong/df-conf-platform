// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { LoadingBar } from 'iview'
import 'iview/dist/styles/iview.css'
import util from './util'
import iviewConfig from './iview.config'

Vue.config.productionTip = false
iviewConfig.initComponents(Vue)

// 设置路由拦截
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Vue.prototype.$getCookie('sessionid')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach(route => {
  LoadingBar.finish()
})

// 设置axios interceptor
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401,跳转到登录页面
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    return Promise.reject(error.response.data)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

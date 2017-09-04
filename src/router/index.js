import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/client/Login'
import machine from '../pages/client/assign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/machine',
      component: machine
    }
  ]
})

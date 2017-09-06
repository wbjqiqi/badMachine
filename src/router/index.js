import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import machine from '../pages/machine/machine'

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

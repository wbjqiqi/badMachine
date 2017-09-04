import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  actions,
  modules: {
    Login
  }
})

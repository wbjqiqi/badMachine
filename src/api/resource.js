/**
 * Created by Administrator on 2017/8/28 0028.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import * as config from './config'

Vue.use(VueResource)

// 登陆
// export const judgeUser = (options) => Vue.http.post(config.MY_NODE_SERVICE, options)
export const judgeUser = (options) => Vue.http.post(config.MY_PHP_SERVICE + '/user', options)

// 坏机器操作
export const getAllBadMachine = (options) => Vue.http.post(config.MY_PHP_SERVICE + '/allBadMachine', options)
export const newBadMachine = (options) => Vue.http.put(config.MY_PHP_SERVICE + '/allBadMachine', options)
export const updateBadMachine = (options) => Vue.http.post(config.MY_PHP_SERVICE + '/allBadMachine/' + options.id, options)
export const deleteBadMachine = (options) => Vue.http.delete(config.MY_PHP_SERVICE + '/allBadMachine/' + options.id)

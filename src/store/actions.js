/**
 * Created by Administrator on 2017/8/28 0028.
 */
import * as api from '../api/resource.js'
import * as types from './mutation-types'

let timeOutNum = 300

export const userLogin = ({commit}, options) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api.judgeUser(options).then((res) => {
        commit(types.USER_LOGIN, {res: res})
        if (res.body.msg === 'success') {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    }, timeOutNum)
  })
}

export const getAllMachine = ({commit}, options) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api.getAllBadMachine().then((res) => {
        commit(types.GET_MACHINE, {res: res})
        if (res.body.msg === 'success') {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}

export const newBadMachine = ({commit}, options) => {
  options.createUser = localStorage.username
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api.newBadMachine(options).then((res) => {
        commit(types.GET_MACHINE, {res: res})
        if (res.body.msg === 'success') {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}

export const updateBadMachine = ({commit}, options) => {
  options.createUser = localStorage.username
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api.updateBadMachine(options).then((res) => {
        // commit(types.UPDATE_MACHINE, {res: res})
        if (res.body.msg === 'success') {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}

export const deleteBadMachine = ({commit}, options) => {
  options.createUser = localStorage.username
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      api.deleteBadMachine(options).then((res) => {
        // commit(types.DELETE_MACHINE, {res: res})
        if (res.body.msg === 'success') {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })
}

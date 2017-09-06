/**
 * Created by Administrator on 2017/8/28 0028.
 */
import * as types from '../mutation-types'

const state = {
  // user: {
  //   name: '',
  //   unit: '',
  //   phone: ''
  // }
  user: '',
  machines: [],
  machineTypes: []
}

const mutations = {
  clearMachines () {
    state.machines = []
  },
  [types.USER_LOGIN] (state, res) {
    if (res.res.body.msg !== 'success') {
      return false
    }
    localStorage.username = res.res.body.username
  },
  [types.GET_MACHINE] (state, res) {
    console.log(res)
    if (res.res.body.msg !== 'success') {
      return false
    }
    state.machines = res.res.body.machines
    // for (let i in res.res.body.machines) {
    //   let machine = res.res.body.machines[i]
    //   // machine.breakoutTime = new Date(machine.breakoutTime).toLocaleString()
    //   state.machines.push(machine)
    // }
    state.machineTypes = []
    for (let j in res.res.body.machineTypes) {
      let name = res.res.body.machineTypes[j].name
      let machine = {
        text: name,
        value: name
      }
      state.machineTypes.push(machine)
    }
  }
}
export default {
  state,
  mutations
}

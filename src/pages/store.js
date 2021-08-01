import TestService from "../services/TestService"

const state = {
  testData: ''
}

const getters = {
  getData (state) {
    return state.testData
  }
}

const actions = {
  async getDataAction ({ commit }) {
    const res = await TestService.getTest()
    commit('getDataMutation', res.data)
  }
}

const mutations = {
  getDataMutation (state, payload) {
    state.testData = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
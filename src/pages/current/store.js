import CurrentService from '../../services/CurrentService'

const state = {
  current: ''
}

const getters = {
  getCurrent (state) {
    return state.current
  }
}

const actions = {
  async setCurrentAction ({ commit }) {
    const res = await CurrentService.getAllCurrent()
    commit('setCurrentMutation', res.data)
  }
}

const mutations = {
  setCurrentMutation (state, payload) {
    state.current = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import FreelanceService from '../../services/FreelanceService'

const state = {
  freelance: ''
}

const getters = {
  getFreelance (state) {
    return state.freelance
  }
}

const actions = {
  async setFreelanceAction ({ commit }) {
    const res = await FreelanceService.getAllFreelance()
    commit('setFreelanceMutation', res.data)
  }
}

const mutations = {
  setFreelanceMutation (state, payload) {
    state.freelance = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

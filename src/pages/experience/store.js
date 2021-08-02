import ExperienceService from '../../services/ExperienceService'

const state = {
  experience: ''
}

const getters = {
  getExperience (state) {
    return state.experience
  }
}

const actions = {
  async setExperienceAction ({ commit }) {
    const res = await ExperienceService.getAllExperience()
    commit('setExperienceMutation', res.data)
  }
}

const mutations = {
  setExperienceMutation (state, payload) {
    state.experience = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

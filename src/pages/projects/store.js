import ProjectsService from '../../services/ProjectsService'

const state = {
  projects: ''
}

const getters = {
  getProjects (state) {
    return state.projects
  }
}

const actions = {
  async setProjectsAction ({ commit }) {
    const res = await ProjectsService.getAllProjects()
    commit('setProjectsMutation', res.data)
  }
}

const mutations = {
  setProjectsMutation (state, payload) {
    state.projects = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

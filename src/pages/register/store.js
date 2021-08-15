import AuthService from '../../services/AuthService'

const state = {
  status: '',
  error: ''
}

const getters = {}

const actions = {
  async register ({ commit }, userData) {
    commit('registerRequest')
    try {
      const res = await AuthService.registerUser(userData)
      if (res.data.success !== undefined) {
        commit('registerSuccess')
      }
      return res
    } catch (err) {
      console.log(err)
      commit('registerFailure', err)
    }
  }
}

const mutations = {
  registerRequest (state) {
    state.status = 'loading'
  },
  registerSuccess (state) {
    state.status = 'success'
  },
  registerFailure (state, err) {
    state.error = err
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

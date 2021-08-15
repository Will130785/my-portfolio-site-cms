import axios from "axios"
import router from "../../router"
import AuthService  from "../../services/AuthService"

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: ''
}

const getters = {
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  user: state => state.user
}

const actions = {
  async login ({ commit }, userData) {
    commit('authRequest')
    try {
      const res = await AuthService.loginUser(userData)
      if (res.data.success) {
        const token = res.data.token
        const user = res.data.user
        // Store token and user in local storage
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        // Set axios defaults
        axios.defaults.headers.common['Authorization'] = token
        commit('authSuccess', token, user)
      }
      return res
    } catch (err) {
      console.log(err)
      commit('authFailure', err)
    }
  },
  async logout ({ commit }) {
    try {
      await localStorage.clear()
      commit('logout')
      delete axios.defaults.headers.common['Authorization']
      router.push('/login')
      return
    } catch (err) {
      console.log(err)
      commit('logoutFailure', err)
    }
  }
}

const mutations = {
  authRequest (state) {
    state.status = 'loading'
  },
  authSuccess (state, token, user) {
    state.token = token
    state.user = user
    state.status = 'success'
  },
  authFailure (state, err) {
    state.error = err
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = ''
  },
  logoutFailure (state, err) {
    state.error = err
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

const state = {
  testLinks: [
    { name: 'Login', link: 'Login' },
    { name: 'Profile', link: 'Profile' },
    { name: 'Blogs', link: 'Blogs' },
    { name: 'Current Job', link: 'Current' },
    { name: 'Work Experience', link: 'Experience' },
    { name: 'Freelance Work', link: 'Freelance' },
    { name: 'Projects', link: 'Projects' },
    { name: 'Register User', link: 'Register' }
  ],
  sidebarOpen: false
}

const getters = {
  testGetLinks (state) {
    return state.testLinks
  },
  getSidebarStatus (state) {
    return state.sidebarOpen
  }
}

const actions = {
  sidebarStatusAction ({ commit }) {
    commit('sidebarStatusMutation')
  }
}

const mutations = {
  sidebarStatusMutation (state) {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

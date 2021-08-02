import BlogService from '../../services/BlogService'

const state = {
  blogs: ''
}

const getters = {
  getBlogs (state) {
    return state.blogs
  }
}

const actions = {
  async setBlogsAction ({ commit }) {
    const res = await BlogService.getAllBlogs()
    commit('setBlogsMutation', res.data)
  }
}

const mutations = {
  setBlogsMutation (state, payload) {
    state.blogs = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

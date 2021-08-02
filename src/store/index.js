import Vue from 'vue'
import Vuex from 'vuex'
import blogStore from '../pages/blogs/store'
import currentStore from '../pages/current/store'
import experienceStore from '../pages/experience/store'
import freelanceStore from '../pages/freelance/store'
import navigationStore from '../components/navigation/store'
import projectsStore from '../pages/projects/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    blogStore,
    currentStore,
    experienceStore,
    freelanceStore,
    navigationStore,
    projectsStore
  }
})

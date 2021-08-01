import Vue from 'vue'
import Vuex from 'vuex'
import testStore from '../pages/store.js'
import navigationStore from '../components/navigation/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    testStore,
    navigationStore
  }
})

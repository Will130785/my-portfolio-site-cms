const state = {
  modalStatus: {
    modal1: true
  }
}

const getters = {
  getModalStatus: (state) => (id) => {
    console.log(state, id)
    return state.modalStatus['modal' + id]
  }
}

const actions = {}

const mutations = {}

export default {
  state, 
  getters,
  actions,
  mutations
}

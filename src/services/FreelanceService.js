import apiClient from './api'

// Get all freelance
const getAllFreelance = async () => {
  try {
    const res = await apiClient().get('/freelance')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Create new freelance
const createNewFreelance = async (data) => {
  try {
    const res = await apiClient().post('/freelance', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Delete freelance
const deleteFreelance = async (id) => {
  try {
    const res = await apiClient().delete(`/freelance/${id}`)
    if (res && res.data) {
      return res.data
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllFreelance,
  createNewFreelance,
  deleteFreelance
}

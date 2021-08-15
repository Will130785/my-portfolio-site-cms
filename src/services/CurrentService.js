import apiClient from './api'

// Get all current
const getAllCurrent = async () => {
  try {
    const res = await apiClient().get('/current')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Create new current
const createNewCurrent = async (data) => {
  try {
    const res = await apiClient().post('/current', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Update current
const updateCurrent = async (id, data) => {
  try {
    const res = await apiClient().put(`/current/${id}`, data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Delete current
const deleteCurrent = async (id) => {
  try {
    const res = await apiClient().delete(`/current/${id}`)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllCurrent,
  createNewCurrent,
  updateCurrent,
  deleteCurrent
}

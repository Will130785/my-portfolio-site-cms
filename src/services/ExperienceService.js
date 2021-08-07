import apiClient from './api'

// Get all experience
const getAllExperience = async () => {
  try {
    const res = await apiClient().get('/experience')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Create new experience
const createNewExperience = async (data) => {
  try {
    const res = await apiClient().post('/experience', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Delete experience
const deleteExperience = async (id) => {
  try {
    const res = await apiClient().delete(`/experience/${id}`)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllExperience,
  createNewExperience,
  deleteExperience
}

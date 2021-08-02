import apiClient from './api'

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

export default {
  getAllExperience
}

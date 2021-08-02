import apiClient from './api'

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

export default {
  getAllFreelance
}

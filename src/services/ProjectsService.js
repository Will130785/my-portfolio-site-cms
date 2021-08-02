import apiClient from './api'

const getAllProjects = async () => {
  try {
    const res = await apiClient().get('/projects')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllProjects
}

import apiClient from './api'

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

export default {
  getAllCurrent
}

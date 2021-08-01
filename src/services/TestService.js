import apiClient from './api'

const getTest = async () => {
  const res = await apiClient().get()
  if (res && res.data) {
    return res
  }
}

export default {
  getTest
}
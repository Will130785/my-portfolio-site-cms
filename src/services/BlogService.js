import apiClient from './api'

const getAllBlogs = async () => {
  try {
    const res = await apiClient().get('/blogs')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllBlogs
}

import apiClient from './api'

// Get all blogs
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

// Create new blog
const createNewBlog = async (data) => {
  try {
    const res = await apiClient().post('/blogs', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Update blog
const updateBlog = async (id, data) => {
  try {
    console.log(data)
    const res = await apiClient().put(`/blogs/${id}`, data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Delete blog
const deleteBlog = async (id) => {
  try {
    const res = await apiClient().delete(`/blogs/${id}`)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllBlogs,
  createNewBlog,
  updateBlog,
  deleteBlog
}

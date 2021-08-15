import apiClient from './api'

// Get all projects
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

// Create new project
const createNewProject = async (data) => {
  try {
    const res = await apiClient().post('/projects', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Update project
const updateProject = async (id, data) => {
  try {
    const res = await apiClient().put(`/projects/${id}`, data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Delete project
const deleteProject = async (id) => {
  try {
    const res = await apiClient().delete(`/projects/${id}`)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getAllProjects,
  createNewProject,
  updateProject,
  deleteProject
}

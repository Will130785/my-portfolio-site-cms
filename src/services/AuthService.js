import apiClient from './api'

// Register user
const registerUser = async (data) => {
  try {
    const res = await apiClient().post('/register', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

// Login user
const loginUser = async (data) => {
    console.log(data, 'test')
  try {
    const res = await apiClient().post('/login', data)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  registerUser,
  loginUser
}

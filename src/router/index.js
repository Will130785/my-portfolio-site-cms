import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '../pages/Blogs.vue'
import Current from '../pages/Current.vue'
import Experience from '../pages/Experience.vue'
import Freelance from '../pages/Freelance.vue'
import Login from '../pages/Login.vue'
import Profile from '../pages/Profile.vue'
import Projects from '../pages/Projects.vue'
import Register from '../pages/Register.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/current',
    name: 'Current',
    component: Current
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/freelance',
    name: 'Freelance',
    component: Freelance
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new Router({
  routes
})

export default router

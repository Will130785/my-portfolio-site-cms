import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '../pages/blogs/Blogs.vue'
import Current from '../pages/current/Current.vue'
import Experience from '../pages/experience/Experience.vue'
import Freelance from '../pages/freelance/Freelance.vue'
import Login from '../pages/login/Login.vue'
import Profile from '../pages/Profile.vue'
import Projects from '../pages/projects/Projects.vue'
import Register from '../pages/register/Register.vue'
import store from '../store/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/current',
    name: 'Current',
    component: Current,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/freelance',
    name: 'Freelance',
    component: Freelance,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new Router({
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('Test')
//   next()
// })
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Go to login
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/profile')
    } else {
      next()
    }
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new Router({
  routes
})

export default router

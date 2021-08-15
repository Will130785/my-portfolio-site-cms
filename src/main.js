import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'

// Load token from local storage
Vue.prototype.$http = axios
const token = localStorage.getItem('token')

// If there is a token we will append default authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

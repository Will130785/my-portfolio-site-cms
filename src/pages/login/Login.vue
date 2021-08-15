<template>
  <div class="login">
    <h1>This is the login page</h1>
    <form>
      <div class="form-group">
        <label for="username">Enter Username</label>
        <input id="username" type="text" v-model="form.username" />
      </div>
      <div class="form-group">
        <label for="password">Enter Password</label>
        <input id="password" type="password" v-model="form.password" />
      </div>
      <button @click.prevent="handleLogin">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login',
    'setBlogsAction',
      'setCurrentAction',
      'setExperienceAction',
      'setFreelanceAction',
      'setProjectsAction']),
    async handleLogin () {
    const user = this.form
    try {
      const res = await this.login(user)
      if (res.data.success) {
        // Populate vuex with data on app load so it is available throughout the application
    this.setBlogsAction()
    this.setCurrentAction()
    this.setExperienceAction()
    this.setFreelanceAction()
    this.setProjectsAction()

    console.log(process.env)
        this.$router.push('/profile')
      }
    } catch (err) {
      console.log(err)
    }
  }
  }
}
</script>

<style scoped lang="scss">
.login {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
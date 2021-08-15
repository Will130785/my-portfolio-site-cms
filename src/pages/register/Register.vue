<template>
  <div class="register">
    <h1>This is the register page</h1>
    <form>
      <div class="form-group">
        <label for="username">Enter Username</label>
        <input id="username" type="text" v-model="form.username" />
      </div>
      <div class="form-group">
        <label for="password">Enter Password</label>
        <input id="password" type="password" v-model="form.password" />
      </div>
      <div class="form-group">
        <label for="password-confirm">Confirm Password</label>
        <input id="password-confirm" type="password" v-model="form.passwordConfirm" />
      </div>
      <button @click.prevent="handleRegister">Register User</button>
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
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    async handleRegister () {
      const user = this.form
      const res = await this.register(user)
      try {
        if (res.status === 201) {
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
.register {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
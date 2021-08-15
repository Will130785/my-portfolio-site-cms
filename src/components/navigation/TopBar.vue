<template>
  <nav class="topbar">
    <button @click="sidebarStatusAction">Toggle Sidebar</button>
    <span @click.prevent="handleLogout">Logout</span>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['sidebarStatusAction', 'logout']),
    handleLogout () {
    console.log('logging out')
    this.logout()
  }
  },
}
</script>

<style scoped lang="scss">
.topbar {
  height: 5rem;
  background-color: #fff;
  border: 1px solid #000;

  button {
    display: block;

    @media only screen and (min-width: 750px) {
      display: none;
    }
  }
}
</style>
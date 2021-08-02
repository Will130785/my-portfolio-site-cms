<template>
  <div id="app">
    <!-- Upper section of page -->
    <div class="page-layout-top">
      <TopBar />
    </div>
    <!-- Lower section of page -->
    <div class="page-layout-bottom">
      <SideBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TopBar from './components/navigation/TopBar.vue'
import SideBar from './components/navigation/SideBar.vue'
export default {
  components: {
    TopBar,
    SideBar
  },
  mounted () {
    // Populate vuex with data on app load so it is available throughout the application
    this.setBlogsAction()
    this.setCurrentAction()
    this.setExperienceAction()
    this.setFreelanceAction()
    this.setProjectsAction()

    console.log(process.env)
  },
  methods: {
    ...mapActions([
      'setBlogsAction',
      'setCurrentAction',
      'setExperienceAction',
      'setFreelanceAction',
      'setProjectsAction'
    ])
  }
}
</script>

<style lang="scss">
// Global reset
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  font-family: sans-serif;
  height: 100%;
}

#app {
  height: 100%;
}

.page-layout-bottom {
  position: relative;
  display: flex;
  height: 100%;
}
</style>

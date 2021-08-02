<template>
  <div class="projects">
    <h1>{{ getProjects.title }}</h1>
    <p>{{ getProjects.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProjects'])
  }
}
</script>

<style scoped lang="scss">
.projects {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
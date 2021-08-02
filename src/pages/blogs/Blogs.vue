<template>
  <div class="blogs">
    <h1>{{ getBlogs.title }}</h1>
    <p>{{ getBlogs.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getBlogs'])
  }
}
</script>

<style scoped lang="scss">
.blogs {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
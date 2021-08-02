<template>
  <div class="experience">
    <h1>{{ getExperience.title }}</h1>
    <p>{{ getExperience.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getExperience'])
  }
}
</script>

<style scoped lang="scss">
.experience {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <div class="freelance">
    <h1>{{ getFreelance.title }}</h1>
    <p>{{ getFreelance.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFreelance'])
  }
}
</script>

<style scoped lang="scss">
.freelance {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
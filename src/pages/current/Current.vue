<template>
  <div class="current">
    <h1>{{ getCurrent.title }}</h1>
    <p>{{ getCurrent.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCurrent'])
  }
}
</script>

<style scoped lang="scss">
.current {
  border: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
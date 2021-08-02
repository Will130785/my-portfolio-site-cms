<template>
  <div class="current">
    <div class="current__display">
      <div v-for="(item, index) in testData" :key="index" class="job">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="current__options">
      Buttons will go here
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCurrent'])
  },
  data () {
    return {
      testData: [
        {
          title: 'Current 1'
        },
        {
          title: 'Current 2'
        },
        {
          title: 'Current 3'
        },
        {
          title: 'Current 4'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.current {
  border: 1px solid #000;
  height: 100%;
  width: 100%;

  &__display {
    width: 100%;
    border: 1px solid #000;
    min-height: 40rem;
    padding: 1rem;
  }

  &__options {
    width: 100%;
    border: 1px solid #000;
  }
}

.job {
  width: 100%;
  border: 1px solid #000;
  height: 5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.8rem;
  }
}
</style>
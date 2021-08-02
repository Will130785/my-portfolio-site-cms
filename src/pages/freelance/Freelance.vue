<template>
  <div class="freelance">
    <div class="freelance__display">
      <div v-for="(item, index) in testData" :key="index" class="freelance-job">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="freelance__options">
      Buttons will go here
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFreelance'])
  },
  data () {
    return {
      testData: [
        {
          title: 'Freelance 1'
        },
        {
          title: 'Freelance 2'
        },
        {
          title: 'Freelance 3'
        },
        {
          title: 'Freelance 4'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.freelance {
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

.freelance-job {
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
<template>
  <div class="experience">
    <div class="experience__display">
      <div v-for="(item, index) in testData" :key="index" class="work">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="experience__options">
      Buttons will go here
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getExperience'])
  },
  data () {
    return {
      testData: [
        {
          title: 'Experience 1'
        },
        {
          title: 'Experience 2'
        },
        {
          title: 'Experience 3'
        },
        {
          title: 'Experience 4'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.experience {
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

.work {
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
<template>
  <div class="projects">
    <div class="projects__display">
      <div v-for="(item, index) in testData" :key="index" class="project">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="projects__options">
      Buttons will go here
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProjects'])
  },
  data () {
    return {
      testData: [
        {
          title: 'Project 1'
        },
        {
          title: 'Project 2'
        },
        {
          title: 'Project 3'
        },
        {
          title: 'Project 4'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.projects {
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

.project {
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
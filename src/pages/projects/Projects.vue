<template>
  <div class="projects">
    <div class="projects__display">
      <div v-for="(item, index) in getProjects" :key="index" class="project">
        <p>{{ item.title }}</p>
        <button>Edit</button>
        <button @click.prevent="deleteProject(item._id)">Delete</button>
      </div>
    </div>
    <div class="projects__options">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Add Project
      </button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Test 5
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="projectTitle" />
            <button @click.prevent="addProject">Add</button>
        </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../../components/modals/Modal.vue'
import ProjectService from '../../services/ProjectsService'
export default {
  components: {
    Modal
  },
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
      ],
      isModalVisible: false,
      projectTitle: ''
    }
  },
  methods: {
    ...mapActions(['setProjectsAction']),
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    async addProject () {
      console.log('You want to add a project')
      // Create data object
      const data = {
        title: this.projectTitle
      }
      const res = await ProjectService.createNewProject(data)
      console.log(res)
      this.setProjectsAction()
    },
    async deleteProject (id) {
      const res = await ProjectService.deleteProject(id)
      console.log(res)
      this.setProjectsAction()
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
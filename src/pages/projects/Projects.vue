<template>
  <div class="projects">
    <div class="projects__display">
      <div v-for="(item, index) in getProjects" :key="index" class="project">
        <p>{{ item.projectTitle }}</p>
        <button @click.prevent="handleEditModal('project-modal-' + index, item)">Edit</button>
        <button @click.prevent="deleteProject(item._id)">Delete</button>
        <!-- Edit project modal -->
        <Modal v-show="isEditModalVisible === 'project-modal-' + index" @close="closeEditModal">
        <template v-slot:header>
          {{ item.projectTitle }}, {{ item._id }}
        </template>
        <template v-slot:body>
          <!-- Project Name -->
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="form.projectTitle" />
          </div>
          <!-- Short description -->
          <div class="form-group">
            <label>Short Description</label>
            <input type="text" v-model="form.shortDesc" />
          </div>
          <!-- Full description -->
          <div class="form-group">
            <label>Full Description</label>
            <textarea v-model="form.desc"></textarea>
          </div>
          <!-- Image -->
          <div class="form-group">
            <label>Image Link</label>
            <input type="text" v-model="form.image" />
          </div>
          <!-- Features -->
          <div class="form-group">
            <label>Features</label>
            <input type="text" v-model="feature"/>
            <button @click.prevent="addFeature">Add Feature</button>
          </div>
          <!-- Github link -->
          <div class="form-group">
            <label>Github Link</label>
            <input type="text" v-model="form.github" />
          </div>
          <!-- Project link -->
          <div class="form-group">
            <label>Project Link</label>
            <input type="text" v-model="form.project" />
          </div>
          <button @click.prevent="editProject(item._id)">Update</button>
        </template>
      </Modal>
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
          <h2>Add new project:</h2>
        </template>
        <template v-slot:body>
          <!-- Project Name -->
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="form.projectTitle" />
          </div>
          <!-- Short description -->
          <div class="form-group">
            <label>Short Description</label>
            <input type="text" v-model="form.shortDesc" />
          </div>
          <!-- Full description -->
          <div class="form-group">
            <label>Full Description</label>
            <textarea v-model="form.desc"></textarea>
          </div>
          <!-- Image -->
          <div class="form-group">
            <label>Image Link</label>
            <input type="text" v-model="form.image" />
          </div>
          <!-- Features -->
          <div class="form-group">
            <label>Features</label>
            <input type="text" v-model="feature"/>
            <button @click.prevent="addFeature">Add Feature</button>
          </div>
          <!-- Github link -->
          <div class="form-group">
            <label>Github Link</label>
            <input type="text" v-model="form.github" />
          </div>
          <!-- Project link -->
          <div class="form-group">
            <label>Project Link</label>
            <input type="text" v-model="form.project" />
          </div>
          <button @click.prevent="addProject">Add</button>
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
      isEditModalVisible: '',
      form: {
        projectTitle: '',
        shortDesc: '',
        desc: '',
        image: '',
        features: [],
        github: '',
        project: ''
      },
      feature: ''
    }
  },
  methods: {
    ...mapActions(['setProjectsAction']),
    showModal () {
      // Clear all fields
      this.form.projectTitle = ''
      this.form.shortDesc = ''
      this.form.desc = ''
      this.form.image = ''
      this.form.features = []
      this.feature = ''
      this.form.github = ''
      this.form.project = ''
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    async addProject () {
      console.log('You want to add a project')
      // Create data object
      const data = this.form
      const res = await ProjectService.createNewProject(data)
      console.log(res)
      this.setProjectsAction()
    },
    async deleteProject (id) {
      const res = await ProjectService.deleteProject(id)
      console.log(res)
      this.setProjectsAction()
    },
    handleEditModal (modal, item) {
      console.log(modal)
      this.isEditModalVisible = modal
      this.form = item
    },
    closeEditModal () {
      this.isEditModalVisible = ''
    },
    async editProject (id) {
      console.log('You want to update' + id)
      const data = this.form
      const res = await ProjectService.updateProject(id, data)
      console.log(res.data)
      this.setProjectsAction()
      this.isEditModalVisible = ''
    },
    addFeature () {
      this.form.features.push(this.feature)
      this.feature = ''
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
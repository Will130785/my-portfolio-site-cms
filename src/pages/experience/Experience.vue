<template>
  <div class="experience">
    <div class="experience__display">
      <div v-for="(item, index) in getExperience" :key="index" class="work">
        <p>{{ item.title }}</p>
        <button @click.prevent="handleEditModal('experience-modal-' + index, item)">Edit</button>
        <button @click.prevent="deleteWork(item._id)">Delete</button>
        <!-- Edit experience modal -->
        <Modal v-show="isEditModalVisible === 'experience-modal-' + index" @close="closeEditModal">
        <template v-slot:header>
          {{ item.title }}, {{ item._id }}
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Edit entry</label>
            <input type="text" v-model="workTitle" />
            <button @click.prevent="editExperience(item._id)">Edit</button>
        </div>
        </template>
      </Modal>
      </div>
    </div>
    <div class="experience__options">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Add Work
      </button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Test 3
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="workTitle" />
            <button @click.prevent="addWork">Add</button>
        </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../../components/modals/Modal.vue'
import ExperienceService from '../../services/ExperienceService'
export default {
  components: {
    Modal
  },
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
      ],
      isModalVisible: false,
      workTitle: '',
      isEditModalVisible: ''
    }
  },
  methods: {
    ...mapActions(['setExperienceAction']),
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    async addWork () {
      console.log('You want to add work')
      // Create data object
      const data = {
        title: this.workTitle
      }
      const res = await ExperienceService.createNewExperience(data)
      console.log(res)
      this.setExperienceAction()
    },
    async deleteWork (id) {
      const res = await ExperienceService.deleteExperience(id)
      console.log(res)
      this.setExperienceAction()
    },
    handleEditModal (modal, item) {
      console.log(modal)
      this.isEditModalVisible = modal
      this.workTitle = item.title
    },
    closeEditModal () {
      this.isEditModalVisible = ''
    },
    async editExperience (id) {
      console.log('You want to update' + id)
      const data = {
        title: this.workTitle
      }
      const res = await ExperienceService.updateExperience(id, data)
      console.log(res.data)
      this.setExperienceAction()
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
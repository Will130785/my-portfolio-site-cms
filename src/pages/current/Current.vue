<template>
  <div class="current">
    <div class="current__display">
      <div v-for="(item, index) in getCurrent" :key="index" class="job">
        <p>{{ item.title }}</p>
        <button @click.prevent="handleEditModal('current-modal-' + index, item)">Edit</button>
        <button @click.prevent="deleteCurrent(item._id)">Delete</button>
        <!-- Edit current modal -->
        <Modal v-show="isEditModalVisible === 'current-modal-' + index" @close="closeEditModal">
        <template v-slot:header>
          {{ item.title }}, {{ item._id }}
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Edit entry</label>
            <input type="text" v-model="currentTitle" />
            <button @click.prevent="editCurrent(item._id)">Edit</button>
        </div>
        </template>
      </Modal>
      </div>
    </div>
    <div class="current__options">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Add Current
      </button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Test 2
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="currentTitle" />
            <button @click.prevent="addCurrent">Add</button>
        </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../../components/modals/Modal.vue'
import CurrentService from '../../services/CurrentService'
export default {
  components: {
    Modal
  },
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
      ],
      isModalVisible: false,
      currentTitle: '',
      isEditModalVisible: ''
    }
  },
  methods: {
    ...mapActions(['setCurrentAction']),
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    async addCurrent () {
      console.log('You want to add current job')
      // Create data object
      const data = {
        title: this.currentTitle
      }
      const res = await CurrentService.createNewCurrent(data)
      console.log(res)
      this.setCurrentAction()
    },
    async deleteCurrent (id) {
      console.log('You want to delete')
      const res = await CurrentService.deleteCurrent(id)
      console.log(res)
      this.setCurrentAction()
    },
    handleEditModal (modal, item) {
      console.log(modal)
      this.isEditModalVisible = modal
      this.currentTitle = item.title
    },
    closeEditModal () {
      this.isEditModalVisible = ''
    },
    async editCurrent (id) {
      console.log('You want to update' + id)
      const data = {
        title: this.currentTitle
      }
      const res = await CurrentService.updateCurrent(id, data)
      console.log(res.data)
      this.setCurrentAction()
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
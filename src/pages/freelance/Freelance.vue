<template>
  <div class="freelance">
    <div class="freelance__display">
      <div v-for="(item, index) in getFreelance" :key="index" class="freelance-job">
        <p>{{ item.title }}</p>
        <button>Edit</button>
        <button @click.prevent="deleteFreelance(item._id)">Delete</button>
      </div>
    </div>
    <div class="freelance__options">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Add Freelance
      </button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Test 4
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="freelanceTitle" />
            <button @click.prevent="addFreelance">Add</button>
        </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../../components/modals/Modal.vue'
import FreelanceService from '../../services/FreelanceService'
export default {
  components: {
    Modal
  },
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
      ],
      isModalVisible: false,
      freelanceTitle: ''
    }
  },
  methods: {
    ...mapActions(['setFreelanceAction']),
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    async addFreelance () {
      console.log('You want to add freelance work')
      // Create data object
      const data = {
        title: this.freelanceTitle
      }
      const res = await FreelanceService.createNewFreelance(data)
      console.log(res)
      this.setFreelanceAction()

    },
    async deleteFreelance (id) {
      const res = await FreelanceService.deleteFreelance(id)
      console.log(res)
      this.setFreelanceAction()
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
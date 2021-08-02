<template>
  <div class="blogs">
    <div class="blogs__display">
      <div v-for="(item, index) in testData" :key="index" class="blog">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="blogs__options">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Open Modal
      </button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Test
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from '../../components/modals/Modal.vue'
export default {
  components: {
    Modal
  },
  computed: {
    ...mapGetters(['getBlogs'])
  },
  data () {
    return {
      testData: [
        {
          title: 'Blog 1'
        },
        {
          title: 'Blog 2'
        },
        {
          title: 'Blog 3'
        },
        {
          title: 'Blog 4'
        }
      ],
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
.blogs {
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

.blog {
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
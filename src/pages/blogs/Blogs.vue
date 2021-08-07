<template>
  <div class="blogs">
    <div class="blogs__display">
      <div v-for="(item, index) in getBlogs" :key="index" class="blog">
        <p>{{ item.title }}</p>
        <button>Edit</button>
        <button @click.prevent="deleteBlog(item._id)">Delete</button>
      </div>
    </div>
    <div class="blogs__options">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Add Blog
      </button>
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Test
        </template>
        <template v-slot:body>
          <div class="form-group">
            <label>Add entry</label>
            <input type="text" v-model="blogTitle" />
            <button @click.prevent="addBlog">Add</button>
        </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../../components/modals/Modal.vue'
import BlogService from '../../services/BlogService'
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
      isModalVisible: false,
      blogTitle: ''
    }
  },
  methods: {
    ...mapActions(['setBlogsAction']),
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    async addBlog () {
      console.log('You want to add a blog')
      console.log(this.blogTitle)
      const data = {
        title: this.blogTitle
      }
      const res = await BlogService.createNewBlog(data)
      console.log(res.data)
      this.setBlogsAction()
    },
    async deleteBlog (id) {
      const res = await BlogService.deleteBlog(id)
      console.log(res.data)
      this.setBlogsAction()
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
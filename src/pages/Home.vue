<template>
  <div>
    This is the homepage
    {{ getData }}
  </div>
</template>

<script>
import TestService from '../services/TestService'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getData'])
  },
  data () {
    return {
      testData: ''
    }
  },
  mounted () {
    this.getTest()
    this.getDataAction()
  },
  methods: {
    ...mapActions(['getDataAction']),
    async getTest () {
      const res = await TestService.getTest()
      console.log(res.data)
      this.testData = res.data
    }
  }  
}
</script>
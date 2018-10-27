<template>
  <v-container>
    <h2 class="display-2 pb-4">Blog</h2>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      post: {},
    }
  },

  mounted() {
    this.loadData()
  },

  methods: {
    async loadData() {
      let data = await axios.get('http://tecnoxperiencia.com/wp-json/wp/v2/posts?author=1')
      console.log(data)
    },
  },

}
</script>

<style scope>

</style>

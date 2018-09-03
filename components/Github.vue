<template>
  <span>
    <div class="display-3 pb-4">Github Projects</div>

    <v-layout row wrap>
      <v-flex
        xs12 sm6 md4
        v-for="item in repos.data"
        :key="item.id"
        class="pa-1"
      >
        <v-card>
          <v-card-title primary-title>

            <v-layout row wrap align-center>

              <h3 class="headline mb-0 textTitle">{{item.name}}</h3>

              <v-spacer></v-spacer>

              <v-avatar color="grey lighten-4">
                <img :src="item.owner.avatar_url" alt="owner">
              </v-avatar>

            </v-layout>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      repos: {},
    }
  },

  mounted() {
    this.cargarDatos()
  },

  methods: {
    async cargarDatos() {
      let data = await axios.get(`https://api.github.com/users/javieerrubio11/repos`)
      console.log(data.data)
      this.repos = data
    },
  },

}
</script>

<style scope>
  .textTitle {
    text-transform: capitalize;
  }
</style>

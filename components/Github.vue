<template>
  <v-container>
    <h2 class="display-2 pb-4">Github Projects</h2>

    <v-layout row wrap>
      <v-flex
        xs12 sm6 lg4 xl3
        v-for="item in repos"
        :key="item.id"
        class="pa-2"
      >
        <v-card hover>
          <v-card-title primary-title>
            <v-layout row wrap align-center>
              <h3 class="headline mb-0 textTitle">{{item.name}}</h3>

              <v-spacer></v-spacer>

              <v-avatar color="grey lighten-4">
                <img :src="item.owner.avatar_url" alt="owner">
              </v-avatar>
            </v-layout>
          </v-card-title>

          <v-card-title primary-title>
            <v-layout row wrap align-center justify-center>
              <v-chip v-for="(language, key, index) in item.languages" :key="index" color="secondary lighten-5">
                <!-- <v-avatar color="primary">
                  {{ (language * 100 / item.language_total_size).toFixed(1)}}%
                </v-avatar> -->
                {{key}}
              </v-chip>
              <!-- <span class="pa-1" v-for="(language, key, index) in item.languages" :key="index">
                <v-progress-circular
                  :size="70"
                  :width="5"
                  :value="calculePercent(language, item)"
                  color="primary"
                >
                  <span class="caption">
                    {{ key }}
                  </span>
                </v-progress-circular>
              </span> -->
            </v-layout>
          </v-card-title>

          <v-card-actions>
            <v-btn flat outline color="primary" block target="_blank" :href="item.html_url">Go</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      repos: {},
      languages: [],
    }
  },

  mounted() {
    this.cargarDatos()
  },

  methods: {
    async cargarDatos() {

      // Main repo data
      let data = await axios.get('https://api.github.com/users/javieerrubio11/repos')
      this.repos = data.data

      // Languages repo data
      for(let i = 0; i < this.repos.length; i++) {
        let element = this.repos[i]
        let languages = await axios.get(element.languages_url)
        element.languages = languages.data

        let total = 0
        for (var property in languages.data) {
          if (languages.data.hasOwnProperty(property)) {
              total += languages.data[property]
          }
        }
        element.language_total_size = total
      }
    },

    calculePercent(value, item) {
      return value * 100 / item.language_total_size
    }
  },

}
</script>

<style scope>
  .textTitle {
    text-transform: capitalize;
  }
</style>

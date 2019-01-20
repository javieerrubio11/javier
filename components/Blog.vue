<template>
  <v-container>
    <h2 class="display-2 pb-5 text-uppercase primary--text text--darken-4">{{ $t('blog.name') }}</h2>

    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 lg4 xl3 pa-2 v-for="(item, index) in articles.slice(0, limitArticles)" :key="index">
        <v-card>
          <v-card-title>
            <div class="title">
              <strong v-html="item.title.rendered"></strong>
            </div>
          </v-card-title>

          <v-card-title>
            <div class="justifyText" v-html="item.excerpt.rendered"></div>
          </v-card-title>

          <v-card-actions>
            <v-chip outline small color="blue darken-3">
               <v-icon left>date_range</v-icon>{{ item.date | spanishDate }}
             </v-chip>
            <v-spacer/>
            <v-btn outline color="secondary" target="_blank" :href="item.link">
              {{ $t('blog.buttonMore') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center class="pt-5">
      <v-btn large color="secondary" target="_blank" href="https://tecnoxperiencia.com">
        {{ $t('blog.buttonMore') }} ({{articles.length}})
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {

  data() {
    return {
      limitArticles: 8,
    }
  },

  computed: {
    articles: function() { return this.$store.state.blog.list }
  },

  mounted() {
    this.$store.dispatch('blog/get')
  },

  filters: {
    spanishDate: function (value) {
      if (!value) return ''
      return moment(value).format('DD/MM/YYYY');
    }
  }

}
</script>

<style scope>

</style>

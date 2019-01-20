<template>
  <v-container>
    <h2 class="display-2 pb-5 text-uppercase primary--text text--darken-4"> {{ $t('certifications.name') }} </h2>

    <v-expansion-panel popout>
      <v-expansion-panel-content class="pa-2" v-for="(item, index) in certification" :key="index">
        <v-layout align-center slot="header">
          <v-avatar size="100" tile class="pr-3 hidden-xs-only">
            <img class="" :src="item.image" alt="avatar">
          </v-avatar>
          <div class="pl-3">
            <h3 class="headline"><b>{{ $t(item.name) }}</b></h3>
            <h4 class="title pt-2">{{item.institution}} ({{item.date}})</h4>
          </div>
        </v-layout>
        <v-divider></v-divider>
        <v-card>
          <v-card-text>
            <v-layout row wrap align-center v-if="item.subjects.length > 0">
              <v-flex xs12>
                <p class="title">Subjects:</p>
              </v-flex>
              <v-flex class="subheading" xs12 sm4 xl3 px-1 v-for="subject in orderByCode(item.subjects)" :key="subject.code">
                <span v-if="subject.strong">- <strong>{{ $t(subject.title) }}</strong></span>
                <span v-else>- {{ $t(subject.title) }}</span>
              </v-flex>
            </v-layout>
            <v-layout v-else>
              <p class="title justifyText" v-html=" $t(item.description) "></p>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import _ from 'lodash'

export default {

  data() {
    return {
    }
  },

  computed: {
    certification: function () { return this.$store.state.certification },
  },

  methods: {
    orderByCode: function(items) {
      return _.orderBy(items, ['code'], ['asc'])
    },
  },

}
</script>

<style>
  .v-expansion-panel__header {
    height: auto !important;
  }
</style>

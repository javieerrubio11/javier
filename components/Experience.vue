<template>
  <div>
    <v-container>
      <h2 class="display-2 pb-5 text-uppercase primary--text text--darken-4">{{ $t('experience.name') }}</h2>
    </v-container>

    <v-container fluid>
      <v-timeline class="hidden-sm-and-down">
        <v-timeline-item
          v-for="(item, index) in experience"
          :key="index"
          color="secondary"
          large
        >
          <span
            slot="opposite"
            :class="`headline`"
            v-text="item.date"
          ></span>

          <v-card hover>
            <v-card-title>
              <v-layout row wrap align-end class="mx-4" align-center>
                <h3 xs12 class="headline pr-3">
                  <strong>{{item.name}}</strong>
                </h3>
                <v-flex></v-flex>
                <img class="autoSizeImage" :src="item.image" :alt="item.name">
              </v-layout>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-title class="mx-4">
              <v-layout align-center>
                <v-layout row wrap>
                  <v-flex xs12 md6 class="title pb-4"><strong v-html="$t(item.position)"></strong></v-flex>
                  <v-flex xs12 md6 class="title pb-4 hidden-sm-and-down" v-html="$t(item.dateCalc)"></v-flex>
                  <v-flex xs12 class="title pb-4 hidden-md-and-up" v-html="'<b>' + item.date + '</b> (' + $t(item.dateCalc) + ')'"></v-flex>
                  <v-flex xs12 class="subheadline pb-4 justifyText" v-html="$t(item.description)"></v-flex>
                  <v-flex xs12 class="subheadline pb-4 justifyText" v-html="$t(item.skills)"></v-flex>
                </v-layout>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>

      <v-layout column class="hidden-md-and-up">
        <v-card v-for="(item, index) in experience" :key="index" class="my-2">
          <v-card-title>
            <v-layout row wrap align-end class="mx-4" align-center>
              <h3 xs12 class="headline pr-3">
                <strong>{{item.name}}</strong>
              </h3>
              <v-flex></v-flex>
              <img class="autoSizeImage" :src="item.image" :alt="item.name">
            </v-layout>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-title class="mx-4">
            <v-layout align-center>
              <v-layout row wrap>
                <v-flex xs12 md6 class="title pb-4"><strong v-html="$t(item.position)"></strong></v-flex>
                <v-flex xs12 md6 class="title pb-4 hidden-sm-and-down" v-html="$t(item.dateCalc)"></v-flex>
                <v-flex xs12 class="title pb-4 hidden-md-and-up" v-html="'<b>' + item.date + '</b> (' + $t(item.dateCalc) + ')'"></v-flex>
                <v-flex xs12 class="subheadline pb-4 justifyText" v-html="$t(item.description)"></v-flex>
                <v-flex xs12 class="subheadline pb-4 justifyText" v-html="$t(item.skills)"></v-flex>
              </v-layout>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    experience: function () { return this.$store.state.experience },
  },
}
</script>

<style scoped>
  .autoSizeImage {
    height: 45px;
    width: auto;
  }
</style>

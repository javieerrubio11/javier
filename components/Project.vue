<template>
  <v-container>
    <h2 class="display-2 pb-5 text-uppercase primary--text text--darken-4">{{ $t('projects.name') }}</h2>

    <v-layout row wrap>
      <v-flex xs12 md6 pa-2 v-for="(item, index) in projects" :key="index">
        <v-card hover>

          <v-card-title primary-title style="position: relative;">
            <v-layout row wrap>
              <v-flex xs12 class="py-2">
                <h3 class="headline"><b>{{item.name}}</b> ({{item.date}})</h3>
              </v-flex>

              <span class="py-2" v-if="item.link">
                <v-btn :href="item.link" target="_blank" color="secondary" round bottom right absolute style="z-index: 2;">
                  <v-icon left>link</v-icon> {{ $t('projects.link') }}
                </v-btn>
              </span>
            </v-layout>
          </v-card-title>

          <v-divider></v-divider>

          <!-- Media -->
          <v-img v-if="!item.images" :src="item.image" height="300"></v-img>

          <swiper :options="swiperOption2" ref="mySwiper3" v-if="item.images">
            <swiper-slide v-for="(item, i) in item.images" :key="i">
              <v-layout rwo justify-center>
                <img class="autoSizeImage" :src="item"/>
              </v-layout>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

          <v-divider></v-divider>

          <v-card-title primary-title class="justifyText">
            <v-layout column>
              <div class="title pb-2">
                <strong>{{ $t('projects.technologies') }}</strong>
              </div>
              <div class="subheadline pb-3" v-html="$t(item.technologies)"></div>
              <div class="title pb-2">
                <strong>{{ $t('projects.description') }}</strong>
              </div>
              <div class="subheadline pb-1" v-html="$t(item.description)"></div>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

  computed: {
    breakpoint: function () { return this.$vuetify.breakpoint },
    projects: function () { return this.$store.state.projects },
  },

  data() {
    return {
      show: false,
      swiperOption2: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
    }
  },

}
</script>

<style scoped>
  .autoSizeImage {
    height: 330px;
    width: auto;
  }

  .mediaPadding {
    padding: 0px 0px;
  }

  @media (max-width: 599px) {
    .mediaPadding {
      padding: 32px 0px;
    }
  }
</style>

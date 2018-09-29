<template>
  <v-app>
    <Header/>

    <nuxt/>

    <BackToTop/>

    <Footer/>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import BackToTop from '~/components/BackToTop.vue'

export default {

  components: {
    Header,
    Footer,
    BackToTop,
  },

  data() {
    return {
    }
  },

}
</script>

<style>
</style>

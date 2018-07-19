<template>
  <v-app>

    <v-btn color="success">Success</v-btn>

    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
          <h3>vue-fullpage.js</h3>
      </div>
      <div class="section">
          <div class="slide">
              <h3>Slide 2.1</h3>
          </div>
          <div class="slide">
              <h3>Slide 2.2</h3>
          </div>
          <div class="slide">
              <h3>Slide 2.3</h3>
          </div>
      </div>
      <div class="section">
          <h3>Section 3</h3>
      </div>
    </full-page>
  </v-app>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'

export default {

  components: {
  },

  data() {
    return {
      options: {
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    }
  },

}
</script>



<style>

</style>

<template>
  <div>

    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <v-container>
          <v-layout align-center>
            <v-flex>
              <v-layout>
                <v-flex></v-flex>
                <v-avatar size="400" color="grey lighten-4">
                  <img src="image/javier.png" alt="avatar">
                </v-avatar>
                <v-flex></v-flex>
              </v-layout>
            </v-flex>

            <v-flex>
              <h1>Vicente Javier González Llobet</h1>
              <h2>Email: javieerrubio11@gmail.com</h2>
              <h2>Age: 23 (05/04/1994)</h2>
              <h2>Address: Poeta Llorente 114, La Vall d’Uixó, Castellón</h2>
              <h2>Phone: 615248119</h2>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="section">
        <v-container>
          <Certification/>
        </v-container>
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
        <v-container>
          <Skill/>
        </v-container>
      </div>
    </full-page>

  </div>
</template>

<script>
import Skill from '~/components/Skill.vue'
import Certification from '~/components/Certification.vue'

export default {

  components: {
    Skill, Certification
  },

  data() {
    return {
      options: {
        navigation: true,
        paddingTop: '60px',
        anchors: ['page111', 'page2', 'page3', 'page4'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    }
  },

}
</script>



<style>

</style>

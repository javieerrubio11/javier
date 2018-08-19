<template>
  <div>

    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <v-container>
          <Main/>
        </v-container>
      </div>
      <div class="section">
        <v-container>
          <Certification/>
        </v-container>
      </div>
      <div class="section">
        <v-container>
          <Experiencie/>
        </v-container>
      </div>
      <div class="section">
        <v-container>
          <Skill/>
        </v-container>
      </div>
      <div class="section">
        <v-container>
          <Proyect/>
        </v-container>
      </div>
    </full-page>

  </div>
</template>

<script>
import Skill from '~/components/Skill.vue'
import Certification from '~/components/Certification.vue'
import Experiencie from '~/components/Experiencie.vue'
import Proyect from '~/components/Proyect.vue'
import Main from '~/components/Main.vue'

export default {

  components: {
    Skill, Certification, Experiencie, Proyect, Main
  },

  data() {
    return {
      options: {
        menu: '#menu-header',
        scrollBar: false,
        navigation: true,
        paddingTop: '60px',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        sectionsColor: ['#ff5f45', '#41b883', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9'],
        responsiveWidth: '960'
      },
    }
  },

}
</script>



<style>

</style>

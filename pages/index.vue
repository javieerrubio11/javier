<template>
  <v-layout row wrap align-center>

    <v-flex xs12 v-for="(item, index) in sections" :key="index" :class="[item.color + ' lighten-3']">
      <v-container>
        <component v-bind:is="item.name"></component>
      </v-container>
    </v-flex>

  </v-layout>
</template>

<script>
import Skill from '~/components/Skill.vue'
import Certification from '~/components/Certification.vue'
import Experiencie from '~/components/Experiencie.vue'
import Proyect from '~/components/Proyect.vue'
import Main from '~/components/Main.vue'
import Github from '~/components/Github.vue'

export default {

  components: {
    Skill, Certification, Experiencie, Proyect, Main, Github
  },

  data() {
    return {
      sections: [
        { id: 1, name: 'Main', color: 'teal' },
        { id: 2, name: 'Certification', color: 'green' },
        { id: 3, name: 'Experiencie', color: 'blue' },
        { id: 4, name: 'Skill', color: 'green' },
        { id: 5, name: 'Proyect', color: 'amber' },
        { id: 6, name: 'Github', color: 'lime' },
      ]
    }
  },

}
</script>



<style>

</style>

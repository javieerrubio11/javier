<template>
  <v-layout row wrap align-center>

    <v-flex
      xs12
      v-for="(item, index) in sections"
      :key="index"
      :class="[(index % 2 == 0) ? 'blue-grey lighten-2' : 'blue-grey lighten-3']"
      :id="item.anchor"
      class="section-index"
    >
      <component v-bind:is="item.name"></component>
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

  computed: {
    sections: function () {
      return this.$store.state.sections
    }
  },

}
</script>

<style>
  .section-index {
    padding: 80px 0px;
  }
</style>

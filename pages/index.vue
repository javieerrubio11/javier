<template>
  <v-layout row wrap align-center>

    <v-flex
      xs12
      v-for="(item, index) in sections"
      :key="index"
      :class="[(index % 2 == 0) ? 'blue-grey lighten-2' : 'blue-grey lighten-4']"
      :id="item.anchor"
      class="section-index"
    >
      <component v-bind:is="item.section"></component>
    </v-flex>

  </v-layout>
</template>

<script>
import Skill from '~/components/Skill.vue'
import Certification from '~/components/Certification.vue'
import Experience from '~/components/Experience.vue'
import Project from '~/components/Project.vue'
import Main from '~/components/Main.vue'
import Github from '~/components/Github.vue'
import Blog from '~/components/Blog.vue'

export default {

  components: {
    Skill, Certification, Experience, Project, Main, Github, Blog
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

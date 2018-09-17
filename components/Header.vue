<template>
  <span>
    <v-toolbar
      fixed
      :class="[(hoverToolbar) ? 'primary' : 'transparent']"
      dark
      height="60"
      flat
      @mouseenter="hoverToolbar = true"
      @mouseleave="hoverToolbar = false"
    >
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title>
        V. Javier González
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down" id="menu-header">
        <v-btn flat v-for="(item, index) in sections" :key="index" active-class @click="$vuetify.goTo('#'+item.anchor, options)">
          {{item.name}}
        </v-btn>
      </v-toolbar-items>

      <span class="px-1">
        <v-btn icon large target="_blank" href="https://github.com/javieerrubio11">
          <v-icon large>mdi-github-circle</v-icon>
        </v-btn>
      </span>
      <span class="px-1">
        <v-btn icon large target="_blank" href="https://www.linkedin.com/in/vicente-javier-gonz%C3%A1lez-llobet-89a771117/">
          <v-icon large>mdi-linkedin</v-icon>
        </v-btn>
      </span>
    </v-toolbar>
  </span>
</template>

<script>
export default {

  data () {
    return {
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      hoverToolbar: false,
    }
  },

  computed: {
    sections: function () {
      return this.$store.state.sections
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
  },

}
</script>

<style scope>
  .header-item {
    text-decoration: none;
    font-size: 15px;
  }
</style>

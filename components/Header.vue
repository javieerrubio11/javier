<template>
  <span>
    <v-toolbar fixed color="transparent" dark height="60" flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only" id="menu-header">
        <v-btn @click="goToPage" to="#page1" flat>Link One</v-btn>
        <v-btn @click="goToPage" to="#page2" flat>Link Two</v-btn>
        <v-btn @click="goToPage" to="#page3" flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
export default {

  data() {
    return {
      sections: {

      },
    }
  },

  methods: {
    goToPage() {
      console.log(this, this.$refs, this.$refs.fullpage)
      // fullpage_api.setAllowScrolling(false);
    }
  }

}
</script>

<style>
</style>

<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary darken-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon,index) in icons"
          :key="index"
          icon
          target="_blank"
          :href="icon.link"
        >
          <v-icon>{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="primary darken-3 justify-center">
        <p>&copy;2018 — <strong>Vicente Javier González Llobet</strong></p>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {

  data: () => ({
    icons: [
      { name: 'mdi-file-pdf', link: '../static/file/cv-en.pdf' },
      { name: 'mdi-github-circle', link: 'https://github.com/javieerrubio11' },
      { name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/vicente-javier-gonz%C3%A1lez-llobet-89a771117/' },
    ]
  })
}
</script>

<style scope>

</style>

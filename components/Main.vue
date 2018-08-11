<template>
  <v-layout align-center row wrap>
    <v-flex sm12 md6 class="px-2 py-4">
      <v-layout>
        <v-flex></v-flex>
        <v-avatar size="350" color="grey lighten-4">
          <img src="image/javier.png" alt="avatar">
        </v-avatar>
        <v-flex></v-flex>
      </v-layout>
    </v-flex>

    <v-flex sm12 md6 class="px-2 py-4">
      <h1>Vicente Javier González Llobet</h1>
      <h2>Email: javieerrubio11@gmail.com</h2>
      <h2>Age: 23 (05/04/1994)</h2>
      <h2>Address: Poeta Llorente 114, La Vall d’Uixó, Castellón</h2>
      <h2>Phone: 615248119</h2>
    </v-flex>

    <v-flex xs12 class="py-5">
      <v-layout row wrap justify-center>
        <span class="pa-2 px-4" v-for="item in skills" :key="item.name">
          <v-badge right overlap>
            <span slot="badge">{{item.level}}</span>
            <v-avatar size="120">
              <img :src="item.image" :alt="item.name">
            </v-avatar>
          </v-badge>
        </span>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

  data() {
    return {
      skills: [
        { level: 4, name: 'VueJs', image: 'image/skills/vuejs.png' },
        { level: 4, name: 'AngularJs', image: 'image/skills/angularjs2.png' },
        { level: 5, name: 'Java', image: 'image/skills/java.png' },
        { level: 4, name: 'Php', image: 'image/skills/php.png' },
        { level: 4, name: 'Spring', image: 'image/skills/spring.png' },
        { level: 4, name: 'Laravel', image: 'image/skills/laravel.jpg' },
      ],
    }
  },

  methods: {

  }

}
</script>

<style>

</style>

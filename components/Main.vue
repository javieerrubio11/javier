<template>
  <v-layout align-center row wrap>
    <v-flex sm12 md6 class="px-2 py-2">
      <v-layout>
        <v-flex></v-flex>
        <v-avatar size="300" color="grey lighten-4">
          <img src="image/javier.png" alt="avatar">
        </v-avatar>
        <v-flex></v-flex>
      </v-layout>
    </v-flex>

    <v-flex sm12 md6 class="px-2 py-2">
      <h1>Vicente Javier González Llobet</h1>
      <h2>Address: La Vall d’Uixó, Castellón, España</h2>
      <h2>Age: 24 (05/04/1994)</h2>
      <h2>Email: <a class="black--text link-email" href="mailto:&#106;&#97;&#118;&#105;&#101;&#101;&#114;&#114;&#117;&#98;&#105;&#111;&#49;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#106;&#97;&#118;&#105;&#101;&#101;&#114;&#114;&#117;&#98;&#105;&#111;&#49;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a></h2>
    </v-flex>

    <v-flex xs12 class="py-5">
      <v-layout row wrap justify-center>
        <v-flex xs12 class="display-1 pb-2">
          <v-layout justify-center>
            <b>Main Skills</b>
          </v-layout>
        </v-flex>
        <span class="pa-3" v-for="item in skills" :key="item.name">
          <v-tooltip bottom>
            <span>{{item.name}}</span>
            <v-badge slot="activator" right overlap :color="'primary darken-' + (item.level - 1)">
              <span slot="badge">{{item.level}}</span>
              <v-avatar size="100">
                <img :src="item.image" :alt="item.name">
              </v-avatar>
            </v-badge>
          </v-tooltip>
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
  .link-email {
    text-decoration: none;
  }
</style>

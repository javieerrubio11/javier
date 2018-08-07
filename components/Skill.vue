<template>
  <span>
    <div class="display-3 py-4">Skills</div>

    <v-layout>
      <v-flex></v-flex>
      <v-flex xs12 md6>
        <v-text-field
          label="Search..."
          prepend-icon="search"
          color="white"
          v-model="search"
        ></v-text-field>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>

    <v-layout>

      <v-flex xs6 class="pr-4">
        <div class=" display-2 py-3">Front</div>
        <v-layout wrap justify-center>
          <v-chip outline color="white"
          v-for="(item, index) in filterName(skills, search)" :key="index"
          class="mx-2`own-chip"
          v-if="item.type == 'f'">
            <v-avatar color="white">
              <img :src="item.image" :alt="item.name">
            </v-avatar>
            <h3 class="px-2">
              {{item.name}}
            </h3>
          </v-chip>
        </v-layout>
      </v-flex>

      <v-flex xs6>
        <div class="display-2 py-3">Back</div>
        <v-layout wrap justify-center>
          <v-chip outline color="white"
          v-for="(item, index) in filterName(skills, search)" :key="index"
          class="mx-2 own-chip"
          v-if="item.type == 'b'">
            <v-avatar color="white">
              <img :src="item.image" :alt="item.name">
            </v-avatar>
            <h3 class="px-2">
              {{item.name}}
            </h3>
          </v-chip>
        </v-layout>
      </v-flex>

    </v-layout>
  </span>
</template>

<script>
export default {

  data() {
    return {
      search: '',
      skills: [
        { name: 'Java', level: 5, type: 'b', image: 'image/skills/java.png' },
        { name: 'PHP', level: 4, type: 'b', image: 'image/skills/php.png' },
        { name: 'Laravel', level: 4, type: 'b', image: 'image/skills/laravel.jpg' },
        { name: 'Spring', level: 4, type: 'b', image: 'image/skills/spring.png' },
        { name: 'Hibernate', level: 4, type: 'b', image: 'image/skills/hibernate.png' },
        { name: 'Webservice', level: 5, type: 'b', image: 'image/skills/wsdl.png' },
        { name: 'WSDL', level: 4, type: 'b', image: 'image/skills/wsdl.png' },
        { name: 'GIT', level: 4, type: 'b', image: 'image/skills/git.png' },
        { name: 'SQL', level: 5, type: 'b', image: 'image/skills/sql.png' },

        { name: 'JavaScript', level: 4, type: 'f', image: 'image/skills/javascript.png' },
        { name: 'HTML5', level: 4, type: 'f', image: 'image/skills/html5.png' },
        { name: 'CSS3', level: 4, type: 'f', image: 'image/skills/css3.png' },
        { name: 'Sass', level: 3, type: 'f', image: 'image/skills/sass.png' },
        { name: 'Npm', level: 3, type: 'f', image: 'image/skills/npm.png' },
        { name: 'Yarn', level: 3, type: 'f', image: 'image/skills/yarn.png' },
        { name: 'Node', level: 3, type: 'f', image: 'image/skills/node.png' },
        { name: 'VueJs', level: 5, type: 'f', image: 'image/skills/vuejs.png' },
        { name: 'AngularJs', level: 4, type: 'f', image: 'image/skills/angularjs2.png' },
      ],
    }
  },

  methods: {
    filterName: function (items, text) {
      return items.filter(function (item) {
        if(text == null || text == '' || item.name == null) return true;
        return (item.name.toLowerCase().search(text.toLowerCase()) < 0) ? false : true;
      })
    },
  },
}
</script>

<style scope>
  .own-chip {
    min-width: 130px;
  }
</style>

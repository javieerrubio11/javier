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

      <v-flex xs6 v-for="(category, index) in categoryList" :key="index">
        <div class=" display-2 py-3">{{category.name}}</div>
        <v-layout wrap justify-center>
          <v-chip outline color="white" v-for="(item, index) in filterName(orderByLevelName(skills), search, category.type)" :key="index" class="ma-2 ownChip">
            <v-badge left :color="'primary lighten-' + (5 - item.level)">
              <span slot="badge">{{item.level}}</span>
              <v-avatar color="white">
                <img :src="item.image" :alt="item.name">
              </v-avatar>
            </v-badge>
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
import _ from 'lodash'

export default {

  data() {
    return {
      search: '',
      categoryList: [
        { name: 'Front', type: 'f' },
        { name: 'Back', type: 'b' },
      ],
      skills: [
        { level: 5, name: 'Java', type: 'b', image: 'image/skills/java.png' },
        { level: 4, name: 'PHP', type: 'b', image: 'image/skills/php.png' },
        { level: 4, name: 'Laravel', type: 'b', image: 'image/skills/laravel.jpg' },
        { level: 4, name: 'Spring', type: 'b', image: 'image/skills/spring.png' },
        { level: 4, name: 'Hibernate', type: 'b', image: 'image/skills/hibernate.png' },
        { level: 5, name: 'Webservice', type: 'b', image: 'image/skills/wsdl.png' },
        { level: 4, name: 'WSDL', type: 'b', image: 'image/skills/wsdl.png' },
        { level: 3, name: 'HL7', type: 'b', image: 'image/skills/hl7.jpg' },
        { level: 4, name: 'GIT', type: 'b', image: 'image/skills/git.png' },
        { level: 4, name: 'SQL', type: 'b', image: 'image/skills/sql.png' },

        { level: 5, name: 'JavaScript', type: 'f', image: 'image/skills/javascript.png' },
        { level: 4, name: 'HTML5', type: 'f', image: 'image/skills/html5.png' },
        { level: 4, name: 'CSS3', type: 'f', image: 'image/skills/css3.png' },
        { level: 3, name: 'Sass', type: 'f', image: 'image/skills/sass.png' },
        { level: 4, name: 'Npm', type: 'f', image: 'image/skills/npm.png' },
        { level: 3, name: 'Yarn', type: 'f', image: 'image/skills/yarn.png' },
        { level: 3, name: 'Node', type: 'f', image: 'image/skills/node.png' },
        { level: 4, name: 'VueJs', type: 'f', image: 'image/skills/vuejs.png' },
        { level: 4, name: 'AngularJs', type: 'f', image: 'image/skills/angularjs2.png' },
      ],
    }
  },

  methods: {
    filterName: function (items, text, type) {
      return items.filter(function (item) {
        if(type != item.type) return false;
        if(text == null || text == '' || item.name == null) return true;
        return (item.name.toLowerCase().search(text.toLowerCase()) < 0) ? false : true;
      })
    },

    orderByLevelName: function(items) {
      return _.orderBy(items, ['level', 'name'], ['desc', 'asc'])
    },
  },
}
</script>

<style scope>
  .ownChip {
    min-width: 120px;
  }
</style>

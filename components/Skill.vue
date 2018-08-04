<template>
  <span>
    <h2 class="pb-4">Skills</h2>

    <v-text-field
      label="Search..."
      prepend-icon="search"
      color="white"
      v-model="search"
    ></v-text-field>

    <v-layout>
      <v-flex xs6>
        <h3 class="py-2">Front</h3>
        <v-layout wrap>
          <v-chip outline color="white"
          v-for="(item, index) in filterName(skills, search)" :key="index"
          class="mx-2"
          v-if="item.type == 'f'">
            <v-avatar>
              <img :src="item.image" :alt="item.name">
            </v-avatar>
            <h3 class="px-2">
              {{item.name}}
            </h3>
            <!--<v-icon right>add</v-icon>-->
          </v-chip>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <h3 class="py-2">Back</h3>
        <v-layout wrap>
          <v-chip outline color="white"
          v-for="(item, index) in filterName(skills, search)" :key="index"
          class="mx-2"
          v-if="item.type == 'b'">
            <v-avatar class="white">
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
        { name: 'PHP', level: 4, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Laravel', level: 4, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Spring', level: 4, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Hibernate', level: 4, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Webservice', level: 5, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'WSDL', level: 4, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'GIT', level: 4, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'SQL', level: 5, type: 'b', image: 'https://randomuser.me/api/portraits/men/35.jpg' },

        { name: 'JavaScript', level: 4, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'HTML5', level: 4, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'CSS3', level: 4, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Sass', level: 3, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Npm', level: 3, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Yarn', level: 3, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'Node', level: 3, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'VueJs', level: 5, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
        { name: 'AngularJs', level: 4, type: 'f', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
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

<style>
</style>

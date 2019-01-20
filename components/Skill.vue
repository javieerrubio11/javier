<template>
  <v-container>
    <h2 class="display-2 pb-5 text-uppercase primary--text text--darken-4">{{ $t('skills.name') }}</h2>

    <v-layout>
      <v-flex></v-flex>
      <v-flex xs12 md6>
        <v-text-field
          label="Search"
          prepend-icon="search"
          color="white"
          v-model="search"
          solo
        ></v-text-field>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>

    <v-layout>
      <v-spacer/>
      <v-flex xs6 lg5 v-for="(category, index) in categoryList" :key="index">
        <h3 class="display-1 py-4">{{category.name}}</h3>
        <v-layout wrap justify-center>
          <v-chip outline color="white" v-for="(item, index) in filterName(orderByLevelName(skills), search, category.type)" :key="index" class="ma-2 ownChip">
            <v-badge left :color="'primary darken-' + (item.level - 1)">
              <span slot="badge">{{item.level}}</span>
              <v-avatar color="white">
                <img :src="item.image" :alt="item.name">
              </v-avatar>
            </v-badge>
            <h3 class="pl-3 pr-2">
              {{item.name}}
            </h3>
          </v-chip>
        </v-layout>
      </v-flex>
      <v-spacer/>
    </v-layout>

  </v-container>
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
    }
  },

  computed: {
    skills: function () { return this.$store.state.skills },
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
    min-width: 150px;
  }
</style>

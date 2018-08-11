<template>
  <span>
    <div class="display-3 pb-4">Certification ({{certification.length}})</div>

    <v-expansion-panel popout>
      <v-expansion-panel-content class="pa-2" v-for="(item, index) in certification" :key="index">
        <v-layout align-center slot="header">
          <v-avatar size="100" tile class="pr-3 hidden-xs-only">
            <img class="" :src="item.image" alt="avatar">
          </v-avatar>
          <div>
            <div class="display-1"><b>{{item.name}}</b></div>
            <div class="headline">({{item.date}}) {{item.institution}}</div>
          </div>
        </v-layout>
        <v-divider></v-divider>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </span>
</template>

<script>
export default {

  data() {
    return {
      certification: [
        { name: 'Master in Intelligent Systems', date: '2016 - 2017', image: 'image/uji.png', institution: 'Universitat Jaume I' },
        { name: 'Degree in Computer Engineering', date: '2012 - 2016', image: 'image/uji.png', institution: 'Universitat Jaume I' },
        { name: 'Science and Technology High School', date: '2010 - 2012', image: 'image/honori.gif', institution: 'IES Honori García' },
      ],
    }
  },

}
</script>

<style>
  .v-expansion-panel__header {
    height: auto !important;
  }
</style>

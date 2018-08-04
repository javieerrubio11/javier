<template>
  <span>
    <div class="display-4 pb-4">Certification</div>

    <v-layout>
      <v-flex></v-flex>
      <v-flex>
        <v-layout align-center wrap class="py-3" v-for="item in certification" :key="item">
          <v-flex xs12 sm4 md4 lg3>
            <v-avatar size="150" tile>
              <img class="" :src="item.image" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex xs12 sm8 md8 lg9>
            <div class="display-2"><b>{{item.name}}</b></div>
            <div class="display-1">({{item.date}}) {{item.institution}}</div>
          </v-flex>
          <v-flex></v-flex>
        </v-layout>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
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
</style>

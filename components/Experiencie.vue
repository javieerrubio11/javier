<template>
  <v-container>
    <h2 class="display-2 pb-4">Work Experiencie</h2>

    <div class="py-3" v-for="(item, index) in experiencie" :key="index">
      <v-card hover>
        <v-card-title>
          <v-layout row wrap align-end class="mx-4">
            <h3 xs12 class="display-1 pr-3"><b>{{item.name}}</b></h3>
            <h4 class="headline">({{item.dateCalc}})</h4>
            <v-flex></v-flex>
            <img class="autoSizeImage" :src="item.image" :alt="item.name">
          </v-layout>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-title class="mx-4">
          <v-layout align-center>
            <v-layout row wrap>
              <v-flex xs12 md6 class="headline pb-4" v-html="item.position"></v-flex>
              <v-flex xs12 md6 class="subheadline pb-4" v-html="item.date"></v-flex>
              <v-flex xs12 md5 class="subheadline pb-4 justifyText" v-html="item.description"></v-flex>
              <v-flex xs12 md1></v-flex>
              <v-flex xs12 md6 class="subheadline pb-4 justifyText" v-html="item.skills"></v-flex>
            </v-layout>
          </v-layout>
        </v-card-title>
      </v-card>
    </div>

  </v-container>
</template>

<script>
export default {

  data() {
    return {
      experiencie: [
        {
          name: 'Tugesto',
          date: '02/2018 – Now',
          dateCalc: '7 months',
          position: '<b>Team leader</b>',
          description: 'Programmer of web pages as <b>full stack developer</b> and <b>team leader</b> in important projects. One project was create a <b>dashboard</b> of statistics for the clients.',
          skills: '<b>Tools and technologies</b>: <b>PHP</b>, <b>Laravel</b>, Lumen, <b>VueJs</b>, <b>Nuxt</b>, Node, Npm, Yarn, SASS, CSS3, HTML5, API Rest, MySQL, GIT and <b>UX/IU</b> (material design).',
          image: 'image/experiencie/logo_tugesto.png'
        },
        {
          name: 'INTEGRA Consultores',
          date: '10/2015 – 02/2018',
          dateCalc: '2 years and 5 months',
          position: '<b>Full Stack Developer</b>',
          description: 'Programmer of web pages as <b>full stack developer</b>. The project was to work together with the client (Unión de Mutuas) to develop a module of its internal management application. This module was the development of the management <b>clinical history</b> of their patients.',
          skills: '<b>Tools and technologies</b>: <b>AngularJS</b>, <b>Java</b>, <b>Spring</b>, CSS3, HTML5, Hibernate, HL7, WSDL, API Rest, SQL Server, Jira, GIT and <b>UX/IU</b> (material design).',
          image: 'image/experiencie/integra.jpg'
        },
        {
          name: 'Universo Langur',
          date: '01/2015 – 04/2015',
          dateCalc: '3 months',
          position: '<b>Full Stack Developer</b>',
          description: 'Programmer of web pages as full stack developer. The project was about adding new features to a hotspot management dashboard.',
          skills: '<b>Tools and technologies</b>: <b>PHP</b>, <b>CakePhp</b>, MySQL, desarrollo ágil, Jira, GIT, jQuery, HTML5 and CSS3.',
          image: 'image/experiencie/langur.jpg'
        },
      ],

    }
  },

}
</script>

<style scoped>
  .autoSizeImage {
    height: 45px;
    width: auto;
  }
</style>

<template>
  <span>
    <div class="display-3 py-4">Work Experiencie</div>

    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in experiencie" :key="index">
        <v-card>
          <v-card-title class="mx-4">
            <v-layout row wrap align-end>
              <span xs12 class="display-2 pr-3"><b>{{item.name}}</b></span>
              <span class="display-1">({{item.dateCalc}})</span>
              <v-flex></v-flex>
              <img class="autoSizeImage" :src="item.image" :alt="item.name">
            </v-layout>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-title class="mx-4" style="min-height: 400px;">
            <v-layout align-center>
              <v-layout row wrap>
                <v-flex xs12 md6 class="headline pb-4" v-html="item.position"></v-flex>
                <v-flex xs12 md6 class="headline pb-4" v-html="item.date"></v-flex>
                <v-flex xs12 md5 class="headline pb-4 hidden-xs-only" v-html="item.description"></v-flex>
                <v-flex xs12 md1></v-flex>
                <v-flex xs12 md6 class="headline pb-4" v-html="item.skills"></v-flex>
              </v-layout>
            </v-layout>
          </v-card-title>
        </v-card>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </span>
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
          position: '<b>Project manager</b>',
          description: 'Programmer of web pages as <b>full stack developer</b> and <b>project manager</b> in important projects. One project was create a <b>dashboard</b> of statistics for the clients.',
          skills: 'Tools and technologies: <b>PHP</b>, <b>Laravel</b>, Lumen, <b>VueJs</b>, <b>Nuxt</b>, Node, Npm, Yarn, SASS, CSS3, HTML5, API Rest, MySQL, GIT and <b>UX/IU</b> (material design).',
          image: 'image/experiencie/logo_tugesto.png'
        },
        {
          name: 'INTEGRA Consultores',
          date: '10/2015 – 02/2018',
          dateCalc: '2 years and 5 months',
          position: '<b>Full Stack Developer</b>',
          description: 'Programmer of web pages as <b>full stack developer</b>. The project was to work together with the client (Unión de Mutuas) to develop a module of its internal management application. This module was the development of the management <b>clinical history</b> of their patients.',
          skills: 'Tools and technologies: <b>AngularJS</b>, <b>Java</b>, <b>Spring</b>, CSS3, HTML5, Hibernate, HL7, WSDL, API Rest, SQL Server, Jira, GIT and <b>UX/IU</b> (material design).',
          image: 'image/experiencie/integra.jpg'
        },
        {
          name: 'Universo Langur',
          date: '01/2015 – 04/2015',
          dateCalc: '3 months',
          position: '<b>Full Stack Developer</b>',
          description: 'Programmer of web pages as full stack developer. The project was about adding new features to a hotspot management dashboard.',
          skills: 'Tools and technologies: <b>PHP</b>, <b>CakePhp</b>, MySQL, desarrollo ágil, Jira, GIT, jQuery, HTML5 and CSS3.',
          image: 'image/experiencie/langur.jpg'
        },
      ],

      swiperOption: {
        effect: 'cube',
        grabCursor: true,
        speed: 800,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 100,
          shadowScale: 0.95
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },

}
</script>

<style scope>
  .autoSizeImage {
    height: 55px;
    width: auto;
  }
</style>

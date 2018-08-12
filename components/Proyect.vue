<template>
  <span>
    <div class="display-3 pb-4">Proyects ({{proyect.length}})</div>

    <v-layout>
      <swiper :options="swiperOption1" ref="mySwiper2">
        <swiper-slide v-for="(item, index) in proyect" :key="index">
          <v-card>
            <v-layout align-center row wrap>
              <v-flex xs12 md6>
                <v-card-title primary-title>
                  <v-layout column>
                    <div class="py-2">
                      <span class="display-1">{{proyect.length - index}}. <b>{{item.name}}</b></span>
                      <span class="headline"> ({{item.date}})</span>
                    </div>
                    <div class="py-2" v-if="item.link">
                      <v-btn :href="item.link" target="_blank" color="secondary" round outline>
                        <v-icon left>link</v-icon> Link
                      </v-btn>
                    </div>
                  </v-layout>
                </v-card-title>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-media v-if="!item.images" :src="item.image" height="250"></v-card-media>

                <swiper :options="swiperOption2" ref="mySwiper3" v-if="item.images">
                  <swiper-slide v-for="(item, i) in item.images" :key="i">
                    <v-layout rwo justify-center>
                      <img class="autoSizeImage" :src="item"/>
                    </v-layout>
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-title primary-title class="justifyText" style="position: relative;">
              <v-layout column>
                <div class="title pb-1"><b>Description</b></div>
                <div v-html="item.description"></div>

                <div class="title pb-1"><b>Technologies</b></div>
                <div v-html="item.technologies"></div>
              </v-layout>

              <!--<v-btn icon fab @click="show = !show" absolute right bottom color="secondary" small>-->
                <!--<v-icon bottom style="height: 18px;">{{ !show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>-->
              <!--</v-btn>-->
            </v-card-title>

            <!--<v-divider></v-divider>-->

            <!--<v-slide-y-transition>-->
              <!--<v-card-text v-show="show">-->
                <!--<div class="title pb-1">Descripción</div>-->
                <!--<p>El usuario tiene que crearse una cuenta o iniciar sesión con su cuenta de Google.</p>-->
                <!--<p>La aplicación tiene como vista principal el mapa de la ciudad y tiene marcadores con los retos disponibles.</p>-->
                <!--<p>Hay diferentes tipos de retos, en algunos tienes que contestar preguntas sobre cosas de interés de la zona del reto, en otros deberás encontrar un código QR en la zona y escanearlo para completarlo.</p>-->
                <!--<p>La aplicación está preparada para varias ciudades, el usuario puede seleccionar en qué ciudad quiere participar y va acumulando puntos al superar los retos.</p>-->
              <!--</v-card-text>-->
            <!--</v-slide-y-transition>-->
          </v-card>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-layout>
  </span>
</template>

<script>
export default {

  data() {
    return {
      show: false,
      proyect: [
        {
          name: 'Hackathon Castellón',
          date: '2016',
          link: 'http://www.hackathoncastellon.com/',
          image: 'image/projects/hackathon1.png',
          images: [
            'image/projects/hackathon1.png',
            'image/projects/hackathon2.png',
            'image/projects/hackathon3.png',
            'image/projects/hackathon4.png',
            'image/projects/hackathon5.png',
          ],
          description: '<p>En el Hackathon de Castellón dispusimos de 48 horas para resolver uno de los 4 retos propuestos. Participamos un grupo de 5 compañeros de la carrera y el reto que elegimos consistió en <b>crear una aplicación</b> que ayudase al usuario a <b>conocer una ciudad de forma interactiva</b>. Para ello, desarrollamos una <b>aplicación multiplataforma</b> con nuevas tecnologías que no habíamos utilizado y de esta forma salir de nuestra zona de confort.</p>',
          technologies: '<p><b>Ionic 2</b>, <b>Angular 2</b>, Typescript, google maps and <b>Firebase</b>.</p>',
        },
        {
          name: 'Datathon Cajamar',
          date: '2017',
          link: 'https://datavizuji.firebaseapp.com/',
          image: 'image/projects/datathon.png',
          description: '<p>El objetivo del reto propuesto en el Datathon, era crear una aplicación para mostrar de forma interactiva los datos generados por las compras con tarjeta de crédito de los clientes de Cajamar desde la provincia de Valencia a comercios de la ciudad de Valencia.</p><p>El dataset original contenía el código postal del cliente y del comercio, el sector del comercio, la fecha de la transacción, la franja horaria, el importe y el número de operaciones realizadas. Para obtener mejor puntuación en el reto, era necesario añadir fuentes externas de datos, por lo tanto añadimos la climatología y la población por código postal de la provincia de Valencia.</p>',
          technologies: '<p><b>Tableau</b>, <b>Knime</b> and <b>Firebase</b>.</p>',
        },
      ],

      swiperOption1: {
        setWrapperSize: true,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      swiperOption2: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
    }
  },

}
</script>

<style scoped>
  .autoSizeImage {
    height: 300px;
    width: auto;
  }
</style>

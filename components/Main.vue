<template>
  <div class="positionRelative">
    <no-ssr>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.8"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="fullScreen positionAbsolute"
      >
      </vue-particles>
    </no-ssr>

    <v-container class="pointerNone">
      <v-layout justify-center row class="py-4">

        <v-flex xs12 sm10 md8 lg6 class="py-5">
          <v-card hover class="positionRelative pt-5">
            <v-avatar size="150" class="card-image-position">
              <img src="image/javier.png" alt="Javier">
            </v-avatar>

            <v-card-title primary-title>
              <v-spacer/>
              <h1 class="headline pt-2"><b>Vicente Javier González Llobet</b></h1>
              <v-spacer/>
            </v-card-title>

            <v-divider/>

            <v-card-title primary-title>
              <v-layout column>
                <h2 class="title pb-2"><b>Full Stack Web Developer</b></h2>
                <h2 class="title pb-2"><b><a class="black--text link-email" href="mailto:&#106;&#97;&#118;&#105;&#101;&#101;&#114;&#114;&#117;&#98;&#105;&#111;&#49;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#106;&#97;&#118;&#105;&#101;&#101;&#114;&#114;&#117;&#98;&#105;&#111;&#49;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a></b></h2>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-card class="pa-2">
        <v-layout align-center>

          <!-- Description -->
          <v-flex xs12 md6 class="pa-3 justifyText">
            <p>
              Bienvenidos, mi nombre es <b>Vicente Javier González Llobet</b> y soy <b>ingeniero informático</b> desde 2016 por la Universidad Jaume I.
            </p>
            <p>
              Estoy especializado en el desarrollo web como full stack developer. Sin embargo, me gusta ampliar mis horizontes constantemente. Un ejemplo de ello es el <b>Master en Sistemas Inteligentes</b> realizado en la Universidad Jaume I en el año 2017.
            </p>
            <p>
              En el trabajo me gusta escapar de mis zonas de comfort apostando siempre por nuevas tecnologías, metodologías y patrones dentro de la ingeniería del software. Mi principal premisa es que cada día sea un nuevo reto y de esta forma mejorar como profesional.
            </p>
          </v-flex>

          <v-divider vertical />

          <!-- Main skills -->
          <v-flex xs12 md6 class="pa-3">
            <v-layout row wrap justify-center class="pointerAuto">
              <v-layout align-center column class="pa-2" v-for="item in skills" :key="item.name">
                <v-tooltip bottom>
                  <v-progress-circular
                    :rotate="270"
                    :size="100"
                    :width="10"
                    :value="item.level * 20"
                    color="primary darken-2"
                    slot="activator"
                  >
                    <v-avatar size="90" color="white">
                      <img :src="item.image">
                    </v-avatar>
                  </v-progress-circular>
                  <span>{{item.name}}</span>
                </v-tooltip>

                <v-rating
                  v-model="item.level"
                  :full-icon="'code'"
                  :empty-icon="'code'"
                  :readonly="true"
                  color="primary darken-2"
                  background-color="grey"
                  size="17"
                  dense
                ></v-rating>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>
  </div>
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
      rating: 3,
    }
  },

  methods: {

  }

}
</script>

<style scope>
  .link-email {
    text-decoration: none;
  }

  .fullScreen {
    height: 120%;
    width: 100%;
  }

  .z5 {
    z-index: 5;
  }

  .card-image-position {
    position: absolute;
    top: -75px;
    left: calc(50% - 75px);
  }
</style>

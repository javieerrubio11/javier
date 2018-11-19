<template>
  <div class="positionRelative pb-0">
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

    <v-container class="pointerAuto pb-5">
      <v-layout justify-center row class="py-5">

        <v-flex xs12 sm10 md8 lg6 class="py-5">
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 16 : 4}`" class="positionRelative pt-5">
              <v-avatar size="150" class="card-image-position">
                <img src="image/javier.png" alt="Javier">
              </v-avatar>

              <v-card-title primary-title>
                <v-layout column align-center>
                  <h1 class="headline text-uppercase pt-4 primary--text text--darken-3"><b>Vicente Javier González Llobet</b></h1>
                  <h2 class="title text-uppercase pt-2 primary--text text--darken-2"><b>Full Stack Web Developer</b></h2>
                </v-layout>
              </v-card-title>

              <v-card-actions class="pt-4">
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn slot="activator" flat large color="primary darken-2" icon target="_blank" href="file/v-javier-gonzalez(cv-en).pdf">
                    <v-icon large>mdi-file-pdf</v-icon>
                  </v-btn>
                  <span>CV</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn slot="activator" flat large color="primary darken-2" icon @click="dialog = true">
                    <v-icon large>email</v-icon>
                  </v-btn>
                  <span>Email</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn slot="activator" flat large color="primary darken-2" icon target="_blank" href="https://github.com/javieerrubio11">
                    <v-icon large>mdi-github-circle</v-icon>
                  </v-btn>
                  <span>Github</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn slot="activator" flat large color="primary darken-2" icon target="_blank" href="https://www.linkedin.com/in/vicente-javier-gonz%C3%A1lez-llobet-89a771117/">
                    <v-icon large>mdi-linkedin</v-icon>
                  </v-btn>
                  <span>LinkedIn</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 16 : 4}`" class="pa-2 pointerAuto">
          <v-layout align-center :row="!xsOrSm" :column="xsOrSm">

            <!-- Description -->
            <v-flex xs12 md6 class="pa-3 subheading justifyText">
              <p>
                Welcome, my name is <b>Vicente Javier González Llobet</b> and I am a <b>computer engineer</b> since 2016 by the Universitat Jaume I.
              </p>
              <p>
                I'm specialized in web development as a full stack developer. However, I like to expand my limits constantly. An example of this is the <b>Master in Intelligent Systems</b> achieved at the Universitat Jaume I in 2017.
              </p>
              <p>
                At work I like to escape from my comfort zones always betting on new technologies, methodologies and patterns within software engineering. My main premise is that each day is a new challenge and in this way improve as a professional.
              </p>
            </v-flex>

            <v-divider vertical />

            <!-- Main skills -->
            <v-flex xs12 md6 class="pa-3">
              <v-layout row wrap justify-center>
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
                    color="primary darken-3"
                    background-color="grey"
                    size="20"
                    dense
                  ></v-rating>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-hover>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <div class="headline">Email</div>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-title>
            <div class="title pb-2"><b>&#106;&#97;&#118;&#105;&#101;&#101;&#114;&#114;&#117;&#98;&#105;&#111;&#49;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</b></div>
          </v-card-title>
        </v-card>
      </v-dialog>

    </v-container>

    <v-layout row wrap class="pt-5">
      <v-flex xs12 sm6 lg3 v-for="(item, index) in boxes" :key="index">
          <v-card flat :color="item.color" dark>
            <v-card-title class="pa-5">
              <v-layout align-center column>
                <div @mouseenter="item.over = true" @mouseleave="item.over = false">
                  <v-icon
                    :class="[ 'pa-3', (item.over) ? 'animated flip' : '']"
                    size="80"
                  >
                    {{item.icon}}
                  </v-icon>
                </div>

                <div class="pa-3 display-3 white--text">
                  {{item.text}}<ICountUp :duration="5" :endVal="returnStore(item.store)"/>
                </div>

                <v-divider/>

                <span class="pa-3">
                  <v-btn color="secondary" @click="$vuetify.goTo('#'+item.btnDirection, options);">
                    {{item.btnText}}
                  </v-btn>
                </span>
              </v-layout>
            </v-card-title>
          </v-card>
      </v-flex>
    </v-layout>

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
      boxes: [
        { store: 'experience', icon: 'work', color: 'blue darken-1', text: '+', btnText: 'View experience', btnDirection: 'section-3', over: false },
        { store: 'proyects', icon: 'code', color: 'light-blue darken-1', text: '', btnText: 'View proyects', btnDirection: 'section-5', over: false },
        { store: 'articles', icon: 'book', color: 'cyan darken-1', text: '', btnText: 'View articles', btnDirection: 'section-7', over: false },
        { store: 'skillsGlobal', icon: 'playlist_add_check', color: 'teal darken-1', text: '+', btnText: 'View skills', btnDirection: 'section-4', over: false },
      ],
      dialog: false,

      // Options scroll
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic',

      over: false,
    }
  },

  computed: {
    xsOrSm: function() { return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm },
    experience: function () { return this.$store.state.experiencie },
    skillsGlobal: function () { return this.$store.state.skills },
    proyects: function () { return this.$store.state.proyects },
    articles: function() { return this.$store.state.blog.list },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
  },

  methods: {
    returnStore: function(store) {
      if(!store)
        return null;
      return this[store].length
    },
  }

}
</script>

<style scope>
  .link-email {
    text-decoration: none;
  }

  .fullScreen {
    height: 110%;
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

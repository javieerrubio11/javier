<template>
  <span>
    <v-toolbar
      fixed
      :class="[(hoverToolbar || xsOrSm) ? 'primary darken-2' : 'transparent']"
      dark
      height="60"
      flat
      @mouseenter="hoverToolbar = true"
      @mouseleave="hoverToolbar = false"
      style="z-index: 10;"
    >

      <v-toolbar-side-icon class="hidden-md-and-up" @click="showMenu = true"></v-toolbar-side-icon>

      <v-toolbar-title>
        V. Javier González
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down" id="menu-header">
        <v-btn flat v-for="(item, index) in sections" :key="index" active-class @click="$vuetify.goTo('#'+item.anchor, options)">
          {{item.name}}
        </v-btn>
      </v-toolbar-items>

      <!-- <span class="px-1">
        <v-btn icon large target="_blank" href="https://github.com/javieerrubio11">
          <v-icon large>mdi-github-circle</v-icon>
        </v-btn>
      </span>
      <span class="px-1">
        <v-btn icon large target="_blank" href="https://www.linkedin.com/in/vicente-javier-gonz%C3%A1lez-llobet-89a771117/">
          <v-icon large>mdi-linkedin</v-icon>
        </v-btn>
      </span> -->

      <!-- <v-select
          v-model="locale"
          :items="locales"
          label="Language"
          solo-inverted
      ></v-select> -->

      <v-toolbar-items>
        <v-menu
          attach
          bottom
          left
          offset-y
        >
          <v-btn
            slot="activator"
            :aria-label="'locale'"
            flat
            style="min-width: 48px"
          >
            <v-img
              v-if="locale"
              :src="`image/locales/${locale}.png`"
              width="25px"
            />
          </v-btn>
          <v-list
            dense
            light
          >
            <v-list-tile
              v-for="(language, i) in locales"
              :key="i"
              avatar
              @click="setLocale(language.code)"
            >
              <v-list-tile-avatar
                tile
                size="24px"
              >
                <v-img
                  :src="`image/locales/${language.code}.png`"
                  width="25px"
                />
              </v-list-tile-avatar>
              <v-list-tile-title v-text="language.name"/>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="showMenu"
      fixed
      temporary
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="image/javier.png" alt="Javier">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>V. Javier González</v-list-tile-title>
            </v-list-tile-content>

            <v-icon @click="showMenu = false">close</v-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in sections"
          :key="item.anchor"
          @click="$vuetify.goTo('#'+item.anchor, options); showMenu = !showMenu;"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {

  data () {
    return {
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic',
      hoverToolbar: false,
      showMenu: false,
    }
  },

  computed: {
    sections: function () { return this.$store.state.sections },
    locales: function () { return this.$store.state.locales },
    locale: {
      get: function () {
        return this.$store.state.locale
      },
      set: function (newValue) {
        // Set locale
        this.setLocale(newValue)
      }
    },
    xsOrSm: function() { return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
  },

  methods: {
    setLocale(locale) {
      this.$store.commit('SET_LANG', locale)
      this._i18n.locale = locale
    },
  },

}
</script>

<style scope>
  .header-item {
    text-decoration: none;
    font-size: 15px;
  }
</style>

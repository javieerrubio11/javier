<template>
  <span>
    <v-toolbar
      fixed dark flat
      :class="[(hoverToolbar || xsOrSm) ? 'primary darken-2' : 'transparent']"
      height="60"
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

      <v-toolbar-items>
        <Locale/>
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
import Locale from '~/components/Locale.vue'

export default {
  components: {
    Locale
  },

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
    xsOrSm: function() { return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
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

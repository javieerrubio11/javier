<template>
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
        :title="locale | uppercaseText"
      >
        <v-img
          v-if="locale"
          :src="activeLocaleImg"
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
          <v-list-tile-title v-text="$t(language.name)"/>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  computed: {
    locales: function () { return this.$store.state.locales },
    locale: function () { return this.$store.state.locale },
    activeLocaleImg: function() { return 'image/locales/' + this.locale + '.png' },
  },

  methods: {
    setLocale(locale) {
      this.$store.commit('SET_LANG', locale)
      this._i18n.locale = locale
    },
  },

  filters: {
    uppercaseText: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }

}
</script>

<style scope>

</style>

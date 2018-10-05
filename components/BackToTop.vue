<template>
  <v-fab-transition>
    <v-btn
      color="secondary"
      dark
      fixed
      bottom
      right
      fab
      large
      flat
      @click="$vuetify.goTo(target, options)"
      v-scroll="onScroll"
      v-show="fab"
      class="positionButton"
    >
      <v-icon class="pt-3">keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {

  data () {
    return {
      target: 0,
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic',
      offsetTop: 0,
      fab: false,
    }
  },

  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
  },

  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

      this.fab = this.offsetTop > 300
    }
  }

}
</script>

<style scope>
  .positionButton {
    bottom: 74px !important;
  }
</style>

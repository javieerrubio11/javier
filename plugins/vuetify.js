import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
 theme: {
   primary: colors.lightBlue.base,
   secondary: colors.deepOrange.base,
   accent: colors.green.base,
 }
})

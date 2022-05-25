import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(vuex)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

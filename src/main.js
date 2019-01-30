import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import BuyModalomponent from '@/components/shared/BuyModal'

Vue.use(Vuetify)
Vue.component('appBuyModal', BuyModalomponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDh9KL6iamdOdYkPLimYE4FCYqpgsV7S5U',
      authDomain: 'ekzema-ads-project.firebaseapp.com',
      databaseURL: 'https://ekzema-ads-project.firebaseio.com',
      projectId: 'ekzema-ads-project',
      storageBucket: 'ekzema-ads-project.appspot.com',
      messagingSenderId: '610446979828'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})

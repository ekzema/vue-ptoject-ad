import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import ads from './ads'
import shared from './shared'
import orders from './orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    ads,
    shared,
    orders
  }
})

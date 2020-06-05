import Vue from 'vue'
import Vuex from 'vuex'
import homePageModule from '../modules/homePage/_store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $_homePage: homePageModule,
  },
})
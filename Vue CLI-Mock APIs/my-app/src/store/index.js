import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from '../modules/homePage/_store';
import personalModule from '../modules/personalPage/_store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $_homePage: homeModule,
    $_personalPage: personalModule,
  },
})
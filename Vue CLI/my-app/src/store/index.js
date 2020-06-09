import Vue from 'vue'
import Vuex from 'vuex'
import eventListPageModule from '../modules/eventListPage/_store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $_eventListPage: eventListPageModule,
  },
})
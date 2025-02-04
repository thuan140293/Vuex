import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from '../modules/homePage/_store';
import detailModule from '../modules/detailPage/_store';
import loginModule from '../modules/loginPage/_store';
import exampleModule from '../modules/examplePage/_store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $_homePage: homeModule,
    $_detailPage: detailModule,
    $_loginPage: loginModule,
    $_examplePage: exampleModule
  },
})
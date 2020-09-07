import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from '../modules/homePage/_store';
import personalModule from '../modules/personalPage/_store';
import formModule from '../modules/formPage/_store';
import editModule from '../modules/editForm/_store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $_homePage: homeModule,
    $_personalPage: personalModule,
    $_formPage: formModule,
    $_editForm: editModule
  },
})
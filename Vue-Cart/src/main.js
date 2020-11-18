// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store/index'
import vueConfig from '../vue.config'
import dotenv from 'dotenv'

Vue.use(Vuex)
Vue.use(ElementUI, { locale })
Vue.use(vueConfig)
dotenv.config()

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT;
console.log(process.env)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

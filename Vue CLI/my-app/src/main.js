import Vue from 'vue'
// import App from './App.vue'
import App from '../src/App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'
import router from "./router/routes";
import "@/assets/css/global.css"
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(ElementUI);

Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

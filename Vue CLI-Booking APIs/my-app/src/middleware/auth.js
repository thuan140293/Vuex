import Vue from 'vue';
import state from '../modules/logInPage/_store/index'
import store from '../store/index'

export default async function auth(next) {
  if (!localStorage.getItem('token') && !state.state.token) {
    return next('/login');
  }
  else if (localStorage.getItem('token') && !state.state.token) {
    await store.dispatch('$_logInPage/getCurrentUser');
    Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }
  else {
    return next();
  }
}

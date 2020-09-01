import Vue from 'vue';
import state from '../modules/loginPage/_store/index'

export default async function auth(to, from, next) {
    const token = localStorage.getItem('token');
    if (!token && !state.state.token) {
        return next('/login');
    }
    else if (token && !state.state.token) {
        Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        return next();
    }
}

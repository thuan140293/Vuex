import Vue from 'vue';

const LogIn = async (request) => {
  return Vue.prototype.$http.post('https://reqres.in/api/login', request);
}

export default {
    LogIn,
}
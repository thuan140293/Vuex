import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`https://reqres.in/api/users/${request}`);
}
  
export default {
    getById
}
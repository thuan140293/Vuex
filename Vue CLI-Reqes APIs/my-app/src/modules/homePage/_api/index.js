import Vue from 'vue';

const getData = async (currentPage) => {
    return Vue.prototype.$http.get(`https://reqres.in/api/users?page=${currentPage}`);
}
  
export default {
    getData
}
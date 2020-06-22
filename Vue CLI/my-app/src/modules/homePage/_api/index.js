import Vue from 'vue';

const getData = async (currentPage, pageSize) => {
  var query = { "page": currentPage, "total_pages": pageSize};
  return Vue.prototype.$http.get('https://reqres.in/api/users', query);
}

export default {
  getData
}
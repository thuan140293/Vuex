import Vue from 'vue';

const getData = async (currentPage, pageSize, title, isPublish) => {
  var query = { "PageIndex": currentPage, "PageSize": pageSize,"Title": title, "IsPublish": isPublish};
  return Vue.prototype.$http.post('https://localhost:3007/api/Blog/GetAll', query);
}

export default {
  getData
}
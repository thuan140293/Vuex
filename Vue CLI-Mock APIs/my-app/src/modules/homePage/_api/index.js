import Vue from 'vue';

const getData = async (pageIndex, limitPage, search, sortBy, sortDirection) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser?page=
    ${pageIndex}&limit=${limitPage}&search=${search}&sortBy=${sortBy}&order=${sortDirection}`);
}
  
export default {
    getData
}
import Vue from 'vue';

const getData = async (search, sortBy, sortDirection) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser?search=${search}&sortBy=${sortBy}&order=${sortDirection}`);
}
  
export default {
    getData,
}
import Vue from 'vue';

const getData = async (search, page, limit, sortBy, sortDirection) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser?search=${search}&page=${page}&limit=${limit}&sortBy=${sortBy}&order=${sortDirection}`);
}

const getDataNoPaging = async () => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser`);
}

const deleteData = async (request) => {
    return Vue.prototype.$http.delete(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request}`);
}
  
export default {
    getData,
    deleteData,
    getDataNoPaging
}
import Vue from 'vue';

const getData = async (search, page, limit, sortBy, sortDirection) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser?search=${search}&page=${page}&limit=${limit}&sortBy=${sortBy}&order=${sortDirection}`);
}

const getDataNoPaging = async (search) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser?search=${search}`);
}

const deleteData = async (request) => {
    return Vue.prototype.$http.delete(`${process.env.VUE_APP_API_ROOT}/listUser/${request}`);
}
  
export default {
    getData,
    deleteData,
    getDataNoPaging
}
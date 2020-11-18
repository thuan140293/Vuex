import Vue from 'vue';

const getData = async () => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/Products`);
}

const getById = async (request) =>{
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/Products/${request}`)
}

export default {
    getData,
    getById
}
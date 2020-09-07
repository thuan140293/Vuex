import Vue from 'vue';

const createData = async (request) => {
    return Vue.prototype.$http.post(`https://5efd8910dd373900160b321d.mockapi.io/listUser`, request);
}

export default {
    createData
}
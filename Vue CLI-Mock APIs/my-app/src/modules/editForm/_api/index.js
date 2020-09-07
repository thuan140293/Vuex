import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request}`);
}

const updateData = async (request) => {
    return Vue.prototype.$http.put(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request}`);
}

export default {
    getById,
    updateData
}
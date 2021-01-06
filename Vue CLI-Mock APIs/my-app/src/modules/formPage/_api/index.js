import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser/${request}`);
}

const createData = async (request) => {
    return Vue.prototype.$http.post(`${process.env.VUE_APP_API_ROOT}/listUser`, request);
}

const updateData = async (request) => {
    return Vue.prototype.$http.put(`${process.env.VUE_APP_API_ROOT}/listUser/${request.id}`, request.formData);
}

export default {
    createData,
    getById,
    updateData
}
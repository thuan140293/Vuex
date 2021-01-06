import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser/${request}`);
}

const createBlog = async (request) => {
    return Vue.prototype.$http.post(`${process.env.VUE_APP_API_ROOT}/listUser/${request.id}/blogs`, request.formData);
}

export default {
    getById,
    createBlog
}
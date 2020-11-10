import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request}`);
}

const createBlog = async (request) => {
    return Vue.prototype.$http.post(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request.id}/blogs`, request.formData);
}

export default {
    getById,
    createBlog
}
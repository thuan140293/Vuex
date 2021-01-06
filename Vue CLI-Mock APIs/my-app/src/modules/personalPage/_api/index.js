import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser/${request}`);
}

const getBlogList = async (request) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser/${request}/blogs`);
}

const deleteBlog = async (request) => {
    return Vue.prototype.$http.delete(`${process.env.VUE_APP_API_ROOT}/listUser/${request.parentId}/blogs/${request.id}`);
}

const getBlogDetail = async (request) => {
    return Vue.prototype.$http.get(`${process.env.VUE_APP_API_ROOT}/listUser/${request.parentId}/blogs/${request.id}`)
}

export default {
    getById,
    getBlogList,
    deleteBlog,
    getBlogDetail
}
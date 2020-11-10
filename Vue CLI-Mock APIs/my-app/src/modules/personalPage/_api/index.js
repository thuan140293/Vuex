import Vue from 'vue';

const getById = async (request) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request}`);
}

const getBlogList = async (request) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request}/blogs`);
}

const deleteBlog = async (request) => {
    return Vue.prototype.$http.delete(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request.parentId}/blogs/${request.id}`);
}

const getBlogDetail = async (request) => {
    return Vue.prototype.$http.get(`https://5efd8910dd373900160b321d.mockapi.io/listUser/${request.parentId}/blogs/${request.id}`)
}

export default {
    getById,
    getBlogList,
    deleteBlog,
    getBlogDetail
}
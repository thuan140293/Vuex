import api from '../_api/index';

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

const getBlogList = async (context, request) => {
  let response = await api.getBlogList(request);
  context.commit('SET_BLOG_LIST', response);
};

const deleteBlog = async (context, request) => {
  let response = await api.deleteBlog(request);
  return response;
};

export default {
  getById,
  getBlogList,
  deleteBlog
}
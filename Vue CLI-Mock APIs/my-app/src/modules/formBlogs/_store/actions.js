import api from '../_api/index';
// import _ from 'lodash'

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

const createBlog = async (context, request) => {
  let response = await api.createBlog(request);
  return response;
};

export default {
  getById,
  createBlog
}
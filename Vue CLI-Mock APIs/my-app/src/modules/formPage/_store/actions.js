import api from '../_api/index';
// import _ from 'lodash'

const createData = async (context, request) => {
  let response = await api.createData(request);
  return response;
};

const updateData = async (context, request) => {
  let response = await api.updateData(request);
  return response;
};

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

export default {
  createData,
  updateData,
  getById
}
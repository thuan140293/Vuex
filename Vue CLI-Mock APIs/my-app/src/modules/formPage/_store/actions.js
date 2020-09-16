import api from '../_api/index';
// import _ from 'lodash'

const createData = async (context, request) => {
  let response = request.id && request.id != '' ? await api.updateData(request.id) : await api.createData(request);
  return response;
};

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

export default {
  createData,
  getById
}
import api from '../_api/index';

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

const updateData = async (context, request) => {
  let response = await api.updateData(request);
  context.commit('UPDATE_DATA', response);
}

export default {
  getById,
  updateData
}
import api from '../_api/index';

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

const getEdit = async (request) => {
  let response = request.id && request.id != "" ? await api.editData(request) : await api.createData(request);
  return response;
};

export default {
  getById,
  getEdit
}
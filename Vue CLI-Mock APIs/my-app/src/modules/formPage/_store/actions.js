import api from '../_api/index';

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit('SET_DATA', response);
};

const createData = async (context, request) => {
  let response = await api.createData(request);
  context.commit('CREATE_DATA', response);
};

const editData = async (context, request) => {
  let response = await api.editData(request);
  context.commit('EDIT_DATA', response);
}

export default {
  getById,
  createData,
  editData
}
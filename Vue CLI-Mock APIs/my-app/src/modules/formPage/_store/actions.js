import api from '../_api/index';

const createData = async (context, request) => {
  let response = await api.createData(request);
  context.commit('CREATE_DATA', response);
};

export default {
  createData
}
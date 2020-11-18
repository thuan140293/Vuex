import api from '../_api/index';

const getData = async (context, request) => {
  let response = await api.getData(request);
  context.commit("SET_DATA", response);
};

const getById = async (context, request) => {
  let response = await api.getById(request);
  context.commit("SET_BY_ID", response);
};

export default {
  getData,
  getById
}
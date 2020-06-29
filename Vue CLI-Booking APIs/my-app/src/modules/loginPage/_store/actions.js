import api from '../_api/index';

const LogIn = async (context, request) => {
  let response = await api.LogIn(request);
  context.commit('SET_TOKEN', response.data);
};

const decodeToken = async (request) => {
  let response = await api.decodeToken(request);
  return response;
};

const GetNotAuthorazation = async (request) => {
  let response = await api.GetNotAuthorazation(request);
  return response.data;
};

const getById = async (request) => {
  let response = await api.getById(request);
  return response.data;
};

const getCurrentUser = async (context) => {
  var decodeToken = await context.dispatch("decodeToken", localStorage.getItem('token'));
  var user = await context.dispatch("GetNotAuthorazation", decodeToken.data);
  context.commit('SET_TOKEN', { token: localStorage.getItem('token'), user: user.data });
};

export default{
    LogIn,
    decodeToken,
    GetNotAuthorazation,
    getById,
    getCurrentUser
}
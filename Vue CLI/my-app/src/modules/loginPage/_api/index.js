import Vue from 'vue';

const LogIn = async (request) => {
  return Vue.prototype.$http.post('https://localhost:3007/api/User/Login', request);
}

const GetNotAuthorazation = async (request) => {
  return Vue.prototype.$http.get(`https://localhost:3007/api/User/GetNotAuthorazation/${request}`);
}

const decodeToken = async (request) => {
  return Vue.prototype.$http.get(`https://localhost:3007/api/User/GetTokenClaims/${request }`);
}

const getById = async (request) => {
  return Vue.prototype.$http.get(`https://localhost:3007/api/User/Get/${request}`);
}

export default {
    LogIn,
    GetNotAuthorazation,
    getById,
    decodeToken
}
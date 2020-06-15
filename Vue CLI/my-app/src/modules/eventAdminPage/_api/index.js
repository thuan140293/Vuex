import Vue from 'vue';

const CreateEvent = async (request) => {
  return Vue.prototype.$http.post(`https://localhost:3007/api/Event/Create`, request);
}

const UpdateEvent = async (request) => {
  return Vue.prototype.$http.post(`https://localhost:3007/api/Event/Update`, request);
}

const getById = async (request) => {
  return Vue.prototype.$http.get(`https://localhost:3007/api/Event/Get/${request}`);
}

export default {
  CreateEvent,
  UpdateEvent,
  getById
}
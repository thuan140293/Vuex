import api from '../_api/index';

const editEvent = async (request) => {
  let response = request.Id && request.Id != "" ? await api.UpdateEvent(request) : await api.CreateEvent(request);
  return response;
};

const getById = async (request) => {
  let response = await api.getById(request);
  return response.data;
};


export default {
  editEvent,
  getById
}
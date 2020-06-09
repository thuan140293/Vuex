import api from '../_api/index';

const getData = async (context) => {
  let response = await api.getData(context.state.searchRequest.currentPage, context.state.searchRequest.pageSize, context.state.searchRequest.title, context.state.searchRequest.isPublish);
  context.commit('SET_DATA', response.data.data);
};

const setTitle = async (context, request) => {
  context.commit('SET_TITLE', request);
};

const setPublish = async (context, request) => {
  context.commit('SET_PUBLISH', request);
};


export default {
  getData,
  setTitle,
  setPublish
}

import api from '../_api/index';

const getData = async (context) => {
  let response = await api.getData(context.state.searchRequest.currentPage, context.state.searchRequest.pageSize);
  context.commit('SET_DATA', response.data);
};


export default {
  getData
}
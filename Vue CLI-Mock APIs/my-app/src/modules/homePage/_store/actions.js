import api from '../_api/index';

const getData = async (context) => {
  let response = await api.getData(context.state.pageIndex, context.state.limitPage, context.state.search, context.state.sortBy, context.state.sortDirection);
  context.commit('SET_DATA', response);
};

const setSearch = async (context, request) => {
  context.commit('SET_SEARCH', request);
};

const setOrderDirection = async (context, request) => {
  context.commit('SET_ORDER_DIRECTION', request)
};

const setOrderBy = async (context, request) => {
  context.commit('SET_ORDERBY', request);
};


export default {
  getData,
  setSearch,
  setOrderDirection,
  setOrderBy
}
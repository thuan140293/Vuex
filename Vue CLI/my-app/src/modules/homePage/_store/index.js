import actions from '../_store/actions';
import getters from '../_store/getters';
import mutations from '../_store/mutations';

const state = {
  data: null,
  total: null,
  searchRequest: {
    currentPage: 1,
    pageSize: 2,
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

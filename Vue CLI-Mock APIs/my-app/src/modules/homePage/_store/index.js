import actions from '../_store/actions';
import getters from '../_store/getters';
import mutations from '../_store/mutations';

const state = {
  data: null,
  pageIndex: 1,
  limitPage:5,
  total: 20,
  search: "",
  sortBy: '',
	sortDirection: 'asc',
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

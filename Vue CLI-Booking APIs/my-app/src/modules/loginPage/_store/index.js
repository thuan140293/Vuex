import actions from '../_store/actions';
import getters from '../_store/getters';
import mutations from '../_store/mutations';

const state = {
  data: null,
  token: null,
  currentUser: null,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

import _ from 'lodash'

const currentUser = (state) => {
  var data = null;
  if (state.currentUser) {
    data = _.cloneDeep(state.currentUser);
  }
  return data;
};

export default {
  currentUser
};
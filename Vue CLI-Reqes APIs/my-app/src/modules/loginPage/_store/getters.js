// import _ from 'lodash'

const currentUser = (state) => {
  var data = null;
  if (state.currentUser) {
    data = state.currentUser;
    data = JSON.parse("[" + data + "]");
    data = data.map(x => x.email).toString();
  }
  return data;
};

export default {
  currentUser
};
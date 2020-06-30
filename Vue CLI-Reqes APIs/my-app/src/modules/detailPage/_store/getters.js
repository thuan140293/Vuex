// import _ from 'lodash'

const getById = (state) => {
  var data = {};
  if (state.data) {
    data = state.data
  }
  return data;
};

export default {
    getById
};

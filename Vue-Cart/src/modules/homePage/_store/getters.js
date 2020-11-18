import _ from 'lodash'

const getData = (state) => {
  var data = {};
  if (state.data) {
    data = _.map(state.data, (v) => {
      return v;
    });
  }
  return data;
};

const getById = (state) => {
  var data = {};
  if (state.dataDetail) {
    data = _.cloneDeep(state.dataDetail);
  }
  return data;
};

export default {
  getData,
  getById
};

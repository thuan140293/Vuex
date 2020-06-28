import _ from 'lodash'

const getData = (state) => {
  var data = {};
  if (state.data) {
    data = _.map(state.data, (v) => {
      return v;
    });
    data = _.filter(data, (o) => { return !o.isDelete });
    data.total = state.total;
    data.data = data;
  }
  return data;
};

export default {
  getData
};

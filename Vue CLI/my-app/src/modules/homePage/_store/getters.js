import _ from 'lodash'

const getData = (state) => {
  if (state.data) {
    var data = _.map(state.data, (v) => {
      // v.Content = v.Content ? commonFunc.shorten(v.Content, 40) : '';
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

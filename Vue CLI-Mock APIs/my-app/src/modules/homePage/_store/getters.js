import _ from 'lodash'

const getData = (state) => {
  var data = {};
  if (state.data) {
    data = _.map(state.data, (v) => {
      return v;
    });
    data = _.filter(data, (o) => { return !o.isDelete });
    data.data = data;
  }
  return data;
};

// const getSortBy = (state) => {
//   return state.sortBy;
// };

// const getSortDirection = (state) => {
//   return state.sortDirection;
// };

export default {
  getData,
  // getSortBy,
  // getSortDirection
};

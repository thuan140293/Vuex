import _ from 'lodash'

const getById = (state) => {
  var data = {};
  if (state.data) {
    data = _.cloneDeep(state.data)
  }
  return data;
};

const getBlogList = (state) => {
  var data = {};
  if (state.blogs) {
    data = _.map(state.blogs, (v) => {
      return v;
    });
    data = _.filter(data, (o) => { return !o.isDelete });
    data.data = data;
  }
  return data;
};

export default {
  getById,
  getBlogList
};

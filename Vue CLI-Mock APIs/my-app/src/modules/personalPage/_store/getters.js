import _ from 'lodash'
import moment from 'moment'

const getById = (state) => {
  var data = {};
  if (state.data) {
    data = _.cloneDeep(state.data);
  }
  return data;
};

const getBlogList = (state) => {
  var data = {};
  if (state.blogs) {
    data = _.map(state.blogs, (v) => {
      v.formatCreatedAt = v.createdAt ? moment(v.createdAt, "YYYY/MM/DD").format("DD/MM/YYYY") : '';
      return v;
    });
    data = _.filter(data, (o) => { return !o.isDelete });
    data.data = data;
  }
  return data;
};

const getBlogDetail = (state) => {
  var data = {};
  if (state.blogDetail) {
    data = _.cloneDeep(state.blogDetail);
  }
  return data;
};

export default {
  getById,
  getBlogList,
  getBlogDetail
};

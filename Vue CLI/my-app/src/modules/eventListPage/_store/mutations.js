const SET_DATA = (state, messages) => {
  state.data = messages.Data;
  state.total = messages.Total;
};

const SET_TITLE = (state, messages) => {
  state.searchRequest.title = messages
};

const SET_PUBLISH = (state, messages) => {
  state.searchRequest.isPublish = messages
};

export default {
  SET_DATA,
  SET_TITLE,
  SET_PUBLISH
}

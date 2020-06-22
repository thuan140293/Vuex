const SET_DATA = (state, messages) => {
  state.data = messages.data;
  state.total = messages.total;
  console.log(messages)
};
  
export default {
  SET_DATA
}
const SET_DATA = (state, messages) => {
    state.data = messages.data;
    state.total = messages.total;
    state.perPage = messages.per_page;
};

export default{
    SET_DATA
}

const SET_DATA = (state, messages) => {
    state.data = messages.data;
};

const UPDATE_DATA = (state, messages) => {
    state.data = messages.data
}

export default{
    SET_DATA,
    UPDATE_DATA
}

const SET_DATA = (state, messages) => {
    state.data = messages.data;
};

const CREATE_DATA = (state, messages) => {
    state.data = messages
}

const UPDATE_DATA = (state, messages) => {
    state.data = messages
}

export default{
    SET_DATA,
    CREATE_DATA,
    UPDATE_DATA
}

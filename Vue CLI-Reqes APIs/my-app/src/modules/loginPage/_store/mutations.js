const SET_TOKEN = (state, messages) => {
    state.token = messages.data.token;
    state.currentUser = messages.config.data
    localStorage.setItem("token", state.token);
};

const REMOVE_TOKEN = (state) => {
    localStorage.removeItem("token");
    state.token = null;
    state.currentUser = null;
};

export default{
    SET_TOKEN,
    REMOVE_TOKEN
}
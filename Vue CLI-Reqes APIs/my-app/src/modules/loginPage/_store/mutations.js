const SET_TOKEN = (state, messages) => {
    state.token = messages.data.token;
    localStorage.setItem("token", state.token);
};

const REMOVE_TOKEN = (state) => {
    localStorage.removeItem("token");
    state.token = null;
};

export default{
    SET_TOKEN,
    REMOVE_TOKEN
}
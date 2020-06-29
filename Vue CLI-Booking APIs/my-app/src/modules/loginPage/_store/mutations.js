const SET_TOKEN = (state, messages) => {
    state.token = messages.token;
    state.currentUser = messages.user;
    localStorage.setItem("token", state.token);
    console.log(messages)
};

export default{
    SET_TOKEN
}
const SET_DATA = (state, messages) => {
    state.data = messages.data;
};

const SET_BLOG_LIST = (state, messages) => {
    state.blogs = messages.data;
};

export default{
    SET_DATA,
    SET_BLOG_LIST
}

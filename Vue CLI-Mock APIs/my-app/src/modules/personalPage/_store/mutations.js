const SET_DATA = (state, messages) => {
    state.data = messages.data;
};

const SET_BLOG_LIST = (state, messages) => {
    state.blogs = messages.data;
};

const SET_BLOG_DETAIL = (state, messages) => {
    state.blogDetail = messages.data;
};

export default{
    SET_DATA,
    SET_BLOG_LIST,
    SET_BLOG_DETAIL
}

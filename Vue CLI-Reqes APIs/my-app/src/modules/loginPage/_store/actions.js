import api from '../_api/index';

const LogIn = async (context, request) => {
  let response = await api.LogIn(request);
  context.commit('SET_TOKEN', response);
}

const SignOut = async (context) => {
  await context.commit('REMOVE_TOKEN');
};

export default{
    LogIn,
    SignOut
}
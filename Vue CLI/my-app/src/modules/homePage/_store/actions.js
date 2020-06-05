import axios from "axios";

const getData = (context) => {
  axios.get('https://reqres.in/api/users').then( response => {
      context.commit('SET_DATA', response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export default {
  getData
}

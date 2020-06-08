import axios from "axios";

const getData = (context, currentPage, pageSize, pageTotal) => {
  var query = { "page": currentPage, "total_pages": pageSize, "total": pageTotal };
  axios.get('https://reqres.in/api/users', query).then( response => {
      context.commit('SET_DATA', response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export default {
  getData
}

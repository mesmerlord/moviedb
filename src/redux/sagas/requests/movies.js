import axios from "axios";

export const requestGetMovies = (query) => {
  if (query) {
    return axios
      .get(
        `https://omdbapi.com/?apikey=57446276&s=${query.query}&page=${query.page}`
      )
      .then(function (res) {
        return res.data.Search;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

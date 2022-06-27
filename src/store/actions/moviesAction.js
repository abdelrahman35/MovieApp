import axiosInstance from "./../../network/axiosInstance";

const getMoviesArray = (params) => (dispatch) => {
  return params.query.length === 0
    ? axiosInstance
        .get("/movie/top_rated", { params })
        .then((response) =>
          dispatch({
            type: "GET_MOVIES_ARRAY",
            payload: response.data,
          })
        )
        .catch((error) => console.log(error))
    : axiosInstance
        .get("/search/movie", { params })
        .then((response) =>
          dispatch({
            type: "GET_MOVIES_ARRAY",
            payload: response.data,
          })
        )
        .catch((error) => console.log(error));
};

export default getMoviesArray;

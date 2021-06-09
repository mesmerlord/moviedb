export const GET_MOVIES = "GET_MOVIES";
export const SET_MOVIES = "SET_MOVIES";

export const getMovies = (value) => ({
  type: GET_MOVIES,
  payload: value,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

const initialState = {
  movies: [],
  favorites: localStorage.getItem("favoriteMovies") || [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      const { movies } = action;
      return { ...state, movies: movies };

    default:
      return state;
  }
};

export const GET_MOVIES = "GET_MOVIES";
export const SET_MOVIES = "SET_MOVIES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const getMovies = (value) => ({
  type: GET_MOVIES,
  payload: value,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});
export const changePage = (value) => ({
  type: CHANGE_PAGE,
  payload: value,
});

export const addMovies = (movies) => ({
  type: ADD_MOVIES,
  movies,
});

export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite = (movie) => ({
  type: REMOVE_FAVORITE,
  payload: movie,
});

const initialState = {
  movies: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      const { movies } = action;

      return { ...state, movies: movies };
    case ADD_MOVIES:
      const { allmovies } = action;
      console.log(allmovies);
      console.log(state);

      return { ...state, movies: [].concat(state.movies, action.movies) };
    case ADD_FAVORITE:
      console.log(state.favorites);
      const localStore = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : "";
      if (localStore) {
        const newData = [].concat(
          action.payload,
          state.favorites.filter((val) => val.id !== action.payload.id)
        );
        localStorage.setItem("favorites", JSON.stringify(newData));
      } else {
        localStorage.setItem("favorites", JSON.stringify([action.payload]));
      }
      return {
        ...state,
        favorites: [].concat(
          action.payload,
          state.favorites.filter((val) => val.id !== action.payload.id)
        ),
      };
    case REMOVE_FAVORITE:
      const localStore1 = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : "";
      if (localStore1) {
        const newData1 = localStore1.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("favorites", JSON.stringify(newData1));
      }

      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

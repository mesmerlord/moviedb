import { takeLatest } from "redux-saga/effects";
import { handleGetMovies } from "./handlers/movies";
import { handleChangePage } from "./handlers/pages";
import { GET_MOVIES, CHANGE_PAGE } from "../movies/movies";

export function* watcherSaga() {
  yield takeLatest(GET_MOVIES, handleGetMovies);
  yield takeLatest(CHANGE_PAGE, handleChangePage);
}

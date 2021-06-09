import { takeLatest } from "redux-saga/effects";
import { handleGetMovies } from "./handlers/movies";

import { GET_MOVIES } from "../movies/movies";

export function* watcherSaga() {
  yield takeLatest(GET_MOVIES, handleGetMovies);
}

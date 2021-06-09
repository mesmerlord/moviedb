import { call, put } from "redux-saga/effects";
import { setMovies } from "../../movies/movies";
import { requestGetMovies } from "../requests/movies";

export function* handleGetMovies(action) {
  try {
    console.log(action.payload);
    const response = yield call(requestGetMovies, action.payload);
    yield put(setMovies(response));
  } catch (err) {
    console.log(err);
  }
}

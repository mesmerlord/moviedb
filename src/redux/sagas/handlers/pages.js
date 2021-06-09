import { call, put } from "redux-saga/effects";
import { addMovies } from "../../movies/movies";
import { requestGetMovies } from "../requests/movies";

export function* handleChangePage(action) {
  try {
    console.log(action.payload);
    const response = yield call(requestGetMovies, action.payload);

    yield put(addMovies(response));
  } catch (err) {
    console.log(err);
  }
}

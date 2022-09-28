import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { createUserSaga, getUsersSaga, getUserSaga } from "./userSagas";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUserSaga);
}

export default rootSaga;

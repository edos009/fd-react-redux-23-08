import { put } from "redux-saga/effects";
import * as API from "../api";

import * as ActionUser from "../actions/actionsUser";

export function* createUserSaga(action) {
  try {
    const {
      data: {
        data: [user],
      },
    } = yield API.createUser(action.values);
    yield put(ActionUser.createUserSuccess(user));
  } catch (error) {
    yield put(ActionUser.createUserError({ error }));
  }
}

export function* getUsersSaga(action) {
  try {
    const {
      data: { data: users },
    } = yield API.getUsers(action.payload);
    yield put(ActionUser.getUsersSuccess({ users }));
  } catch (error) {
    yield put(ActionUser.getUsersError({ error }));
  }
}

export function* getUserSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield API.getUser(action.payload);
    yield put(ActionUser.getUserSuccess({ user }));
  } catch (error) {
    yield put(ActionUser.getUserError({ error }));
  }
}

import ACTION_TYPES from "./actionTypes";

export const createUserRequest = (values) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  values,
});

export const createUserSuccess = (values) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  values,
});

export const createUserError = (error) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error,
});

export const getUsersRequest = ({ limit, offset }) => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
  payload: { limit, offset },
});

export const getUsersSuccess = ({ users }) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersError = ({ error }) => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  payload: { error },
});

export const getUserRequest = ({ userId }) => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
  payload: { userId },
});

export const getUserSuccess = ({ user }) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  payload: { user },
});

export const getUserError = ({ error }) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  payload: { error },
});

// export const setSelectedUser = ({ user }) => ({
//   type: ACTION_TYPES.SET_SELECTED_USER,
//   payload: { user },
// });

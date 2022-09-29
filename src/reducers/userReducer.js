import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  users: [],
  error: null,
  selectedUser: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }

    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { values: user } = action;
      return {
        ...state,
        users: [...state.users, user],
        isFetching: false,
        error: null,
      };
    }

    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return { ...state, error, isFetching: false };
    }

    case ACTION_TYPES.GET_USERS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }

    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const {
        payload: { users },
      } = action;
      return {
        ...state,
        isFetching: false,
        users: [...state.users, ...users],
        error: null,
      };
    }

    case ACTION_TYPES.GET_USERS_ERROR: {
      const {
        payload: { error },
      } = action;
      return { ...state, isFetching: false, error };
    }

    case ACTION_TYPES.GET_USER_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }

    case ACTION_TYPES.GET_USER_SUCCESS: {
      const {
        payload: { user },
      } = action;
      return {
        ...state,
        selectedUser: user,
        users: [],
        isFetching: false,
        error: null,
      };
    }

    case ACTION_TYPES.GET_USER_ERROR: {
      const {
        payload: { error },
      } = action;
      return { ...state, isFetching: false, error };
    }

    default:
      return state;
  }
};

export default userReducer;

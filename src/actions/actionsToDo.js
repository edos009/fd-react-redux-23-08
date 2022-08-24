import ACTION_TYPES from "./actionTypes";

export const createTask = (values) => ({
  type: ACTION_TYPES.CREATED_TASK,
  values,
});

export const updateTask = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  id,
  values,
});

export const deleteTask = (id) => ({ type: ACTION_TYPES.DELETE_TASK, id });

export const setFilterTask = (nameFilter) => ({
  type: ACTION_TYPES.SET_FILTER_TASK,
  nameFilter,
});

export const setEditDataTask = (dataET) => ({
  type: ACTION_TYPES.SET_EDIT_DATA_TASK,
  dataET,
});

export const saveDataTask = (body) => ({
  type: ACTION_TYPES.SAVE_EDIT_TASK,
  body,
});

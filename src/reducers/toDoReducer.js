import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: [],
  filter: "All",
  dataEditTask: { idET: null, bodyET: "" },
};

function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATED_TASK: {
      const { tasks } = state;
      const { values } = action;

      return {
        ...state,
        tasks: [...tasks, { ...values, id: Date.now() }],
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { tasks } = state;
      const { values, id } = action;

      const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, ...values } : task
      );

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;

      const newTasks = tasks.filter((task) => task.id !== id);

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.SET_FILTER_TASK: {
      const { nameFilter } = action;
      return {
        ...state,
        filter: nameFilter,
      };
    }
    case ACTION_TYPES.SET_EDIT_DATA_TASK: {
      const { dataET } = action.dataET;
      return {
        ...state,
        dataEditTask: { ...dataET },
      };
    }
    case ACTION_TYPES.SAVE_EDIT_TASK: {
      const {
        tasks,
        dataEditTask: { idET },
      } = state;
      const { body } = action;

      return {
        ...state,
        tasks: tasks.map((task) =>
          task.id === idET ? { ...task, body } : { ...task }
        ),
        dataEditTask: { idET: null, bodyET: "" },
      };
    }

    default:
      return state;
  }
}

export default toDoReducer;

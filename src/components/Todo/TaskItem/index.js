import React from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  setEditDataTask,
  updateTask,
} from "../../../actions/actionsToDo";

const TaskItem = (props) => {
  const {
    task: { id, body, isDone },
    deleteTaskDispatch,
    updateTaskDispatch,
    setEditDataTaskDispatch,
  } = props;

  return (
    <li>
      <p style={{ color: isDone ? "red" : "teal" }}>{body}</p>
      <input
        type="checkbox"
        checked={isDone}
        onChange={({ target: { checked } }) =>
          updateTaskDispatch({ id, values: { isDone: checked } })
        }
      />
      <button
        onClick={() =>
          setEditDataTaskDispatch({ dataET: { idET: id, bodyET: body } })
        }
      >
        Edit
      </button>
      <button onClick={() => deleteTaskDispatch(id)}>X</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTaskDispatch: (id) => dispatch(deleteTask(id)),
  updateTaskDispatch: ({ id, values }) => dispatch(updateTask({ id, values })),
  setEditDataTaskDispatch: (dataET) => dispatch(setEditDataTask(dataET)),
});

export default connect(null, mapDispatchToProps)(TaskItem);

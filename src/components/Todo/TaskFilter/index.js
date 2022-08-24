import React from "react";
import { connect } from "react-redux";
import { setFilterTask } from "../../../actions/actionsToDo";

const options = ["All", "Done", "Not done"];

const TaskFilter = (props) => {
  const { filter, setFilterTaskDispatch } = props;

  const showOptions = (option) => (
    <option key={option} value={option}>
      {option}
    </option>
  );

  return (
    <select
      value={filter}
      onChange={({ target: { value } }) => setFilterTaskDispatch(value)}
    >
      {options.map(showOptions)}
    </select>
  );
};

const mapStateToProps = ({ todo }) => todo;

const mapDispatchToProps = (dispatch) => ({
  setFilterTaskDispatch: (nameFilter) => dispatch(setFilterTask(nameFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);

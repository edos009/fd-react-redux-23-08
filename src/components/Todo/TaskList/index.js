import React from "react";
import { connect } from "react-redux";
import TaskItem from "../TaskItem";

const TaskList = (props) => {
  const { tasks, filter } = props;

  const showTaskList = (task) => <TaskItem key={task.id} task={task} />;

  return (
    <>
      <ul>
        {filter === "All"
          ? tasks.map(showTaskList)
          : filter === "Done"
          ? tasks.filter((task) => task.isDone).map(showTaskList)
          : tasks.filter((task) => !task.isDone).map(showTaskList)}
      </ul>
    </>
  );
};

const mapStateToProps = ({ todo }) => todo;

export default connect(mapStateToProps)(TaskList);

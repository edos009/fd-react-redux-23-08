import React from 'react';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Todo = (props) => {
  return (
    <section>
      <TaskForm/>
      <TaskFilter/>
      <TaskList/>
    </section>
  );
}

export default Todo;

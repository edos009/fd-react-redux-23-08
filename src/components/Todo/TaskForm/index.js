import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { createTask, saveDataTask } from "../../../actions/actionsToDo";

import FormikForm from "../FormicForm";

const TaskForm = (props) => {
  const {
    dataEditTask: { idET, bodyET },
    createTaskDispatch,
    saveDataTaskDispatch,
  } = props;

  const addTask = (values, form) => {
    createTaskDispatch(values);
    form.resetForm();
  };

  const saveEditTask = ({ body }, form) => {
    saveDataTaskDispatch(body);
    form.resetForm();
  };

  const schema_task_validate = yup.object({
    body: yup.string().min(3).max(100).required(),
  });

  return (
    <Formik
      initialValues={{ body: "", isDone: false }}
      onSubmit={idET ? saveEditTask : addTask}
      validateOnChange={schema_task_validate}
    >
      {(formikProps) => (
        <FormikForm idET={idET} bodyET={bodyET} {...formikProps} />
      )}
    </Formik>
  );
};

const mapStateToProps = ({ todo }) => todo;

const mapDispatchToProps = (dispatch) => {
  return {
    createTaskDispatch: (values) => dispatch(createTask(values)),
    saveDataTaskDispatch: (body) => dispatch(saveDataTask(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

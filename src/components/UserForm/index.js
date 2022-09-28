import { Formik, Form, Field } from "formik";
import React from "react";
import { connect } from "react-redux";
import { createUserRequest } from "../../actions/actionsUser";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  isMale: true,
};

const UserForm = (props) => {
  const { createUserRequestDispatch } = props;

  const onSubmit = (values, formikBag) => {
    createUserRequestDispatch(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="firstName" placeholder="Enter your first name..." />
        <Field name="lastName" placeholder="Enter your last name..." />
        <Field name="email" placeholder="Enter your email..." />
        <Field name="password" placeholder="Enter your password..." />
        <Field name="birthday" placeholder="Enter your date birthday..." />
        <Field type="checkbox" name="isMale" /> isMale
        <input type="submit" value="Send" />
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUserRequestDispatch: (values) => dispatch(createUserRequest(values)),
});

export default connect(null, mapDispatchToProps)(UserForm);

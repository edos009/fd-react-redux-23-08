import React, { useEffect } from "react";
import { Form, Field, ErrorMessage } from "formik";

const FormikForm = (props) => {
  const { idET, bodyET, setValues } = props;

  useEffect(() => {
    if (idET) {
      setValues({ body: bodyET });
    }
    // eslint-disable-next-line
  }, [idET]);

  return (
    <Form>
      {idET ? (
        <>
          <Field name="body" />
          <ErrorMessage name="body" component="div" />
          <input type="submit" value="save" />
        </>
      ) : (
        <>
          <Field name="body" placeholder="Enter your task..." />
          <ErrorMessage name="body" component="div" />
          <input type="submit" value="Add" />
        </>
      )}
    </Form>
  );
};

export default FormikForm;

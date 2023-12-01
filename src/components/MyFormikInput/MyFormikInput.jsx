import React from "react";
import { useField } from "formik";
import { Input, Form } from 'antd';

const MyFormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : null}
    >
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input {...field} {...props} />
    </Form.Item>
  );
};

export default MyFormikInput;

import React, { useContext, useState } from "react";
import { Modal, Button, Space, message } from "antd";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
import MyFormikInput from "../MyFormikInput/MyFormikInput";
import styles from "./RegistrationModal.module.css";
import { Formik, Form, ErrorMessage } from "formik";
import Loader from "./Loader";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[^a-zA-Z])/,
      "Password must contain at least 1 capital letter and 1 non-letter character"
    )
    .required("Required"),
});

const RegistrationModal = ({ isOpen, onClose }) => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (values) => {
    setLoading(true);

    // Симуляція асинхронного процесу реєстрації
    await new Promise((resolve) => setTimeout(resolve, 2000));

    auth.handleLogin(values.email, values.password);
    onClose();

    setLoading(false);
  };

  return (
    <Modal title="Реєстрація" visible={isOpen} onCancel={onClose} footer={null}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={handleRegistration}
      >
        <Form>
          <div className={styles.formContainer}>
            <MyFormikInput
              label="E-mail"
              name="email"
              type="email"
              placeholder="Введіть ваш e-mail"
            />

            <MyFormikInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="Введіть ваш пароль"
            />

            <div className={styles.buttonContainer}>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.button}
                  disabled={loading}
                >
                  {loading ? <Loader /> : "Зареєструватися"}
                </Button>
                <Button onClick={onClose}>Скасувати</Button>
              </Space>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default RegistrationModal;

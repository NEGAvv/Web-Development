import React, { useContext, useState } from "react";
import { Modal, Button, Space, message } from "antd";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
import MyFormikInput from "../MyFormikInput/MyFormikInput";
import styles from "./RegistrationModal.module.css";
import { Formik, Form, ErrorMessage } from "formik";
import Loader from "./Loader";

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
            <ErrorMessage name="email" component="div" />

            <MyFormikInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="Введіть ваш пароль"
            />
            <ErrorMessage name="password" component="div" />

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

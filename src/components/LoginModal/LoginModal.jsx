import React, { useContext, useState } from "react";
import { Modal, Input, Button, Space } from "antd";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
import styles from "./LoginModal.module.css";
import Loader from "./Loader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyFormikInput from "../MyFormikInput/MyFormikInput";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

// Прибрати це

const LoginModal = ({ isOpen, onClose }) => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("auth.auth:");
    console.log(!auth.auth);

    auth.handleLogin(values.email, values.password);
    console.log("auth.auth:");
    console.log(!auth.auth);

    if (!auth.auth) {
      // User not found, open registration modal
      console.log("opened registration");
      onClose();
      setRegistrationModalOpen(true);
    } else {
      console.log("closed registration");
      onClose();
    }
    setLoading(false);
  };

  return (
    <>
      <Modal title="Увійти" visible={isOpen} onCancel={onClose} footer={null}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
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
                    {loading ? <Loader /> : "Увійти"}
                  </Button>
                  <Button onClick={onClose}>Скасувати</Button>
                </Space>
              </div>
            </div>
          </Form>
        </Formik>
      </Modal>
      {registrationModalOpen && (
        <RegistrationModal
          isOpen={registrationModalOpen}
          onClose={() => setRegistrationModalOpen(false)}
        />
      )}
    </>
  );
};

export default LoginModal;

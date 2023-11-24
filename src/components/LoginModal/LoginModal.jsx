import React, { useContext, useState } from "react";
import { Modal, Form, Input, Button, Space } from "antd";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
import styles from "./LoginModal.module.css";
import Loader from "./Loader";

const LoginModal = ({ isOpen, onClose }) => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);

    // Симуляція асинхронного запиту аутентифікації
    await new Promise((resolve) => setTimeout(resolve, 2000));

    auth.handleLogin(values.email, values.password);
    onClose();
    setLoading(false);
  };

  return (
    <Modal title="Увійти" visible={isOpen} onCancel={onClose} footer={null}>
      <Form onFinish={handleLogin}>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Будь ласка, введіть ім'я користувача!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Будь ласка, введіть пароль!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className={styles.buttonContainer}>
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
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;

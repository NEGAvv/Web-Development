import React, { useEffect, useState } from "react";
import { Modal, List, Button } from "antd";

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    setCartItems(cartData || []);
  }, [isOpen]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleBuy = () => {
    if (calculateTotalPrice() > 0)
      Modal.success({
        title: "Покупка успішна!",
        content: `Загальна сума: ${calculateTotalPrice()} грн`,
        onOk: () => {
          setCartItems([]);
          localStorage.removeItem("cart");
          onClose();
        },
      });
  };

  return (
    <Modal title="Кошик" visible={isOpen} onCancel={onClose} footer={null}>
      <List
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="link" onClick={() => handleRemoveItem(item.id)}>
                Видалити
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`Ціна: ${item.price} грн `}
            />
          </List.Item>
        )}
      />
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <p>Загальна сума: {calculateTotalPrice()} грн</p>
        <Button type="primary" onClick={handleBuy}>
          Купити
        </Button>
      </div>
    </Modal>
  );
};

export default CartModal;

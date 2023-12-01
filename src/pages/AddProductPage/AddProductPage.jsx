import React, { useContext } from "react";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import MyFormikInput from "../../components/MyFormikInput/MyFormikInput";
import styles from "./AddProductPage.module.css";
const AddProductPage = () => {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSave = (values) => {
    console.log(values);

    const newProduct = { ...values, id: products.lastId };
    const newId = products.lastId + 1;
    setProducts((prevProducts) => ({
      ...prevProducts,
      lastId: newId,
      other: [...prevProducts.other, newProduct],
    }));

    navigate("/products");
  };

  const handleCancel = () => {
    navigate("/products");
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Вкажіть будь ласка назву";
    }

    if (!values.price) {
      errors.price = "Вкажіть будь ласка ціну";
    }

    if (!values.subCategoryName) {
      errors.subCategoryName = "Вкажіть будь ласка підкатегорію";
    }

    return errors;
  };

  return (
    <div className="container">
      <h1>Додати продукт</h1>
      <Formik
        initialValues={{
          name: "",
          price: "",
          subCategoryName: "",
        }}
        validate={validateForm}
        onSubmit={handleSave}
      >
        <Form>
          <div className={styles.form_container}>
            <MyFormikInput
              label="Назва продукту"
              type="text"
              name="name"
              placeholder="Введіть назву"
            />
            <MyFormikInput
              label="Ціна"
              type="number"
              name="price"
              placeholder="Введіть ціну"
            />
          </div>

          <div>
            <label htmlFor="subCategoryName">Підкатегорія</label>
            <Field
              as="select"
              name="subCategoryName"
              className={styles.selection}
            >
              <option value="Аксесуари">Аксесуари</option>
              <option value="Ліжка">Ліжка</option>
              <option value="Подушки">Подушки</option>
              <option value="Дзеркала">Дзеркала</option>
              <option value="Шафи">Шафи</option>
              <option value="Рушники">Рушники</option>
              <option value="Халати та капці">Халати та капці</option>
              <option value="Крісла офісні">Крісла офісні</option>
              <option value="Столи">Столи</option>
              <option value="Шафи">Шафи</option>
              <option value="Стільці">Стільці</option>
              <option value="Софи">Софи</option>
              <option value="Буфети">Буфети</option>
              <option value="Штори">Штори</option>
              <option value="Ролети">Ролети</option>
              <option value="Лаунж сети">Лаунж сети</option>
              <option value="Дитячі меблі">Дитячі меблі</option>
              <option value="Пледи">Пледи</option>
            </Field>
          </div>

          <div>
            <Button type="primary" htmlType="submit">
              Зберегти
            </Button>
            <Button
              type="default"
              onClick={handleCancel}
              style={{ marginLeft: 8 }}
            >
              Відмінити
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProductPage;

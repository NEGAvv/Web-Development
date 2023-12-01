import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import MyFormikInput from "../../components/MyFormikInput/MyFormikInput";
import styles from "./EditProductPage.module.css";
export default function EditProductPage() {
  const { products, setProducts } = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = findProductById(products, id);
    console.log("Found Product:", foundProduct);

    setProduct(foundProduct);
  }, [id, products]);

  const findProductById = (products, id) => {
    for (const category in products) {
      for (const productType in products[category]) {
        const productList = products[category][productType];

        if (Array.isArray(productList)) {
          const foundProduct = productList.find(
            (product) => String(product.id) === String(id)
          );
          console.log("Found Product:", foundProduct);
          if (foundProduct) {
            return foundProduct;
          }
        }
      }
    }

    return null;
  };

  const handleSave = (values) => {
    setProducts((prevProducts) => {
      const updatedProducts = { ...prevProducts };

      for (const category in updatedProducts) {
        if (
          typeof updatedProducts[category] === "object" &&
          updatedProducts[category] !== null
        ) {
          for (const productType in updatedProducts[category]) {
            const productList = updatedProducts[category][productType];

            if (Array.isArray(productList)) {
              updatedProducts[category][productType] = productList.map(
                (product) =>
                  product.id === values.id ? { ...product, ...values } : product
              );
            }
          }
        }
      }

      console.log("Updated Products:", updatedProducts);

      return { ...updatedProducts };
    });

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

    return errors;
  };

  return (
    <div className="container">
      <h1>Редагувати продукт</h1>
      {product && (
        <Formik
          initialValues={{
            id: product.id,
            name: product.name,
            price: product.price,
          }}
          validate={validateForm}
          onSubmit={handleSave}
        >
          <Form>
            <div className={styles.form_container}>
              <Field type="hidden" id="id" name="id" />

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
      )}
    </div>
  );
}

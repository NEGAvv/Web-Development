import React, { useContext, useState } from "react";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Table, Input, Button, Space } from "antd";
import styles from "./AllProductsPage.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
export default function AllProductsPage() {
  const { products, setProducts } = useContext(ProductContext);
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleAdminPanel = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const admin = JSON.parse(localStorage.getItem("admin"));
  };

  const dataSource = [
    //bedroom
    ...products.bedroom.accessories,
    ...products.bedroom.beds,
    ...products.bedroom.pillows,
    ...products.bedroom.mirrors,
    ...products.bedroom.wardrobes,
    //bathroom
    ...products.bathroom.accessories,
    ...products.bathroom.towels,
    ...products.bathroom.bathrobes,
    //office
    ...products.office.accessories,
    ...products.office.officeChairs,
    ...products.office.tables,
    ...products.office.shelves,
    //livingroom
    ...products.livingroom.chairs,
    ...products.livingroom.tables,
    ...products.livingroom.sofas,
    ...products.livingroom.buffets,
    //diningRoom
    //storage
    //windows
    ...products.windows.accessories,
    ...products.windows.curtains,
    ...products.windows.rollerBlinds,
    //garden
    ...products.garden.loungeNetworks,
    ...products.garden.chairs,
    ...products.garden.tables,
    ...products.garden.storage,
    //forHome
    ...products.forHome.childrenFurniture,
    ...products.forHome.blankets,
    ...products.forHome.pillows,

    //other
    ...products.other,
  ];

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Назва",
      dataIndex: "name",
      key: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Фільтрувати за назвою"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<i className="far fa-check-circle"></i>}
              size="small"
              style={{ width: 90 }}
            >
              OK
            </Button>
            <Button
              onClick={() => clearFilters()}
              size="small"
              style={{ width: 90 }}
            >
              Очистити
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Ціна",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Підкатегорія",
      dataIndex: "subCategoryName",
      key: "subCategoryName",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Фільтрувати за категорією"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<i className="far fa-check-circle"></i>}
              size="small"
              style={{ width: 90 }}
            >
              OK
            </Button>
            <Button
              onClick={() => clearFilters()}
              size="small"
              style={{ width: 90 }}
            >
              Очистити
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) =>
        record.subCategoryName.toLowerCase().includes(value.toLowerCase()),
      sorter: (a, b) => a.subCategoryName.localeCompare(b.subCategoryName),
    },
    {
      title: "Дія",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <>
          {JSON.parse(localStorage.getItem("user"))[0].email ===
            JSON.parse(localStorage.getItem("admin")).email &&
          JSON.parse(localStorage.getItem("user"))[0].password ===
            JSON.parse(localStorage.getItem("admin")).password ? (
            <>
              <Link to={`/products/edit-product/${record.id}`}>
                <button className={styles.editBtn}>Редагувати</button>
              </Link>

              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(record.id)}
              >
                Видалити
              </button>
            </>
          ) : (
            <></>
          )}
        </>
      ),
    },
  ];

  const handleDelete = (idToDelete) => {
    console.log(`Видалення елемента з id: ${idToDelete}`);

    setProducts((prevProducts) => {
      const newProducts = { ...prevProducts };

      Object.keys(newProducts).forEach((category) => {
        if (
          typeof newProducts[category] === "object" &&
          newProducts[category] !== null
        ) {
          Object.keys(newProducts[category]).forEach((productType) => {
            if (Array.isArray(newProducts[category][productType])) {
              newProducts[category][productType] = newProducts[category][
                productType
              ].filter((product) => product.id !== idToDelete);
            }
          });
        }
      });

      return { ...newProducts };
    });
  };

  const expandedRowRender = () => <hr />;

  return (
    <div className={styles.container}>
      {JSON.parse(localStorage.getItem("user"))[0].email ==
        JSON.parse(localStorage.getItem("admin")).email &&
        JSON.parse(localStorage.getItem("user"))[0].password ==
          JSON.parse(localStorage.getItem("admin")).password && (
          <Link to={`/products/add-product/`}>
            <Button type="primary" style={{ margin: 10 }}>
              Додати новий продукт
            </Button>
          </Link>
        )}

      <Table
        dataSource={dataSource.filter(
          (product) =>
            product.name.toLowerCase().includes(filterName.toLowerCase()) &&
            product.subCategoryName
              .toLowerCase()
              .includes(filterCategory.toLowerCase())
        )}
        columns={columns}
        pagination={false}
        expandedRowRender={expandedRowRender}
      />
    </div>
  );
}

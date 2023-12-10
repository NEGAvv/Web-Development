import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Стілець обідній JONSTRUP сірий/дуб",
      price: 1350,
      imageUrl: require("../../assets/chair1.jpg"),
      checked: false,
    },
    {
      id: 2,
      name: "Стілець обідній EJSTRUP синій/сталь",
      price: 1650,
      imageUrl: require("../../assets/chair2.jpg"),
      checked: false,
    },
    {
      id: 3,
      name: "Стілець обідній TUREBY беж тканина",
      price: 2000,
      imageUrl: require("../../assets/chair3.jpg"),
      checked: false,
    },
    {
      id: 4,
      name: "Стілець обідній KOKKEDAL сірий/дуб",
      price: 1850,
      imageUrl: require("../../assets/chair4.jpg"),
      checked: false,
    },
    {
      id: 5,
      name: "Стілець обідній TOREBY шт.шкіра чорний",
      price: 1000,
      imageUrl: require("../../assets/chair5.jpg"),
      checked: false,
    },
    {
      id: 6,
      name: "Стілець обідній GADSTRUP чорний дуб",
      price: 1000,
      imageUrl: require("../../assets/chair6.jpg"),
      checked: false,
    },
    {
      id: 7,
      name: "Стілець обідній TYLSTRUP кавовий",
      price: 1350,
      imageUrl: require("../../assets/chair7.jpg"),
      checked: false,
    },
    {
      id: 8,
      name: "Стілець обідній JEGIND натура/білий",
      price: 2000,
      imageUrl: require("../../assets/chair8.jpg"),
      checked: false,
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});
const productReducer = productSlice.reducer;
export default productReducer;

import React from "react";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addProducts } from "./redux/MyProductSlice";

import MyProduct from "./MyProduct";

const items = [
  {
    id: 0,
    image: require("./assets/img/1.jpg"),
    name: "USDT",
    price: 12312,
    qty: 0,
  },
  {
    id: 1,
    image: require("./assets/img/2.jpg"),
    name: "BIT",
    price: 1234,
    qty: 0,
  },
  {
    id: 2,
    image: require("./assets/img/3.png"),
    name: "BNB",
    price: 124123,
    qty: 0,
  },
  {
    id: 3,
    image: require("./assets/img/4.png"),
    name: "ETH",
    price: 4310,
    qty: 0,
  },
  {
    id: 4,
    image: require("./assets/img/5.png"),
    name: "SOL",
    price: 14120,
    qty: 0,
  },
  {
    id: 5,
    image: require("./assets/img/6.png"),
    name: "bitcoi4n",
    price: 14120,
    qty: 0,
  },
  {
    id: 6,
    image: require("./assets/img/7.png"),
    name: "bitcoi4n",
    price: 14120,
    qty: 0,
  },
  {
    id: 7,
    image: require("./assets/img/8.png"),
    name: "bitcoi4n",
    price: 14120,
    qty: 0,
  },
];
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    items.map((item) => {
      dispatch(addProducts(item));
    });
  }, []);

  return <MyProduct />;
};

export default Main;

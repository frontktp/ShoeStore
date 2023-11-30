import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import CartContext from "./components/CartContext";

function App() {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newItem) => {
    setCartList((prevCartList) => {
      const currentItem = prevCartList.find(
        (item) => item.productId === newItem.productId
      );

      if (currentItem) {
        return prevCartList.map((item) =>
          item.productId === newItem.productId
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevCartList, newItem];
      }
    });
  };

  return (
    <>
      <CartContext.Provider value={{ cartList, setCartList, addToCart }}>
        <div className="mt-[28px] mx-[165px] mb-[132px]">
          <Header />
          <Product />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;

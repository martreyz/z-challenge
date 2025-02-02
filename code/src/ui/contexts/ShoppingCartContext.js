"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartSmartphonesList, setCartSmartphonesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCartSmartphonesList(
      JSON.parse(localStorage.getItem("cartSmartphones")) || []
    );
  }, []);

  useEffect(() => {
    if (cartSmartphonesList.length > 0) {
      localStorage.setItem(
        "cartSmartphones",
        JSON.stringify(cartSmartphonesList)
      );
    }
    setLoading(false);
  }, [cartSmartphonesList]);

  const addNewSmartphoneToCart = (newSmartphone) => {
    setCartSmartphonesList((prev) => [
      ...prev,
      {
        ...newSmartphone,
        cartId: newSmartphone.id + cartSmartphonesList.length,
      },
    ]);
  };

  const removeSmartphoneFromCart = (idToRemove) => {
    const newCartList = cartSmartphonesList.filter(
      ({ cartId }) => cartId !== idToRemove
    );
    if (newCartList.length === 0) localStorage.removeItem("cartSmartphones");

    setCartSmartphonesList(newCartList);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartSmartphonesList,
        addNewSmartphoneToCart,
        removeSmartphoneFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

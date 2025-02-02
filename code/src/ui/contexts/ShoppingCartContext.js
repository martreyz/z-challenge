"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartSmartphonesList, setCartSmartphonesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cartSmartphones")) || [];
    setCartSmartphonesList(storedCart);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (cartSmartphonesList.length > 0) {
      localStorage.setItem(
        "cartSmartphones",
        JSON.stringify(cartSmartphonesList)
      );
    }
  }, [cartSmartphonesList]);

  const addNewSmartphoneToCart = (newSmartphone) => {
    setCartSmartphonesList((prev) => [...prev, newSmartphone]);
  };

  const removeSmartphoneFromCart = (idToRemove) => {
    const newCartList = cartSmartphonesList.filter(
      ({ id }) => id !== idToRemove
    );
    setCartSmartphonesList(newCartList);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartSmartphonesList,
        cartSmartphonesListLength: cartSmartphonesList.length || 0,
        addNewSmartphoneToCart,
        removeSmartphoneFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

"use client";

const { ShoppingCartProvider } = require("../contexts/ShoppingCartContext");
const { default: Header } = require("./Header");

const HeaderWithShoppingCartProvider = () => {
  return (
    <ShoppingCartProvider>
      <Header />
    </ShoppingCartProvider>
  );
};

export default HeaderWithShoppingCartProvider;

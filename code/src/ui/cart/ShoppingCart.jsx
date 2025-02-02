"use client";

import CartButtons from "@/ui/cart/CartButtons";
import CartSmartphonesList from "@/ui/cart/CartSmartphonesList";

import styles from "@/styles/shoppingCart.module.css";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartSmartphonesList } = useShoppingCart();

  return (
    <section className={styles.shoppingCart}>
      <h2>Cart ({cartSmartphonesList.length})</h2>
      <CartSmartphonesList cartSmartphonesList={cartSmartphonesList} />
      <CartButtons cartSmartphonesQuantity={cartSmartphonesList.length} />
    </section>
  );
};

export default ShoppingCart;

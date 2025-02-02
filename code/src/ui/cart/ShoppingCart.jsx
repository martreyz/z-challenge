"use client";

import CartButtons from "@/ui/cart/CartButtons";
import CartSmartphonesList from "@/ui/cart/CartSmartphonesList";

import styles from "@/styles/shoppingCart.module.css";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const ShoppingCart = () => {
  const { cartSmartphonesList } = useShoppingCart();
  const messages = useMessages();

  return (
    <section className={styles.shoppingCart}>
      <h2>
        {messages("cart.title", { cartItems: cartSmartphonesList.length })}
      </h2>
      <CartSmartphonesList cartSmartphonesList={cartSmartphonesList} />
      <CartButtons cartSmartphonesQuantity={cartSmartphonesList.length} />
    </section>
  );
};

export default ShoppingCart;

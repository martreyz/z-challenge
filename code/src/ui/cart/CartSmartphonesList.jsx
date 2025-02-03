"use client";

import { useMessages } from "@/ui/hooks/useMessages";
import CartSmartphonesListItem from "./CartSmartphonesListItem";

import styles from "@/styles/cartSmartphonesList.module.css";

const getAndFormatTotalPrice = (cartSmartphonesList) =>
  `${cartSmartphonesList.reduce((acc, smartphone) => {
    return acc + parseInt(smartphone.price.replace(" EUR", ""));
  }, 0)} EUR`;

const CartSmartphonesList = ({ cartSmartphonesList }) => {
  const messages = useMessages();

  return (
    <section className={styles.cartSmartphones}>
      <ul className={styles.cartSmartphonesList}>
        {cartSmartphonesList.map(
          ({ name, id, color, storage, price, imageUrl, cartId }, i) => (
            <CartSmartphonesListItem
              cartId={cartId}
              id={id}
              key={id + i}
              name={name}
              color={color}
              storage={storage}
              price={price}
              imageUrl={imageUrl}
            />
          )
        )}
      </ul>
      <p className={styles.cartSmartphonesTotalPrice}>
        {messages("cart.total.label", {
          total: getAndFormatTotalPrice(cartSmartphonesList),
        })}
      </p>
    </section>
  );
};

export default CartSmartphonesList;

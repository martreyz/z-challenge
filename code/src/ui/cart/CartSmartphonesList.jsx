"use client";

import CartSmartphonesListItem from "./CartSmartphonesListItem";

import styles from "@/styles/cartSmartphonesList.module.css";

const CartSmartphonesList = ({ cartSmartphonesList }) => {
  return (
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
  );
};

export default CartSmartphonesList;

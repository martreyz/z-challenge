"use client";

import Image from "next/image";

import styles from "@/styles/cartSmartphonesListItem.module.css";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const CartSmartphonesListItem = ({
  id,
  name,
  storage,
  color,
  price,
  imageUrl,
}) => {
  const { removeSmartphoneFromCart } = useShoppingCart();

  return (
    <li className={styles.cartSmartphonesListItem}>
      <div className={styles.cartSmartphonesListItem__imageWrapper}>
        <Image
          src={imageUrl}
          alt={`${name} in color ${color}`}
          fill
          style={{
            objectFit: "scale-down",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div>
        <p>{name}</p>
        <p>
          {storage} | {color}
        </p>
        <p>{price}</p>
        <button
          onClick={() => removeSmartphoneFromCart(id)}
          className={styles.cartSmartphonesListItem__removeButton}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default CartSmartphonesListItem;

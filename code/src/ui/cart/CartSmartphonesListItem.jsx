"use client";

import Image from "next/image";

import styles from "@/styles/cartModules/cartSmartphonesListItem.module.css";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const CartSmartphonesListItem = ({
  name,
  storage,
  color,
  price,
  imageUrl,
  cartId,
}) => {
  const { removeSmartphoneFromCart } = useShoppingCart();
  const messages = useMessages();

  return (
    <li className={styles.cartSmartphonesListItem}>
      <div className={styles.cartSmartphonesListItem__imageWrapper}>
        <Image
          src={imageUrl}
          alt={messages("altText.smartphoneAndColorImage", {
            name,
            color,
          })}
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
          tabindex="0"
          onClick={() => removeSmartphoneFromCart(cartId)}
          className={styles.cartSmartphonesListItem__removeButton}
        >
          {messages("cart.item.removeButton.label")}
        </button>
      </div>
    </li>
  );
};

export default CartSmartphonesListItem;

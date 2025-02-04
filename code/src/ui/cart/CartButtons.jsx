"use client";

import styles from "@/styles/cartModules/cartButtons.module.css";

import Link from "next/link";
import { useMessages } from "../hooks/useMessages";

const CartButtons = ({ cartSmartphonesQuantity }) => {
  const messages = useMessages();

  return (
    <footer className={styles.cartButtonGroup}>
      <Link tabIndex="0" href={"/"} className={styles.cartButton}>
        {messages("cart.backButton.label")}
      </Link>
      {cartSmartphonesQuantity > 0 && (
        <button
          tabIndex="0"
          className={`${styles.cartButton} ${styles.cartButtonPay}`}
        >
          {messages("cart.payButton.label")}
        </button>
      )}
    </footer>
  );
};

export default CartButtons;

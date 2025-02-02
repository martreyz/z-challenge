"use client";

import styles from "@/styles/cartButtons.module.css";

import Link from "next/link";
import { useMessages } from "../hooks/useMessages";

const CartButtons = ({ cartSmartphonesQuantity }) => {
  const messages = useMessages();

  return (
    <footer className={styles.cartButtonGroup}>
      <Link href={"/"} className={styles.cartButton}>
        {messages("cart.backButton.label")}
      </Link>
      {cartSmartphonesQuantity > 0 && (
        <button className={`${styles.cartButton} ${styles.cartButtonPay}`}>
          {messages("cart.payButton.label")}
        </button>
      )}
    </footer>
  );
};

export default CartButtons;

"use client";

import styles from "@/styles/cartButtons.module.css";

import Link from "next/link";

const CartButtons = ({ cartSmartphonesQuantity }) => {
  return (
    <footer className={styles.cartButtonGroup}>
      <Link href={"/"} className={styles.cartButton}>
        Continue shopping
      </Link>
      {cartSmartphonesQuantity > 0 && (
        <button className={`${styles.cartButton} ${styles.cartButtonPay}`}>
          Pay
        </button>
      )}
    </footer>
  );
};

export default CartButtons;

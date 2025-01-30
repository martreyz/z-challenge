"use client";

import styles from "@/styles/productList.module.css";

import Image from "next/image";

const SmartphoneItem = ({ name, brand, basePrice, imageUrl }) => {
  return (
    <ul className={styles.smartphoneItem}>
      <div className={styles.smartphoneItem__imageWrapper}>
        <Image
          src={imageUrl}
          alt="Logo"
          fill
          style={{
            objectFit: "scale-down",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div>
        <span className={styles.smartphoneItem__brand}>{brand}</span>
        <span className={styles.smartphoneItem__device}>
          <span>{name} </span>
          <span>{basePrice} </span>
        </span>
      </div>
    </ul>
  );
};

export default SmartphoneItem;

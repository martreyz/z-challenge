"use client";

import styles from "@/styles/smartphoneList.module.css";

import Image from "next/image";
import Link from "next/link";

const SmartphoneItem = ({ id, name, brand, basePrice, imageUrl }) => {
  return (
    <ul className={styles.smartphoneItem}>
      <Link
        prefetch={false}
        href={`/products/${id}`}
        className={styles.smartphoneItem__clickable}
      >
        <div className={styles.smartphoneItem__imageWrapper}>
          {imageUrl ? (
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
          ) : (
            "Image not available"
          )}
        </div>
        <div>
          <span className={styles.smartphoneItem__brand}>{brand}</span>
          <span className={styles.smartphoneItem__device}>
            <span>{name} </span>
            <span>{basePrice} </span>
          </span>
        </div>
      </Link>
    </ul>
  );
};

export default SmartphoneItem;

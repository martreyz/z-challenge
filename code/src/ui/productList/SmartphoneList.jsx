"use client";

import { useSmartphoneListContext } from "../contexts/SmartphoneListContext";
import styles from "@/styles/productList.module.css";

import Image from "next/image";
import SmartphoneItem from "./SmartphoneListItem";

const ProductList = () => {
  const { smartphoneList } = useSmartphoneListContext();

  return (
    <section className={styles.productList}>
      {smartphoneList.map(({ id, name, brand, basePrice, imageUrl }, i) => (
        <SmartphoneItem
          key={id + i}
          name={name}
          brand={brand}
          basePrice={basePrice}
          imageUrl={imageUrl}
        />
      ))}
    </section>
  );
};

export default ProductList;

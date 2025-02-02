"use client";

import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import styles from "@/styles/smartphoneList.module.css";

import SmartphoneItem from "@/ui/smartphoneList/SmartphoneListItem";

const SmartphoneList = () => {
  const { smartphoneList } = useSmartphoneListContext();

  return (
    <section className={styles.smartphoneList}>
      {smartphoneList.map(({ id, name, brand, basePrice, imageUrl }, i) => (
        <SmartphoneItem
          id={id}
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

export default SmartphoneList;

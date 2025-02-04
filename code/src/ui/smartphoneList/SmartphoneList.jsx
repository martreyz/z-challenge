"use client";

import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import styles from "@/styles/smartphoneListModules/smartphoneList.module.css";

import SmartphoneItem from "@/ui/smartphoneList/SmartphoneListItem";

const SmartphoneList = () => {
  const { smartphoneList } = useSmartphoneListContext();

  return (
    <ul className={styles.smartphoneList}>
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
    </ul>
  );
};

export default SmartphoneList;

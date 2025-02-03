"use client";

import styles from "@/styles/smartphoneDetailModules/smartphoneDetail.module.css";

import { useMessages } from "@/ui/hooks/useMessages";
import SmartphoneItem from "@/ui/smartphoneList/SmartphoneListItem";
import SmartphoneForList from "@/domain/entities/SmartphoneForList";
import { useSmartphoneDetailContext } from "../contexts/SmartphoneDetailContext";

const SmartphoneDetailSimilarProducts = () => {
  const messages = useMessages();
  const { smartphoneDetail } = useSmartphoneDetailContext();
  const { similarProducts } = smartphoneDetail;

  return (
    <section className={styles.smartphoneDetail__similarItems}>
      <h2>{messages("smartphoneDetail.similarItems.title")}</h2>
      <div className={styles.smartphoneDetail__similarItemsCarousel}>
        {similarProducts
          ?.map((smartphone) => SmartphoneForList(smartphone).create())
          .map(({ id, brand, name, basePrice, imageUrl }, i) => (
            <SmartphoneItem
              key={id + i}
              id={id}
              brand={brand}
              name={name}
              basePrice={basePrice}
              imageUrl={imageUrl}
            />
          ))}
      </div>
    </section>
  );
};

export default SmartphoneDetailSimilarProducts;

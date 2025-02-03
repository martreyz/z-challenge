"use client";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import styles from "@/styles/smartphoneDetailModules/smartphoneDetail.module.css";

import Image from "next/image";
import { useState } from "react";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const SmartphoneDetailShoppingInfo = () => {
  const { smartphoneDetail } = useSmartphoneDetailContext();
  const { addNewSmartphoneToCart } = useShoppingCart();

  const messages = useMessages();

  const { id, storageOptions, colorOptions, name, basePrice } =
    smartphoneDetail;

  const [selectedStorageOption, setSelectedStorageOption] = useState(undefined);

  const [selectedColorOption, setSelectedColorOption] = useState(
    colorOptions[0]
  );

  return (
    <section className={styles.smartphoneDetail__shoppingInfo}>
      <div className={styles.smartphoneDetail__imageWrapper}>
        {selectedColorOption?.imageUrl ? (
          <Image
            src={selectedColorOption.imageUrl}
            alt={`${name} in color ${selectedColorOption?.name}`}
            fill
            style={{
              objectFit: "scale-down",
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          messages("userMessage.imageNotAvailable")
        )}
      </div>
      <span className={styles.smartphoneDetail__name}>{name}</span>
      <span className={styles.smartphoneDetail__basePrice}>
        {selectedStorageOption
          ? selectedStorageOption.price
          : messages("smartphoneDetail.priceFrom.label", { basePrice })}
      </span>
      <div className={styles.smartphoneDetail__storage}>
        <span>{messages("smartphoneDetail.storage.label")}</span>
        <form className={styles.smartphoneDetail__storageForm}>
          {storageOptions?.map((option, i) => (
            <label
              className={styles.smartphoneDetail__storageLabel}
              key={option.capacity + i}
              style={{
                "--dynamic-storageLabel-borderColor":
                  selectedStorageOption?.capacity === option.capacity
                    ? "#000000"
                    : "#CCCCCC",
              }}
            >
              <input
                className={styles.smartphoneDetail__storageInput}
                type="radio"
                name={option.capacity}
                value={option.capacity}
                checked={selectedStorageOption?.capacity === option.capacity}
                onChange={() => setSelectedStorageOption(option)}
              />
              {option.capacity}
            </label>
          ))}
        </form>
      </div>
      <div className={styles.smartphoneDetail__color}>
        <span>{messages("smartphoneDetail.color.label")}</span>
        <form className={styles.smartphoneDetail__colorForm}>
          {colorOptions?.map((option, i) => (
            <label
              className={styles.smartphoneDetail__colorLabel}
              key={option.name + i}
              style={{
                "--dynamic-colorLabel-color": option.hexCode,
                "--dynamic-colorLabel-borderColor":
                  selectedColorOption?.name === option.name
                    ? "#000000"
                    : "#CCCCCC",
              }}
            >
              <input
                className={styles.smartphoneDetail__colorInput}
                type="radio"
                name={option.name}
                aria-label={option.name}
                value={option.name}
                checked={selectedStorageOption?.name === option.name}
                onChange={() => setSelectedColorOption(option)}
              />
            </label>
          ))}
        </form>
        <span>{selectedColorOption?.name}</span>
      </div>
      <button
        disabled={!selectedStorageOption}
        className={styles.smartphoneDetail__addButton}
        onClick={() => {
          addNewSmartphoneToCart({
            id,
            name,
            imageUrl: selectedColorOption.imageUrl,
            color: selectedColorOption.name,
            storage: selectedStorageOption.capacity,
            price: selectedStorageOption.price,
          });
        }}
      >
        {messages("smartphoneDetail.addButton.label")}
      </button>
    </section>
  );
};

export default SmartphoneDetailShoppingInfo;

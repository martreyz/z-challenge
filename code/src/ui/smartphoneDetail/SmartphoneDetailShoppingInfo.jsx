"use client";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import styles from "@/styles/smartphoneDetailModules/smartphoneDetail.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const SmartphoneDetailShoppingInfo = () => {
  const { smartphoneDetail } = useSmartphoneDetailContext();
  const { addNewSmartphoneToCart } = useShoppingCart();

  const messages = useMessages();

  const { id, storageOptions, colorOptions, name, basePrice } =
    smartphoneDetail;

  const [selectedStorageOption, setSelectedStorageOption] = useState(undefined);

  const [selectedColorOption, setSelectedColorOption] = useState(undefined);
  const [imageToShow, setImageToShow] = useState(colorOptions[0].imageUrl);

  useEffect(() => {
    if (selectedColorOption) {
      setImageToShow(selectedColorOption.imageUrl);
    }
  }, [selectedColorOption]);

  return (
    <section className={styles.smartphoneDetail__shoppingInfo}>
      <div className={styles.smartphoneDetail__imageWrapper}>
        {imageToShow ? (
          <Image
            src={imageToShow}
            alt={messages("altText.smartphoneAndColorImage", {
              name,
              color: selectedColorOption?.name || colorOptions[0].name,
            })}
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
      <div className={styles.smartphoneDetail__infoWrapper}>
        <h1 className={styles.smartphoneDetail__name}>{name}</h1>
        <h2 className={styles.smartphoneDetail__basePrice}>
          {selectedStorageOption
            ? selectedStorageOption.price
            : messages("smartphoneDetail.priceFrom.label", { basePrice })}
        </h2>
        <section className={styles.smartphoneDetail__storage}>
          <h3>{messages("smartphoneDetail.storage.label")}</h3>
          <form className={styles.smartphoneDetail__storageForm}>
            {storageOptions?.map((option, i) => (
              <label
                tabIndex={0}
                className={styles.smartphoneDetail__storageLabel}
                key={option.capacity + i}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSelectedStorageOption(option);
                  }
                }}
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
        </section>
        <section className={styles.smartphoneDetail__color}>
          <h3>{messages("smartphoneDetail.color.label")}</h3>
          <form className={styles.smartphoneDetail__colorForm}>
            {colorOptions?.map((option, i) => (
              <label
                tabIndex={0}
                className={styles.smartphoneDetail__colorLabel}
                key={option.name + i}
                style={{
                  "--dynamic-colorLabel-color": option.hexCode,
                  "--dynamic-colorLabel-borderColor":
                    selectedColorOption?.name === option.name
                      ? "#000000"
                      : "#CCCCCC",
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSelectedColorOption(option);
                  }
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
        </section>
        <button
          tabIndex={0}
          disabled={!selectedStorageOption || !selectedColorOption}
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
      </div>
    </section>
  );
};

export default SmartphoneDetailShoppingInfo;

"use client";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import styles from "@/styles/smartphoneDetail.module.css";

import Image from "next/image";
import { useState } from "react";
import SmartphoneItem from "@/ui/smartphoneList/SmartphoneListItem";
import SmartphoneForList from "@/domain/entities/SmartphoneForList";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const SmartphoneDetail = () => {
  const { smartphoneDetail } = useSmartphoneDetailContext();
  const { addNewSmartphoneToCart } = useShoppingCart();

  const messages = useMessages();

  const { id, storageOptions, colorOptions, name, basePrice, similarProducts } =
    smartphoneDetail;

  const [selectedStorageOption, setSelectedStorageOption] = useState(undefined);

  const [selectedColorOption, setSelectedColorOption] = useState(
    colorOptions[0]
  );

  return (
    <div className={styles.smartphoneDetail}>
      <section className={styles.smartphoneDetail__shoppingInfo}>
        <div className={styles.smartphoneDetail__imageWrapper}>
          {selectedColorOption?.imageUrl ? (
            <Image
              src={selectedColorOption.imageUrl}
              alt={`${name} in color ${colorOptions[0]?.name}`}
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
      <section>
        <table border="1">
          <tbody>
            <tr>
              <td>{messages("smartphoneDetail.specs.brand")}</td>
              <td>{smartphoneDetail.brand}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.name")}</td>
              <td>{smartphoneDetail.name}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.description")}</td>
              <td>{smartphoneDetail.description}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.screen")}</td>
              <td>{smartphoneDetail.specs.screen}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.resolution")}</td>
              <td>{smartphoneDetail.specs.resolution}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.processor")}</td>
              <td>{smartphoneDetail.specs.processor}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.mainCamera")}</td>
              <td>{smartphoneDetail.specs.mainCamera}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.selfieCamera")}</td>
              <td>{smartphoneDetail.specs.selfieCamera}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.battery")}</td>
              <td>{smartphoneDetail.specs.battery}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.os")}</td>
              <td>{smartphoneDetail.specs.os}</td>
            </tr>
            <tr>
              <td>{messages("smartphoneDetail.specs.screenRefreshRate")}</td>
              <td>{smartphoneDetail.specs.screenRefreshRate}</td>
            </tr>
          </tbody>
        </table>
      </section>
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
    </div>
  );
};

export default SmartphoneDetail;

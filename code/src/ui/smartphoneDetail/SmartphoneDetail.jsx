"use client";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import styles from "@/styles/smartphoneDetail.module.css";

import Image from "next/image";
import { useState } from "react";

const SmartphoneDetail = () => {
  const { smartphoneDetail } = useSmartphoneDetailContext();
  if (!smartphoneDetail.name) return;

  const { storageOptions, colorOptions, name, basePrice } = smartphoneDetail;

  const [selectedStorageOption, setSelectedStorageOption] = useState(
    storageOptions[0].capacity
  );

  const [selectedColorOption, setSelectedColorOption] = useState(
    colorOptions[0].name
  );

  console.log(smartphoneDetail, colorOptions);
  return (
    <div className={styles.smartphoneDetail}>
      <div className={styles.smartphoneDetail__imageWrapper}>
        <Image
          src={colorOptions?.[0].imageUrl}
          alt={`${name} in color ${colorOptions?.[0].name}`}
          fill
          style={{
            objectFit: "scale-down",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <span className={styles.smartphoneDetail__name}>{name}</span>
      <span className={styles.smartphoneDetail__basePrice}>
        From {basePrice}
      </span>
      <div className={styles.smartphoneDetail__storage}>
        <span>Storage. How much space do you need?</span>
        <form className={styles.smartphoneDetail__storageForm}>
          {storageOptions?.map((option, i) => (
            <label
              className={styles.smartphoneDetail__storageLabel}
              key={option.capacity + i}
              style={{
                "--dynamic-storageLabel-borderColor":
                  selectedStorageOption === option.capacity
                    ? "#000000"
                    : "#CCCCCC",
              }}
            >
              <input
                className={styles.smartphoneDetail__storageInput}
                type="radio"
                name={option.capacity}
                value={option.capacity}
                checked={selectedStorageOption === option.capacity}
                onChange={() => setSelectedStorageOption(option.capacity)}
              />
              {option.capacity}
            </label>
          ))}
        </form>
      </div>
      <div className={styles.smartphoneDetail__color}>
        <span>Color. Pick your favourite</span>
        <form className={styles.smartphoneDetail__colorForm}>
          {colorOptions?.map((option, i) => (
            <label
              className={styles.smartphoneDetail__colorLabel}
              key={option.name + i}
              style={{
                "--dynamic-colorLabel-color": option.hexCode,
                "--dynamic-colorLabel-borderColor":
                  selectedColorOption === option.name ? "#000000" : "#CCCCCC",
              }}
            >
              <input
                className={styles.smartphoneDetail__colorInput}
                type="radio"
                name={option.name}
                value={option.name}
                checked={selectedStorageOption === option.name}
                onChange={() => setSelectedColorOption(option.name)}
              />
            </label>
          ))}
        </form>
      </div>
      <button>Añadir</button>
      <section>
        <table border="1">
          <tr>
            <td>Brand</td>
            <td>{smartphoneDetail.brand}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{smartphoneDetail.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{smartphoneDetail.description}</td>
          </tr>
          <tr>
            <td>Screen</td>
            <td>{smartphoneDetail.specs.screen}</td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>{smartphoneDetail.specs.resolution}</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>{smartphoneDetail.specs.processor}</td>
          </tr>
          <tr>
            <td>Main camera</td>
            <td>{smartphoneDetail.specs.mainCamera}</td>
          </tr>
          <tr>
            <td>Selfie camera</td>
            <td>{smartphoneDetail.specs.selfieCamera}</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>{smartphoneDetail.specs.battery}</td>
          </tr>
          <tr>
            <td>OS</td>
            <td>{smartphoneDetail.specs.os}</td>
          </tr>
          <tr>
            <td>Screen refresh rate</td>
            <td>{smartphoneDetail.specs.screenRefreshRate}</td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default SmartphoneDetail;

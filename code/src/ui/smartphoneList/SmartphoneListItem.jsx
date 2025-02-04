"use client";

import styles from "@/styles/smartphoneListModules/smartphoneList.module.css";

import Image from "next/image";
import Link from "next/link";
import { useMessages } from "@/ui/hooks/useMessages";

const SmartphoneItem = ({ id, name, brand, basePrice, imageUrl }) => {
  const messages = useMessages();

  return (
    <li className={styles.smartphoneItem}>
      <Link
        tabindex="0"
        aria-label={messages("ariaLabel.detailPage")}
        title={messages("ariaLabel.detailPage")}
        prefetch={false}
        href={`/products/${id}`}
        className={styles.smartphoneItem__clickable}
      >
        <div className={styles.smartphoneItem__imageWrapper}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={messages("altText.smartphoneAndBrandImage", { name, brand })}
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
        <section>
          <h2 className={styles.smartphoneItem__brand}>{brand}</h2>
          <h3 className={styles.smartphoneItem__device}>
            <span>{name} </span>
            <span>{basePrice} </span>
          </h3>
        </section>
      </Link>
    </li>
  );
};

export default SmartphoneItem;

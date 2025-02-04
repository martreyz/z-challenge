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
        aria-label="Redirect to product page"
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
        <div>
          <span className={styles.smartphoneItem__brand}>{brand}</span>
          <span className={styles.smartphoneItem__device}>
            <span>{name} </span>
            <span>{basePrice} </span>
          </span>
        </div>
      </Link>
    </li>
  );
};

export default SmartphoneItem;

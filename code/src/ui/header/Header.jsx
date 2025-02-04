"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/sharedModules/header.module.css";

import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { useMessages } from "@/ui/hooks/useMessages";

const Header = () => {
  const { cartSmartphonesList } = useShoppingCart();
  const messages = useMessages();

  return (
    <header className={styles.header}>
      <Link
        aria-label={messages("ariaLabel.homePage")}
        title={messages("ariaLabel.homePage")}
        tabindex="0"
        className={styles.headerLandingLink}
        href={"/"}
      >
        <Image
          src="/assets/logo.svg"
          alt={messages("altText.logo")}
          width={77}
          height={30}
        />
      </Link>
      <Link
        tabindex="0"
        className={styles.headerShoppingCartLink}
        href={"/cart"}
        aria-label={messages("ariaLabel.cartPage")}
        title={messages("ariaLabel.cartPage")}
      >
        <Image
          src={
            cartSmartphonesList.length > 0
              ? "/assets/bagIcon_filled.svg"
              : "/assets/bagIcon_outlined.svg"
          }
          alt={messages("ariaLabel.cartPage")}
          width={18}
          height={18}
        />
        {cartSmartphonesList.length > 0 && (
          <span className={styles.shoppingCartItems}>
            {cartSmartphonesList.length}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;

"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/header.module.css";

import { useState, useEffect } from "react";

import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";

const Header = () => {
  const { cartSmartphonesList } = useShoppingCart();
  const [cartLength, setCartLength] = useState(cartSmartphonesList.length);

  useEffect(() => {
    console.log("🔄 Header actualizado con:", cartSmartphonesList);
    setCartLength(cartSmartphonesList.length); // ✅ Forzar actualización
  }, [cartSmartphonesList]);

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src="/assets/logo.svg" alt="Logo" width={77} height={30} />
      </Link>
      <Link className={styles.shoppingCart} href={"/cart"}>
        <Image
          src={
            cartSmartphonesList.length > 0
              ? "/assets/bagIcon_filled.svg"
              : "/assets/bagIcon_outlined.svg"
          }
          alt="Shopping cart"
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

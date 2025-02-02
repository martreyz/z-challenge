"use client";

import { ShoppingCartProvider } from "@/ui/contexts/ShoppingCartContext";
import Header from "@/ui/header/Header";

export default function RootTemplate({ children }) {
  console.log("hola buenas");
  return (
    <ShoppingCartProvider>
      <Header />
      {children}
    </ShoppingCartProvider>
  );
}

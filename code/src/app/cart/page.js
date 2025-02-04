import ShoppingCart from "@/ui/cart/ShoppingCart";
import { ShoppingCartProvider } from "@/ui/contexts/ShoppingCartContext";
import Header from "@/ui/header/Header";

export default async function Home() {
  return (
    <ShoppingCartProvider>
      <Header />
      <main>
        <ShoppingCart />
      </main>
    </ShoppingCartProvider>
  );
}

import ShoppingCart from "@/ui/cart/ShoppingCart";
import { ShoppingCartProvider } from "@/ui/contexts/ShoppingCartContext";

export default async function Home() {
  return (
    <ShoppingCartProvider>
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

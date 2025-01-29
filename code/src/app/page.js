import { getAllProducts } from "@/app/usecases/getAllProducts";
import { SmartphoneListProvider } from "@/ui/contexts/SmartphoneListContext";
import ProductListWrapper from "@/ui/productList/ProductListWrapper";
import Image from "next/image";

export default async function Home() {
  const allSmartphones = await getAllProducts();

  return (
    <SmartphoneListProvider>
      <header>
        <Image src="/assets/logo.svg" alt="Logo" width={77} height={30} />
        <Image
          src="/assets/bagIcon_mobile.svg"
          alt="Bag"
          width={18}
          height={18}
        />
      </header>
      <main>
        <ProductListWrapper allSmartphones={allSmartphones} />
      </main>
    </SmartphoneListProvider>
  );
}

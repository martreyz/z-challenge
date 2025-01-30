import { SmartphoneListProvider } from "@/ui/contexts/SmartphoneListContext";
import ProductList from "@/ui/productList/SmartphoneList";
import Searcher from "@/ui/searcher/Searcher";

import Image from "next/image";

export default async function Home() {
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
        <Searcher />
        <ProductList />
      </main>
    </SmartphoneListProvider>
  );
}

import { SmartphoneListProvider } from "@/ui/contexts/SmartphoneListContext";
import SmartphoneList from "@/ui/smartphoneList/SmartphoneList";
import Searcher from "@/ui/searcher/Searcher";
import { ShoppingCartProvider } from "@/ui/contexts/ShoppingCartContext";
import Header from "@/ui/header/Header";

export default async function Home() {
  return (
    <ShoppingCartProvider>
      <SmartphoneListProvider>
        <Header />
        <main>
          <Searcher />
          <SmartphoneList />
        </main>
      </SmartphoneListProvider>
    </ShoppingCartProvider>
  );
}

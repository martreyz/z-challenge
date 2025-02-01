import { SmartphoneListProvider } from "@/ui/contexts/SmartphoneListContext";
import SmartphoneList from "@/ui/smartphoneList/SmartphoneList";
import Searcher from "@/ui/searcher/Searcher";

export default async function Home() {
  return (
    <SmartphoneListProvider>
      <Searcher />
      <SmartphoneList />
    </SmartphoneListProvider>
  );
}

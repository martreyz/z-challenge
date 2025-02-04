import { SmartphoneDetailProvider } from "@/ui/contexts/SmartphoneDetailContext";

import Link from "next/link";
import Image from "next/image";
import SmartphoneDetail from "@/ui/smartphoneDetail/SmartphoneDetail";
import { ShoppingCartProvider } from "@/ui/contexts/ShoppingCartContext";
import Header from "@/ui/header/Header";
import { buildMessage } from "@/ui/hooks/useMessages";

export default async function Home({ params }) {
  const { id } = await params;

  return (
    <ShoppingCartProvider>
      <SmartphoneDetailProvider id={id}>
        <Header />
        <main>
          <nav className="smartphoneDetailPage__header">
            <Link
              className="smartphoneDetail__backButton"
              aria-label={buildMessage()["ariaLabel.homePage"]}
              title={buildMessage()["ariaLabel.homePage"]}
              href={"/"}
            >
              <Image
                src="/assets/chevron_left.svg"
                alt={buildMessage()["ariaLabel.homePage"]}
                width={20}
                height={20}
              />
              <span>Back</span>
            </Link>
          </nav>
          <SmartphoneDetail />
        </main>
      </SmartphoneDetailProvider>
    </ShoppingCartProvider>
  );
}

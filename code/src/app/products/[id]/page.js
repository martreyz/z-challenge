import { SmartphoneDetailProvider } from "@/ui/contexts/SmartphoneDetailContext";

import Link from "next/link";
import Image from "next/image";
import SmartphoneDetail from "@/ui/smartphoneDetail/SmartphoneDetail";
import { ShoppingCartProvider } from "@/ui/contexts/ShoppingCartContext";
import Header from "@/ui/header/Header";

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
              aria-label="Redirect to home page"
              title="Redirect to home page"
              href={"/"}
            >
              <Image
                src="/assets/chevron_left.svg"
                alt="Chevron left Back button"
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

import { SmartphoneDetailProvider } from "@/ui/contexts/SmartphoneDetailContext";

import Link from "next/link";
import Image from "next/image";
import SmartphoneDetail from "@/ui/smartphoneDetail/SmartphoneDetail";

export default async function Home({ params }) {
  const { id } = await params;

  return (
    <SmartphoneDetailProvider id={id}>
      <div className="smartphoneDetailPage__header">
        <Link className="smartphoneDetail__backButton" href={"/"}>
          <Image
            src="/assets/chevron_left.svg"
            alt="Chevron left Back button"
            width={20}
            height={20}
          />
          <span>Back</span>
        </Link>
      </div>
      <SmartphoneDetail />
    </SmartphoneDetailProvider>
  );
}

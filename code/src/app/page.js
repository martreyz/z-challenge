import { getAllProducts } from "@/app/usecases/getAllProducts";
import ProductListWrapper from "@/ui/productList/ProductListWrapper";
import Image from "next/image";

export default async function Home() {
  const allProducts = await getAllProducts();

  console.log(allProducts);

  return (
    <>
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
        <ProductListWrapper />
      </main>
    </>
  );
}

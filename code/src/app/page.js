import { getAllProducts } from "@/app/usecases/getAllProducts";

export default async function Home() {
  await getAllProducts();

  return (
    <>
      <span>This is the home page</span>
    </>
  );
}

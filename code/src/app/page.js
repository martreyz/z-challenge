import { getAllProducts } from "@/app/usecases/getAllProducts";

export default async function Home() {
  const allProducts = await getAllProducts();

  return <span>This is the home page</span>;
}

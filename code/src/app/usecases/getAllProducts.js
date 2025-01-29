import ProductForList from "@/domain/entities/ProductForList";
import { fetchProducts } from "@/infra/API/products";

export const getAllProducts = async () => {
  const data = await fetchProducts();

  const smartphoneList = data.map((smartPhone) =>
    ProductForList(smartPhone).create()
  );

  return smartphoneList;
};

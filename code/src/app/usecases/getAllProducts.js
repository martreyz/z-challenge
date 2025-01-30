import ProductForList from "@/domain/entities/ProductForList";
import { fetchProducts } from "@/infra/API/products";

export const getAllProducts = async (searchQuery) => {
  const data = await fetchProducts(searchQuery);
  const smartphoneList = data.map((smartPhone) =>
    ProductForList(smartPhone).create()
  );

  return smartphoneList;
};

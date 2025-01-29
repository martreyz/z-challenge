import ProductForList from "@/domain/entities/ProductForList";
import { fetchAllProducts } from "@/infra/API/fetchAllProducts";

export const getAllProducts = async () => {
  const data = await fetchAllProducts();

  const smartphoneList = data.map(
    (smartPhone) => new ProductForList(smartPhone)
  );

  return smartphoneList;
};

import SmartphoneForList from "@/domain/entities/SmartphoneForList";
import { fetchSmartphoneList } from "@/infra/API/smartphones";

export const getSmartphones = async (searchQuery) => {
  const data = await fetchSmartphoneList(searchQuery);
  const smartphoneList = data.map((smartPhone) =>
    SmartphoneForList(smartPhone).create()
  );

  return smartphoneList;
};

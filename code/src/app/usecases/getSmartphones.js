import SmartphoneForList from "@/domain/entities/SmartphoneForList";
import { fetchSmartphoneList } from "@/infra/APIFiles/smartphones";

export const getSmartphones = async (searchQuery) => {
  try {
    const data = await fetchSmartphoneList(searchQuery);
    const smartphoneList = data.map((smartPhone) =>
      SmartphoneForList(smartPhone).create()
    );
    return smartphoneList;
  } catch (error) {
    console.error(`Error in getSmartphones: ${error.message}`);
    throw new Error("Failed to retrieve smartphone list");
  }
};

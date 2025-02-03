import SmartphoneForDetail from "@/domain/entities/SmartphoneForDetail";
import { fetchSmartphoneDetailById } from "@/infra/APIFiles/smartphoneById";

export const getSmartphoneById = async (id) => {
  try {
    const data = await fetchSmartphoneDetailById(id);
    const smartphoneDetail = SmartphoneForDetail(data).create();
    return smartphoneDetail;
  } catch (error) {
    console.error(`Error in getSmartphoneById: ${error.message}`);
    throw new Error("Failed to retrieve smartphone details");
  }
};

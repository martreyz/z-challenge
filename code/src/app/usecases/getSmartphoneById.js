import SmartphoneForDetail from "@/domain/entities/SmartphoneForDetail";
import { fetchSmartphoneDetailById } from "@/infra/APIFiles/smartphoneById";

export const getSmartphoneById = async (id) => {
  const data = await fetchSmartphoneDetailById(id);
  const smartphoneDetail = SmartphoneForDetail(data).create();
  return smartphoneDetail;
};

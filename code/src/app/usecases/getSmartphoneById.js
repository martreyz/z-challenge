import SmartphoneForDetail from "@/domain/entities/SmartphoneForDetail";
import { fetchSmartphoneDetailById } from "@/infra/API/smartphoneById";

export const getSmartphoneById = async (id) => {
  const data = await fetchSmartphoneDetailById(id);
  const smartphoneDetail = SmartphoneForDetail(data).create();
  return smartphoneDetail;
};

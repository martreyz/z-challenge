import { fetchSmartphoneDetailById } from "@/infra/APIFiles/smartphoneById";
import SmartphoneForDetail from "@/domain/entities/SmartphoneForDetail";
import { getSmartphoneById } from "@/app/usecases/getSmartphoneById";

jest.mock("../../infra/APIFiles/smartphoneById");

jest.mock("../../domain/entities/SmartphoneForDetail");

describe("getSmartphoneById", () => {
  it("should fetch smartphone detail and process it correctly", async () => {
    const mockId = "123";
    const mockData = { id: mockId, name: "Test Smartphone" };
    fetchSmartphoneDetailById.mockResolvedValue(mockData);

    const mockSmartphoneDetail = { id: mockId, name: "Processed Smartphone" };
    SmartphoneForDetail.mockReturnValue({
      create: jest.fn().mockReturnValue(mockSmartphoneDetail),
    });

    const result = await getSmartphoneById(mockId);

    expect(fetchSmartphoneDetailById).toHaveBeenCalledWith(mockId);
    expect(SmartphoneForDetail).toHaveBeenCalledWith(mockData);
    expect(SmartphoneForDetail().create).toHaveBeenCalled();
    expect(result).toEqual(mockSmartphoneDetail);
  });
});

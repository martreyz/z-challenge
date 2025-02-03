import { getSmartphoneById } from "@/app/usecases/getSmartphoneById";
import { fetchSmartphoneDetailById } from "@/infra/APIFiles/smartphoneById";
import SmartphoneForDetail from "@/domain/entities/SmartphoneForDetail";

jest.mock("../../infra/APIFiles/smartphoneById");
jest.mock("../../domain/entities/SmartphoneForDetail");

describe("getSmartphoneById", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a smartphone detail on success", async () => {
    const mockData = { id: 1, name: "Smartphone 1" };
    fetchSmartphoneDetailById.mockResolvedValue(mockData);

    const mockProcessedData = { id: 1, name: "Processed Smartphone 1" };
    SmartphoneForDetail.mockImplementation(() => ({
      create: jest.fn().mockReturnValue(mockProcessedData),
    }));

    const result = await getSmartphoneById(1);

    expect(fetchSmartphoneDetailById).toHaveBeenCalledWith(1);
    expect(SmartphoneForDetail).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(mockProcessedData);
  });

  it("should throw an error if fetchSmartphoneDetailById fails", async () => {
    fetchSmartphoneDetailById.mockRejectedValue(
      new Error("Failed to fetch smartphone details")
    );

    await expect(getSmartphoneById(1)).rejects.toThrow(
      "Failed to retrieve smartphone details"
    );
    expect(fetchSmartphoneDetailById).toHaveBeenCalledWith(1);
  });
});

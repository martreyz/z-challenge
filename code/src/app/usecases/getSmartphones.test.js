import { getSmartphones } from "@/app/usecases/getSmartphones";
import { fetchSmartphoneList } from "@/infra/APIFiles/smartphones";
import SmartphoneForList from "@/domain/entities/SmartphoneForList";

jest.mock("../../infra/APIFiles/smartphones");
jest.mock("../../domain/entities/SmartphoneForList");

describe("getSmartphones", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a list of processed smartphones on success", async () => {
    const mockData = [
      { id: 1, name: "Smartphone 1" },
      { id: 2, name: "Smartphone 2" },
    ];
    fetchSmartphoneList.mockResolvedValue(mockData);

    const mockProcessedData = [
      { id: 1, name: "Processed Smartphone 1" },
      { id: 2, name: "Processed Smartphone 2" },
    ];
    SmartphoneForList.mockImplementation((smartphone) => ({
      create: jest.fn(() =>
        mockProcessedData.find((item) => item.id === smartphone.id)
      ),
    }));

    const result = await getSmartphones("test query");

    expect(fetchSmartphoneList).toHaveBeenCalledWith("test query");
    expect(SmartphoneForList).toHaveBeenCalledTimes(mockData.length);
    mockData.forEach((smartphone) =>
      expect(SmartphoneForList).toHaveBeenCalledWith(smartphone)
    );
    expect(result).toEqual(mockProcessedData);
  });

  it("should throw an error if fetchSmartphoneList fails", async () => {
    fetchSmartphoneList.mockRejectedValue(
      new Error("Failed to fetch smartphone list")
    );

    await expect(getSmartphones("test query")).rejects.toThrow(
      "Failed to retrieve smartphone list"
    );
    expect(fetchSmartphoneList).toHaveBeenCalledWith("test query");
  });
});

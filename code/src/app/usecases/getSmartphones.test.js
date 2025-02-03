import { fetchSmartphoneList } from "@/infra/APIFiles/smartphones";
import SmartphoneForList from "@/domain/entities/SmartphoneForList";
import { getSmartphones } from "@/app/usecases/getSmartphones";

jest.mock("../../infra/APIFiles/smartphones");

jest.mock("../../domain/entities/SmartphoneForList");

describe("getSmartphones", () => {
  it("should fetch smartphone list and process it correctly", async () => {
    const mockSearchQuery = "test query";
    const mockData = [
      { id: 1, name: "Smartphone 1" },
      { id: 2, name: "Smartphone 2" },
    ];
    fetchSmartphoneList.mockResolvedValue(mockData);

    const createMock = jest.fn();
    SmartphoneForList.mockImplementation((smartphone) => ({
      create: createMock.mockReturnValueOnce({
        id: smartphone.id,
        name: `Processed ${smartphone.name}`,
      }),
    }));

    const mockProcessedSmartphones = [
      { id: 1, name: "Processed Smartphone 1" },
      { id: 2, name: "Processed Smartphone 2" },
    ];

    const result = await getSmartphones(mockSearchQuery);

    expect(fetchSmartphoneList).toHaveBeenCalledWith(mockSearchQuery);
    expect(SmartphoneForList).toHaveBeenCalledTimes(mockData.length);
    mockData.forEach((smartphone) =>
      expect(SmartphoneForList).toHaveBeenCalledWith(smartphone)
    );
    expect(createMock).toHaveBeenCalledTimes(mockData.length);
    expect(result).toEqual(mockProcessedSmartphones);
  });
});

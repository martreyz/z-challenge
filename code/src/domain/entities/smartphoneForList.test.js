import SmartphoneForList from "@/domain/entities/SmartphoneForList";

describe("SmartphoneForList", () => {
  it("should correctly process and format the smartphone for the list", () => {
    const mockData = {
      id: 1,
      name: "Test Smartphone",
      basePrice: 999,
    };

    const smartphoneForList = SmartphoneForList(mockData);
    const result = smartphoneForList.create();

    const expectedResult = {
      ...mockData,
      basePrice: "999 EUR",
    };

    expect(result).toEqual(expectedResult);
  });
});

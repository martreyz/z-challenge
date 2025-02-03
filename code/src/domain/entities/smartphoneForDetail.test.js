import SmartphoneForDetail from "@/domain/entities/SmartphoneForDetail";

describe("SmartphoneForDetail", () => {
  it("should correctly process and format smartphone details", () => {
    const mockData = {
      id: 1,
      name: "Test Smartphone",
      basePrice: 1000,
      storageOptions: [
        { id: 1, storage: "64GB", price: 100 },
        { id: 2, storage: "128GB", price: 200 },
      ],
    };

    const smartphoneDetail = SmartphoneForDetail(mockData);
    const result = smartphoneDetail.create();

    const expectedResult = {
      ...mockData,
      basePrice: "1000 EUR",
      storageOptions: [
        { id: 1, storage: "64GB", price: "100 EUR" },
        { id: 2, storage: "128GB", price: "200 EUR" },
      ],
    };

    expect(result).toEqual(expectedResult);
  });
});

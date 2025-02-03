import { fetchSmartphoneList } from "@/infra/APIFiles/smartphones";

global.fetch = jest.fn();

describe("fetchSmartphoneList", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = "https://mockapi.com";
    process.env.API_KEY = "mockApiKey";
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete process.env.NEXT_PUBLIC_API_BASE_URL;
    delete process.env.API_KEY;
  });

  it("should return a list of smartphones on success", async () => {
    const mockResponse = [{ id: 1, name: "Smartphone 1" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await fetchSmartphoneList("test query");
    expect(fetch).toHaveBeenCalledWith(
      "https://mockapi.com/products?limit=20&search=test+query",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "mockApiKey",
        },
      }
    );
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error if the response is not ok", async () => {
    const mockConsoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    fetch.mockResolvedValueOnce({ ok: false, status: 500 });

    await expect(fetchSmartphoneList("test query")).rejects.toThrow(
      "Failed to fetch smartphone list. Status: 500"
    );
    mockConsoleError.mockRestore();
  });

  it("should throw an error on network failure", async () => {
    const mockConsoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchSmartphoneList("test query")).rejects.toThrow(
      "Network error"
    );
    mockConsoleError.mockRestore();
  });
});

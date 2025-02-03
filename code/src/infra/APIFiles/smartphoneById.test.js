import { fetchSmartphoneDetailById } from "@/infra/APIFiles/smartphoneById";

global.fetch = jest.fn();

describe("fetchSmartphoneDetailById", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = "https://mockapi.com";
    process.env.API_KEY = "mockApiKey";
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete process.env.NEXT_PUBLIC_API_BASE_URL;
    delete process.env.API_KEY;
  });

  it("should return smartphone detail on success", async () => {
    const mockResponse = { id: 1, name: "Smartphone 1" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await fetchSmartphoneDetailById(1);
    expect(fetch).toHaveBeenCalledWith("https://mockapi.com/products/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "mockApiKey",
      },
    });
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error if the response is not ok", async () => {
    const mockConsoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    fetch.mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(fetchSmartphoneDetailById(1)).rejects.toThrow(
      "Failed to fetch smartphone details. Status: 404"
    );
    mockConsoleError.mockRestore();
  });

  it("should throw an error on network failure", async () => {
    const mockConsoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchSmartphoneDetailById(1)).rejects.toThrow("Network error");
    mockConsoleError.mockRestore();
  });
});

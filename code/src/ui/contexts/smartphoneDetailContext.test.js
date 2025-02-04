import { render, screen, waitFor } from "@testing-library/react";
import {
  SmartphoneDetailProvider,
  useSmartphoneDetailContext,
} from "@/ui/contexts/SmartphoneDetailContext";

global.fetch = jest.fn();

const TestComponent = () => {
  const { smartphoneDetail } = useSmartphoneDetailContext();
  return (
    <div>
      <p data-testid="smartphone-name">{smartphoneDetail.name || "No data"}</p>
    </div>
  );
};

describe("SmartphoneDetailProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render loading state initially", () => {
    render(
      <SmartphoneDetailProvider id="1">
        <TestComponent />
      </SmartphoneDetailProvider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should fetch and display smartphone details on success", async () => {
    const mockData = { id: 1, name: "Smartphone 1" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(
      <SmartphoneDetailProvider id="1">
        <TestComponent />
      </SmartphoneDetailProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("smartphone-name")).toHaveTextContent(
        "Smartphone 1"
      )
    );
    expect(fetch).toHaveBeenCalledWith("/api/products/1");
  });

  it("should display an error message if fetching fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(
      <SmartphoneDetailProvider id="1">
        <TestComponent />
      </SmartphoneDetailProvider>
    );

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/api/products/1");
  });
});

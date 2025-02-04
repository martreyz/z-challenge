import { render, screen, waitFor } from "@testing-library/react";
import {
  SmartphoneListProvider,
  useSmartphoneListContext,
} from "@/ui/contexts/SmartphoneListContext";

global.fetch = jest.fn();

const TestComponent = () => {
  const { smartphoneList, numberOfResults } = useSmartphoneListContext();
  return (
    <div>
      <p data-testid="result-count">{numberOfResults}</p>
      <ul>
        {smartphoneList.map((item) => (
          <li key={item.id} data-testid="smartphone-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

describe("SmartphoneListProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render loading state initially", () => {
    render(
      <SmartphoneListProvider>
        <TestComponent />
      </SmartphoneListProvider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should fetch and display smartphone list on success", async () => {
    const mockData = [
      { id: 1, name: "Smartphone 1" },
      { id: 2, name: "Smartphone 2" },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(
      <SmartphoneListProvider>
        <TestComponent />
      </SmartphoneListProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("result-count")).toHaveTextContent("2")
    );
    expect(screen.getAllByTestId("smartphone-item").length).toBe(2);
    expect(fetch).toHaveBeenCalledWith("/api/products?");
  });

  it("should display an error message if fetching fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(
      <SmartphoneListProvider>
        <TestComponent />
      </SmartphoneListProvider>
    );

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/api/products?");
  });
});

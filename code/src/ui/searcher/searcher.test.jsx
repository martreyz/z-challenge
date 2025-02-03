import { fireEvent, render, screen } from "@testing-library/react";

import Searcher from "@/ui/searcher/Searcher";
import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import { useSmartphoneSearcher } from "@/ui/hooks/useSmartphoneSearcher";

const mockSmartphoneListContext = {
  numberOfResults: 20,
  updateSmartphoneListData: jest.fn(),
};

jest.mock("../contexts/SmartphoneListContext", () => ({
  useSmartphoneListContext: jest.fn(),
}));

const mockHandleSearchCriteriaChange = jest.fn();
jest.mock("../hooks/useSmartphoneSearcher", () => ({
  useSmartphoneSearcher: jest.fn(),
}));

describe("Searcher component", () => {
  beforeEach(() => {
    useSmartphoneListContext.mockReturnValue(mockSmartphoneListContext);
    useSmartphoneSearcher.mockReturnValue({
      handleSearchCriteriaChange: mockHandleSearchCriteriaChange,
    });
  });
  it("should render with an input, placeholder and helper text", () => {
    render(<Searcher />);

    expect(
      screen.getByPlaceholderText("searcher.input.placeholder")
    ).toBeInTheDocument();
    expect(screen.getByText("searcher.input.helper"));
  });

  it("should call updateSmartphoneListData on input change", () => {
    render(<Searcher />);

    const testInput = "Test";
    fireEvent.change(
      screen.getByPlaceholderText("searcher.input.placeholder"),
      { target: { value: testInput } }
    );

    expect(mockHandleSearchCriteriaChange).toHaveBeenCalledWith(testInput);
    expect(screen.getByText("searcher.input.helper"));
  });
});

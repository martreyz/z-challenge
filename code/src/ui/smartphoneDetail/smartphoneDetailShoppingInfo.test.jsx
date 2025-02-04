import { fireEvent, render, screen } from "@testing-library/react";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import { mockSmartphoneDetail } from "@/test/testConstants";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import SmartphoneDetailShoppingInfo from "@/ui/smartphoneDetail/SmartphoneDetailShoppingInfo";

const mockSmartphoneDetailContext = {
  smartphoneDetail: mockSmartphoneDetail,
};

jest.mock("../contexts/SmartphoneDetailContext", () => ({
  useSmartphoneDetailContext: jest.fn(),
}));

jest.mock("../contexts/ShoppingCartContext", () => ({
  useShoppingCart: jest.fn(),
}));

describe("SmartphoneDetailShoppingInfo component", () => {
  const mockAddNewSmartphoneToCart = jest.fn();
  beforeEach(() => {
    useSmartphoneDetailContext.mockReturnValue(mockSmartphoneDetailContext);
    useShoppingCart.mockReturnValue({
      addNewSmartphoneToCart: mockAddNewSmartphoneToCart,
    });
  });
  it("should render all shopping info", () => {
    render(<SmartphoneDetailShoppingInfo />);
    const { name, colorOptions } = mockSmartphoneDetail;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.priceFrom.label")
    ).toBeInTheDocument();
    expect(screen.getByAltText(`${name} in color ${colorOptions[0].name}`));
  });

  it("should show all storage options", () => {
    render(<SmartphoneDetailShoppingInfo />);
    const { storageOptions } = mockSmartphoneDetail;

    for (const storageOption of storageOptions) {
      expect(screen.getByText(storageOption.capacity)).toBeInTheDocument();
    }
  });

  it("should show updated price when selected storage options", () => {
    render(<SmartphoneDetailShoppingInfo />);
    const { storageOptions } = mockSmartphoneDetail;

    fireEvent.click(screen.getByText(storageOptions[0].capacity));
    expect(screen.getByText(storageOptions[0].price)).toBeInTheDocument();
  });

  it("should show updated img src when selected color options", () => {
    render(<SmartphoneDetailShoppingInfo />);
    const { colorOptions, name } = mockSmartphoneDetail;

    fireEvent.click(screen.getByRole("radio", { name: colorOptions[2].name }));
    expect(
      screen.getByAltText(`${name} in color ${colorOptions[2].name}`)
    ).toBeInTheDocument();

    const expectedUrlPart = encodeURIComponent(colorOptions[2].imageUrl);
    const regex = new RegExp(expectedUrlPart);

    expect(
      screen.getByAltText(`${name} in color ${colorOptions[2].name}`)
    ).toHaveAttribute("src", expect.stringMatching(regex));
  });

  it("should maintain addButton disabled until a storage and color are selected", () => {
    render(<SmartphoneDetailShoppingInfo />);
    const { colorOptions, storageOptions } = mockSmartphoneDetail;

    expect(screen.getByText(/add/i)).toBeDisabled();

    fireEvent.click(screen.getByRole("radio", { name: colorOptions[2].name }));
    fireEvent.click(screen.getByText(storageOptions[0].capacity));

    expect(screen.getByText(/add/i)).toBeEnabled();
  });
});

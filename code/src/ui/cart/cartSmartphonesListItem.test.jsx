import { fireEvent, render, screen } from "@testing-library/react";
import { mockCartSmartphones } from "@/test/testConstants";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import CartSmartphonesListItem from "@/ui/cart/CartSmartphonesListItem";
import { mockUseMessages } from "../../../jest.setup";

jest.mock("../contexts/ShoppingCartContext", () => ({
  useShoppingCart: jest.fn(),
}));

describe("CartSmartphonesListItem component", () => {
  const mockRemoveSmartphoneFromCart = jest.fn();
  const { name, storage, color, price, imageUrl, cartId } =
    mockCartSmartphones[0];

  beforeEach(() => {
    useShoppingCart.mockReturnValue({
      removeSmartphoneFromCart: mockRemoveSmartphoneFromCart,
    });
  });
  it("Should render with all required information", () => {
    render(
      <CartSmartphonesListItem
        name={name}
        storage={storage}
        color={color}
        price={price}
        imageUrl={imageUrl}
        cartId={cartId}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(storage))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(color))).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();

    const expectedUrlPart = encodeURIComponent(imageUrl);
    const regex = new RegExp(expectedUrlPart);
    expect(mockUseMessages).toHaveBeenCalledWith(
      "altText.smartphoneAndColorImage",
      { name, color }
    );
    expect(
      screen.getByAltText("altText.smartphoneAndColorImage")
    ).toHaveAttribute("src", expect.stringMatching(regex));
  });

  it("Should call removeSmartphoneFromCart with cartId when clicking on removeButton", () => {
    render(
      <CartSmartphonesListItem
        name={name}
        storage={storage}
        color={color}
        price={price}
        imageUrl={imageUrl}
        cartId={cartId}
      />
    );

    fireEvent.click(screen.getByText("cart.item.removeButton.label"));
    expect(mockRemoveSmartphoneFromCart).toHaveBeenCalledWith(cartId);
  });
});

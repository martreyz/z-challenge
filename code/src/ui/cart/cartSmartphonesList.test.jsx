import { render, screen } from "@testing-library/react";
import CartSmartphonesList from "@/ui/cart/CartSmartphonesList";
import { mockCartSmartphones } from "@/test/testConstants";
import { useShoppingCart } from "@/ui/contexts/ShoppingCartContext";
import { mockUseMessages } from "../../../jest.setup";

jest.mock("../contexts/ShoppingCartContext", () => ({
  useShoppingCart: jest.fn(),
}));

describe("CartSmartphonesList component", () => {
  it("Should render all products received and a total price sumatory", () => {
    useShoppingCart.mockReturnValue({
      removeSmartphoneFromCart: jest.fn(),
    });

    render(<CartSmartphonesList cartSmartphonesList={mockCartSmartphones} />);

    for (let { name } of mockCartSmartphones) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }

    const totalFormattedPrice = `${mockCartSmartphones.reduce(
      (acc, { price }) => acc + parseInt(price.replace(" EUR", "")),
      0
    )} EUR`;
    expect(mockUseMessages).toHaveBeenCalledWith("cart.total.label", {
      total: totalFormattedPrice,
    });

    expect(screen.getByText("cart.total.label")).toBeInTheDocument();
  });
});

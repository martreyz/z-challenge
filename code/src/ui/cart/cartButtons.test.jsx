import CartButtons from "@/ui/cart/CartButtons";

import { render, screen } from "@testing-library/react";

describe("CartButtons component", () => {
  it("Should render with only backbutton when cartSmartphonesQuantity is 0", () => {
    render(<CartButtons cartSmartphonesQuantity={0} />);
    expect(screen.getByText("cart.backButton.label")).toBeInTheDocument();
    expect(screen.queryByText("cart.payButton.label")).not.toBeInTheDocument();
  });

  it("Should render with both backbutton and paybutton when cartSmartphonesQuantity is not 0", () => {
    render(<CartButtons cartSmartphonesQuantity={1} />);
    expect(screen.getByText("cart.backButton.label")).toBeInTheDocument();
    expect(screen.getByText("cart.payButton.label")).toBeInTheDocument();
  });

  it("Should have landing page has href in back button", () => {
    render(<CartButtons cartSmartphonesQuantity={1} />);
    expect(screen.getByText("cart.backButton.label")).toHaveAttribute(
      "href",
      "/"
    );
  });
});

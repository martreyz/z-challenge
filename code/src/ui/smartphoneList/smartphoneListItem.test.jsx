import { render, screen } from "@testing-library/react";

import { mockSmartphoneList } from "@/test/testConstants";
import SmartphoneItem from "@/ui/smartphoneList/SmartphoneListItem";

describe("SmartphoneListItem component", () => {
  const { id, name, brand, basePrice, imageUrl } = mockSmartphoneList[0];

  beforeEach(() => {
    render(
      <SmartphoneItem
        id={id}
        name={name}
        brand={brand}
        basePrice={basePrice}
        imageUrl={imageUrl}
      />
    );
  });
  it("should render with the information received by props", () => {
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(brand)).toBeInTheDocument();
    expect(screen.getByText(basePrice)).toBeInTheDocument();
    expect(screen.getByAltText(`Image of ${brand} ${name}`));
  });

  it("should have a link to /products/id", () => {
    const linkElement = screen.getByRole("link", {
      name: "Redirect to product page",
    });
    expect(linkElement).toHaveAttribute("href", `/products/${id}`);
  });
});

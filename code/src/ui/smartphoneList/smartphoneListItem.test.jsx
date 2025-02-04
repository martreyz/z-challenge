import { render, screen } from "@testing-library/react";

import { mockSmartphoneList } from "@/test/testConstants";
import SmartphoneItem from "@/ui/smartphoneList/SmartphoneListItem";
import { mockUseMessages } from "../../../jest.setup";

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
    expect(mockUseMessages).toHaveBeenCalledWith(
      "altText.smartphoneAndBrandImage",
      { brand, name }
    );
    expect(screen.getByAltText("altText.smartphoneAndBrandImage"));
  });

  it("should have a link to /products/id", () => {
    const linkElement = screen.getByRole("link", {
      name: "ariaLabel.detailPage",
    });
    expect(linkElement).toHaveAttribute("href", `/products/${id}`);
  });
});

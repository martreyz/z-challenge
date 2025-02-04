import { render, screen } from "@testing-library/react";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import { mockSmartphoneDetail } from "@/test/testConstants";
import SmartphoneDetailSimilarProducts from "@/ui/smartphoneDetail/SmartphoneDetailSimilarProducts";
import { mockUseMessages } from "../../../jest.setup";

const mockSmartphoneDetailContext = {
  smartphoneDetail: mockSmartphoneDetail,
};

jest.mock("../contexts/SmartphoneDetailContext", () => ({
  useSmartphoneDetailContext: jest.fn(),
}));

describe("SmartphoneDetailSimilarProducts component", () => {
  beforeEach(() => {
    useSmartphoneDetailContext.mockReturnValue(mockSmartphoneDetailContext);
  });
  it("should render all similar products", () => {
    render(<SmartphoneDetailSimilarProducts />);

    for (const {
      name,
      brand,
      basePrice,
    } of mockSmartphoneDetail.similarProducts) {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(brand)).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(`\\b${basePrice}\\s*EUR\\b`))
      ).toBeInTheDocument();
      expect(mockUseMessages).toHaveBeenCalledWith(
        "altText.smartphoneAndBrandImage",
        { brand, name }
      );
      expect(
        screen.getAllByAltText("altText.smartphoneAndBrandImage")
      ).not.toHaveLength(0);
    }
  });
});

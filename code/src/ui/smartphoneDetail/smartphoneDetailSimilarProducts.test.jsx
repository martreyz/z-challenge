import { render, screen } from "@testing-library/react";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import { mockSmartphoneDetail } from "@/test/testConstants";
import SmartphoneDetailSimilarProducts from "@/ui/smartphoneDetail/SmartphoneDetailSimilarProducts";

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
      expect(screen.getByAltText(`Image of ${brand} ${name}`));
    }
  });
});

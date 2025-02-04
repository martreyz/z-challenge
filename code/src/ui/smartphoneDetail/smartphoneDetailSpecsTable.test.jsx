import { render, screen } from "@testing-library/react";

import { useSmartphoneDetailContext } from "@/ui/contexts/SmartphoneDetailContext";
import { mockSmartphoneDetail } from "@/test/testConstants";
import SmartphoneDetailSpecsTable from "@/ui/smartphoneDetail/SmartphoneDetailSpecsTable";

const mockSmartphoneDetailContext = {
  smartphoneDetail: mockSmartphoneDetail,
};

jest.mock("../contexts/SmartphoneDetailContext", () => ({
  useSmartphoneDetailContext: jest.fn(),
}));

describe("SmartphoneDetailSpecsTable component", () => {
  beforeEach(() => {
    useSmartphoneDetailContext.mockReturnValue(mockSmartphoneDetailContext);
  });
  it("should render all the labels and received specs", () => {
    render(<SmartphoneDetailSpecsTable />);

    expect(
      screen.getByText("smartphoneDetail.specs.brand")
    ).toBeInTheDocument();
    expect(screen.getByText("smartphoneDetail.specs.name")).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.description")
    ).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.screen")
    ).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.resolution")
    ).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.processor")
    ).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.mainCamera")
    ).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.selfieCamera")
    ).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.battery")
    ).toBeInTheDocument();
    expect(screen.getByText("smartphoneDetail.specs.os")).toBeInTheDocument();
    expect(
      screen.getByText("smartphoneDetail.specs.screenRefreshRate")
    ).toBeInTheDocument();

    for (const value of Object.values(mockSmartphoneDetail.specs)) {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  });
});

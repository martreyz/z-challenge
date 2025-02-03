import { render, screen } from "@testing-library/react";

import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import SmartphoneList from "@/ui/smartphoneList/SmartphoneList";
import { mockSmartphoneList } from "@/test/testConstants";

const mockSmartphoneListContext = {
  smartphoneList: mockSmartphoneList,
};

jest.mock("../contexts/SmartphoneListContext", () => ({
  useSmartphoneListContext: jest.fn(),
}));

describe("SmartphoneList component", () => {
  beforeEach(() => {
    useSmartphoneListContext.mockReturnValue(mockSmartphoneListContext);
  });
  it("should render with the list received from hook", () => {
    render(<SmartphoneList />);

    for (let i = 0; i < mockSmartphoneList.length; i++) {
      expect(screen.getByText(mockSmartphoneList[i].name)).toBeInTheDocument();
    }
  });
});

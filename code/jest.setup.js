require("@testing-library/jest-dom");

require("@testing-library/react");

require("jest-fetch-mock").enableMocks();

export const mockUseMessages = jest.fn((key) => key);
jest.mock("./src/ui/hooks/useMessages", () => ({
  useMessages: jest.fn(() => mockUseMessages),
}));

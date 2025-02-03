import { useMessages } from "@/ui/hooks/useMessages";

require("@testing-library/jest-dom");

require("@testing-library/react");

require("jest-fetch-mock").enableMocks();

jest.mock("./src/ui/hooks/useMessages", () => ({
  useMessages: jest.fn(() => (key) => key),
}));

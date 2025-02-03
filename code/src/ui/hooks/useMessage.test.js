/* eslint-disable import/first */
jest.unmock("../hooks/useMessages");

import { renderHook } from "@testing-library/react";
import { useMessages } from "@/ui/hooks/useMessages";

describe("useMessages", () => {
  it("should return the correct message for a valid key", () => {
    const { result } = renderHook(() => useMessages());
    const getMessage = result.current;

    const message = getMessage("searcher.input.helper", {
      numberOfResults: 10,
    });

    expect(message).toBe("10 results");
  });

  it("should warn and return the key if the message key is not found", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    const { result } = renderHook(() => useMessages());
    const getMessage = result.current;

    const message = getMessage("non.existent.key");

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Key "non.existent.key" not found in messages.'
    );
    expect(message).toBe("non.existent.key");

    consoleWarnSpy.mockRestore();
  });

  it("should return a default message when no parameters are provided", () => {
    const { result } = renderHook(() => useMessages());
    const getMessage = result.current;

    const message = getMessage("cart.title");

    expect(message).toBe("Cart (0)");
  });

  it("should correctly replace parameters in the message", () => {
    const { result } = renderHook(() => useMessages());
    const getMessage = result.current;

    const message = getMessage("cart.total.label", { total: "150 EUR" });

    expect(message).toBe("Total 150 EUR");
  });

  it("should handle multiple parameter replacements", () => {
    const { result } = renderHook(() => useMessages());
    const getMessage = result.current;

    const message = getMessage("smartphoneDetail.priceFrom.label", {
      basePrice: "500 EUR",
    });

    expect(message).toBe("From 500 EUR");
  });
});

import { renderHook, act } from "@testing-library/react";
import { useSmartphoneSearcher } from "./useSmartphoneSearcher";

describe("useSmartphoneSearcher", () => {
  it("should initialize with undefined search criteria", () => {
    const updateSmartphoneListData = jest.fn();

    const { result } = renderHook(() =>
      useSmartphoneSearcher(updateSmartphoneListData)
    );

    expect(result.current.searchCriteria).toBeUndefined();
  });

  it("should update search criteria when handleSearchCriteriaChange is called", () => {
    const updateSmartphoneListData = jest.fn();

    const { result } = renderHook(() =>
      useSmartphoneSearcher(updateSmartphoneListData)
    );

    act(() => {
      result.current.handleSearchCriteriaChange("New Search");
    });

    expect(result.current.searchCriteria).toBe("New Search");
  });

  it("should call updateSmartphoneListData when search criteria changes", () => {
    const updateSmartphoneListData = jest.fn();

    const { result } = renderHook(() =>
      useSmartphoneSearcher(updateSmartphoneListData)
    );

    act(() => {
      result.current.handleSearchCriteriaChange("Test Search");
    });

    expect(updateSmartphoneListData).toHaveBeenCalledWith("Test Search");
    expect(updateSmartphoneListData).toHaveBeenCalledTimes(1);
  });

  it("should not call updateSmartphoneListData initially", () => {
    const updateSmartphoneListData = jest.fn();

    renderHook(() => useSmartphoneSearcher(updateSmartphoneListData));

    expect(updateSmartphoneListData).not.toHaveBeenCalled();
  });
});

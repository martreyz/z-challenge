"use client";

import { createContext, useState, useContext, useEffect } from "react";

const SmartphoneListContext = createContext();

export const useSmartphoneListContext = () => useContext(SmartphoneListContext);

export const SmartphoneListProvider = ({ children }) => {
  const [smartphoneList, setSmartphoneList] = useState([]);

  const updateSmartphoneListData = async (searchCriteria) => {
    const params = searchCriteria && `search=${searchCriteria}`;
    const smartphoneListResponse = await fetch(`/api/products?${params}`);
    const smartphoneList = await smartphoneListResponse.json();
    updateSmartphoneList(smartphoneList);
  };

  useEffect(() => {
    updateSmartphoneListData();
  }, []);

  const updateSmartphoneList = (newSmartphoneList) =>
    setSmartphoneList(newSmartphoneList);

  return (
    <SmartphoneListContext.Provider
      value={{
        smartphoneList,
        updateSmartphoneListData,
        numberOfResults: smartphoneList.length,
      }}
    >
      {children}
    </SmartphoneListContext.Provider>
  );
};

"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const SmartphoneListContext = createContext();

export const useSmartphoneListContext = () => useContext(SmartphoneListContext);

export const SmartphoneListProvider = ({ children }) => {
  const [smartphoneList, setSmartphoneList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const smartphoneInitialListResponse = await fetch("/api/products");
      const smartphoneInitialList = await smartphoneInitialListResponse.json();
      setSmartphoneList(smartphoneInitialList);
    };
    fetchData();
  }, []);

  const updateSmartphoneList = (newSmartphoneList) =>
    setSmartphoneList(newSmartphoneList);

  return (
    <SmartphoneListContext.Provider
      value={{
        smartphoneList,
        updateSmartphoneList,
        numberOfResults: smartphoneList.length,
      }}
    >
      {children}
    </SmartphoneListContext.Provider>
  );
};

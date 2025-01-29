"use client";

import React, { createContext, useState, useContext } from "react";

const SmartphoneListContext = createContext();

export const useSmartphoneListContext = () => useContext(SmartphoneListContext);

export const SmartphoneListProvider = ({ children }) => {
  const [smartphoneList, setSmartphoneList] = useState(undefined);

  const updateSmartphoneList = (newSmartphoneList) =>
    setSmartphoneList(newSmartphoneList);

  return (
    <SmartphoneListContext.Provider
      value={{ smartphoneList, updateSmartphoneList }}
    >
      {children}
    </SmartphoneListContext.Provider>
  );
};

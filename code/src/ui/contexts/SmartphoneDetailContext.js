"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const SmartphoneDetailContext = createContext();

export const useSmartphoneDetailContext = () =>
  useContext(SmartphoneDetailContext);

export const SmartphoneDetailProvider = ({ id, children }) => {
  const [smartphoneDetail, setSmartphoneDetail] = useState({});

  useEffect(() => {
    const updateSmartphoneDetailData = async (id) => {
      if (!id) return;

      const smartphoneDetailResponse = await fetch(`/api/products/${id}`);
      const smartphoneDetail = await smartphoneDetailResponse.json();
      updateSmartphoneDetail(smartphoneDetail);
    };
    updateSmartphoneDetailData(id);
  }, [id]);

  const updateSmartphoneDetail = (newSmartphoneDetail) =>
    setSmartphoneDetail(newSmartphoneDetail);

  return (
    <SmartphoneDetailContext.Provider
      value={{
        smartphoneDetail,
      }}
    >
      {children}
    </SmartphoneDetailContext.Provider>
  );
};

"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const SmartphoneDetailContext = createContext();

export const useSmartphoneDetailContext = () =>
  useContext(SmartphoneDetailContext);

export const SmartphoneDetailProvider = ({ id, children }) => {
  const [loading, setLoading] = useState(true);

  const updateSmartphoneDetailData = async (id) => {
    if (!id) return;

    const smartphoneDetailResponse = await fetch(`/api/products/${id}`);
    const smartphoneDetail = await smartphoneDetailResponse.json();
    updateSmartphoneDetail(smartphoneDetail);

    setLoading(false);
  };
  const [smartphoneDetail, setSmartphoneDetail] = useState({});

  useEffect(() => {
    updateSmartphoneDetailData(id);
  }, [id]);

  const updateSmartphoneDetail = (newSmartphoneDetail) => {
    setSmartphoneDetail(newSmartphoneDetail);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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

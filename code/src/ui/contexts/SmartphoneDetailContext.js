"use client";

import { createContext, useState, useContext, useEffect } from "react";

const SmartphoneDetailContext = createContext();

export const useSmartphoneDetailContext = () =>
  useContext(SmartphoneDetailContext);

export const SmartphoneDetailProvider = ({ id, children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [smartphoneDetail, setSmartphoneDetail] = useState({});

  const updateSmartphoneDetailData = async (id) => {
    try {
      if (!id) {
        throw new Error("Product ID is required");
      }

      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch smartphone details. Status: ${response.status}`
        );
      }

      const smartphoneDetail = await response.json();
      setSmartphoneDetail(smartphoneDetail);
      setLoading(false);
    } catch (err) {
      console.error(`Error fetching smartphone details: ${err.message}`);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateSmartphoneDetailData(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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

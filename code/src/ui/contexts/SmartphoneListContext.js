"use client";

import { createContext, useState, useContext, useEffect } from "react";

const SmartphoneListContext = createContext();

export const useSmartphoneListContext = () => useContext(SmartphoneListContext);

export const SmartphoneListProvider = ({ children }) => {
  const [smartphoneList, setSmartphoneList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateSmartphoneListData = async (searchCriteria) => {
    try {
      const params = searchCriteria ? `search=${searchCriteria}` : "";
      const response = await fetch(`/api/products?${params}`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch smartphone list. Status: ${response.status}`
        );
      }

      const smartphoneList = await response.json();
      setSmartphoneList(smartphoneList);
      setLoading(false);
    } catch (err) {
      console.error(`Error fetching smartphone list: ${err.message}`);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateSmartphoneListData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

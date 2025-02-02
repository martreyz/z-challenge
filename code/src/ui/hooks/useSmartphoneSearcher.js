import { useEffect, useState } from "react";

export const useSmartphoneSearcher = (updateSmartphoneListData) => {
  const [searchCriteria, setSearchCriteria] = useState(undefined);

  const handleSearchCriteriaChange = (newSearchCriteria) => {
    setSearchCriteria(newSearchCriteria);
  };

  useEffect(() => {
    updateSmartphoneListData(searchCriteria);
  }, [searchCriteria]);

  return { searchCriteria, handleSearchCriteriaChange };
};

import { useEffect, useState } from "react";

const useSmartphoneSearcher = (updateSmartphoneListData) => {
  const [searchCriteria, setSearchCriteria] = useState(undefined);

  const handleSearchCriteriaChange = (newSearchCriteria) => {
    setSearchCriteria(newSearchCriteria);
  };

  useEffect(() => {
    updateSmartphoneListData(searchCriteria);
  }, [searchCriteria]);

  return { searchCriteria, handleSearchCriteriaChange };
};

export default useSmartphoneSearcher;

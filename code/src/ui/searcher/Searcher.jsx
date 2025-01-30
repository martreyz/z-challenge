"use client";

import styles from "@/styles/searcher.module.css";
import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import useSmartphoneSearcher from "@/ui/hooks/useSmartphoneSearcher";

const Searcher = () => {
  const { numberOfResults, updateSmartphoneListData } =
    useSmartphoneListContext();
  const { searchCriteria, handleSearchCriteriaChange } = useSmartphoneSearcher(
    updateSmartphoneListData
  );

  return (
    <section className={styles.searcher}>
      <form className={styles.searcherForm}>
        <input
          className={styles.searcherInput}
          value={searchCriteria}
          onChange={(ev) => handleSearchCriteriaChange(ev.currentTarget.value)}
          type="text"
          placeholder="Search for a smartphone..."
        />
        <button type="submit">Search</button>
      </form>
      <p className={styles.resultsCounter}>{numberOfResults} results</p>
    </section>
  );
};

export default Searcher;

"use client";

import styles from "@/styles/searcher.module.css";
import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";

const Searcher = ({ searchInput, handleSearchInputChange }) => {
  const { numberOfResults } = useSmartphoneListContext();

  return (
    <section className={styles.searcher}>
      <form className={styles.searcherForm}>
        <input
          className={styles.searcherInput}
          value={searchInput}
          onChange={handleSearchInputChange}
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

"use client";

import styles from "@/styles/searcher.module.css";
import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import { useSmartphoneSearcher } from "@/ui/hooks/useSmartphoneSearcher";
import { useMessages } from "../hooks/useMessages";

const Searcher = () => {
  const { numberOfResults, updateSmartphoneListData } =
    useSmartphoneListContext();
  const { searchCriteria, handleSearchCriteriaChange } = useSmartphoneSearcher(
    updateSmartphoneListData
  );

  const messages = useMessages();

  return (
    <section className={styles.searcher}>
      <form className={styles.searcherForm}>
        <input
          className={styles.searcherInput}
          value={searchCriteria}
          onChange={(ev) => handleSearchCriteriaChange(ev.currentTarget.value)}
          type="text"
          placeholder={messages("searcher.input.placeholder")}
        />
        <button type="submit">Search</button>
      </form>
      <p className={styles.resultsCounter}>
        {messages("searcher.input.helper", { numberOfResults })}
      </p>
    </section>
  );
};

export default Searcher;

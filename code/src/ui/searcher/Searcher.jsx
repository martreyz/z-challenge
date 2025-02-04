"use client";

import styles from "@/styles/smartphoneListModules/searcher.module.css";
import { useSmartphoneListContext } from "@/ui/contexts/SmartphoneListContext";
import { useSmartphoneSearcher } from "@/ui/hooks/useSmartphoneSearcher";
import { useMessages } from "@/ui/hooks/useMessages";

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
          aria-labelledby={messages("ariaLabel.searcher")}
          className={styles.searcherInput}
          value={searchCriteria}
          onChange={(ev) => handleSearchCriteriaChange(ev.currentTarget.value)}
          type="text"
          placeholder={messages("searcher.input.placeholder")}
        />
      </form>
      <p className={styles.resultsCounter}>
        {messages("searcher.input.helper", { numberOfResults })}
      </p>
    </section>
  );
};

export default Searcher;

"use client";

import styles from "@/styles/searcher.module.css";

const Searcher = ({
  numberOfResults,
  searchInput,
  handleSearchInputChange,
}) => {
  return (
    <>
      <form>
        <input
          className={styles.searcherInput}
          value={searchInput}
          onChange={handleSearchInputChange}
          type="text"
          placeholder="Search for a smartphone..."
        />
        <button type="submit">Search</button>
      </form>
      <p className={styles.counter}>{numberOfResults} results</p>
    </>
  );
};

export default Searcher;

"use client";

import Searcher from "@/ui/productList/Searcher";
import { useState } from "react";
import { useSmartphoneListContext } from "../contexts/SmartphoneListContext";

const ProductListWrapper = ({ allSmartphones }) => {
  const { updateSmartphoneList, smartphoneList } = useSmartphoneListContext();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    console.log(handleSearch);
  };
  return (
    <Searcher
      handleSearchInputChange={handleSearchInputChange}
      searchInput={searchInput}
      numberOfResults={allSmartphones.length}
    />
  );
};

export default ProductListWrapper;

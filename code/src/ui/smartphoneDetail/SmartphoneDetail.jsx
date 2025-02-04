"use client";

import styles from "@/styles/smartphoneDetailModules/smartphoneDetail.module.css";

import SmartphoneDetailShoppingInfo from "./SmartphoneDetailShoppingInfo";
import SmartphoneDetailSpecsTable from "./SmartphoneDetailSpecsTable";
import SmartphoneDetailSimilarProducts from "./SmartphoneDetailSimilarProducts";

const SmartphoneDetail = () => {
  return (
    <section className={styles.smartphoneDetail}>
      <SmartphoneDetailShoppingInfo />
      <SmartphoneDetailSpecsTable />
      <SmartphoneDetailSimilarProducts />
    </section>
  );
};

export default SmartphoneDetail;

import React from "react";
import CollectionList from "./collectionsList";
import MainSlider from "./mainSlider";
import ProductsLis from "../product/productsList";
import FullBanner from "./banner";

const Home = () => {
  return (
    <div className="main-wrapper">
      <MainSlider />
      <ProductsLis />
      <FullBanner />
      <CollectionList />
    </div>
  );
};

export default Home;

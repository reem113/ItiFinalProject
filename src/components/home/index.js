import React from "react";
import CollectionList from "./collectionsList";
import MainSlider from "./mainSlider";
import ProductsLis from "./productsList";
import FullBanner from "./banner";

const Home = ({ products }) => {
  return (
    <div className="main-wrapper">
      <MainSlider />
      <ProductsLis products={products} />
      <FullBanner />
      <CollectionList />
    </div>
  );
};

export default Home;

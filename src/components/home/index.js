import React from "react";
import CollectionList from "./collectionsList";
import MainSlider from "./mainSlider";
import ProductsLis from "./productsList";

const Home = ({ products }) => {
  return (
    <div className="main-wrapper">
      <MainSlider />
      <CollectionList />
      <ProductsLis products={products} />
    </div>
  );
};

export default Home;

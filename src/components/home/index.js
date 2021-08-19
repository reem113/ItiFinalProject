import React from "react";
import CollectionList from "./collectionsList";
import MainSlider from "./mainSlider";
import ProductsLis from "./productsList";

class Home extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <MainSlider />
        <CollectionList />
        <ProductsLis />
      </div>
    );
  }
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

class CollectionList extends React.Component {
  render() {
    return (
      <section className="home-products collection-list">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 left-grid">
              <h2>Get your Fashion style</h2>
              <p>
                You’ll always be in fashion with our <br /> collection of
                clothing{" "}
              </p>
              <div className="view_all__wrap col-12 px-0 mt-3">
                <Link to="" className="link link-primary">
                  Explore collections
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <Link className="collection_item" to="">
                <div className="collection_img">
                  <img
                    className="blur-up img-fluid w-100 img-fluid lazyloaded"
                    src="//cdn.shopify.com/s/files/1/0551/8001/collections/packable_roll_sleeve_anorak_1_370x489_crop_top.progressive.png.jpg?v=1610973378"
                    alt="Women"
                  />
                </div>
                <div className="collection_caption position-bottom">
                  <h6 className="collection_title mb-0">Women</h6>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <Link className="collection_item" to="/collections/mens">
                <div className="collection_img">
                  <img
                    className="blur-up img-fluid w-100 img-fluid lazyloaded"
                    src="//cdn.shopify.com/s/files/1/0551/8001/collections/col-image-2_370x489_crop_top.progressive.jpg?v=1610973484"
                    alt="Mens"
                  />
                </div>
                <div className="collection_caption position-bottom">
                  <h6 className="collection_title mb-0">Mens</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CollectionList;

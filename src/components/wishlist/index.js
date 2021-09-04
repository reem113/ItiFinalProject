import React from "react";
import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";
import BreadCrumb from "../breadcrumb";

const Wishlist = (props) => {
  const { wishlist, onRemoveWishlistProduct } = props;
  console.log("wishlissssssst", wishlist);

  return (
    <>
      <BreadCrumb />
      <section className="cart_wrapper">
        {wishlist?.length && (
          <div className="container mt-5">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr className="bg-grey">
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((product, index, arr) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="table-product-view">
                            <img
                              src={product.product.images[0]}
                              alt="product name"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="product_name">
                            {product.product.name}
                          </span>
                        </td>
                        <td>
                          <div>{product.product.price} $</div>
                        </td>
                        <td>
                          <div
                            className="product-remove"
                            onClick={() =>
                              onRemoveWishlistProduct(product.product._id)
                            }
                          >
                            <AiFillCloseCircle />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-grey">
                  <tr>
                    <th colSpan="6">
                      <Link className="btn btn-main btn-200" to="/">
                        Go To Home
                      </Link>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Wishlist;

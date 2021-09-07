import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";
import BreadCrumb from "../breadcrumb";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(null);
  const [wishlistChange, setWishlistChange] = useState(false);

  const getWishlistProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/wishlist"
      );
      const WishlistProducts = await response.json();
      setWishlist(WishlistProducts.user.wishlist);
    } catch (error) {}
  };
  const removeWishlistProduct = async (productId) => {
    const URL = `http://localhost:8000/api/v1/users/610c965d7c24830ff49c91d9/wishlist/${productId}`;
    try {
      const response = await fetch(URL, {
        method: "DELETE",
      });
      const WishlistProducts = await response.json();
      setWishlistChange(!wishlistChange);
    } catch (error) {}
  };

  useEffect(() => {
    getWishlistProducts();
  }, []);

  useEffect(() => {
    getWishlistProducts();
  }, [wishlistChange]);

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
                              removeWishlistProduct(product.product._id)
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

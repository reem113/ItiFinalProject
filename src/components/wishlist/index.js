import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistAction";
import { AiFillCloseCircle } from "react-icons/ai";
import BreadCrumb from "../breadcrumb";

const Wishlist = (props) => {
  const wishlist = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];
  const dispatch = useDispatch();

  return (
    <>
      <BreadCrumb />
      <section className="cart_wrapper">
        <div className="cart-status">
          {wishlist.length === 0 ? (
            <span className="alert alert-danger text-center">
              "Your Wishlist is empty"
            </span>
          ) : (
            <span className="alert alert-success text-center">
              You have {wishlist.length} items in the Wishlist.
            </span>
          )}
        </div>
        {wishlist.length > 0 && (
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
                  {wishlist.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="table-product-view">
                            <img src={item.images[0]} alt="product name" />
                          </div>
                        </td>
                        <td>
                          <span className="product_name">{item.name}</span>
                        </td>
                        <td>
                          <div>{item.price} $</div>
                        </td>
                        <td>
                          <div
                            className="product-remove"
                            onClick={() => dispatch(removeFromWishlist(item))}
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

const mapStateToProps = (state) => ({
  wishlist: state.wishlist.wishlist,
});
export default connect(mapStateToProps, { addToWishlist, removeFromWishlist })(
  Wishlist
);

import React from "react";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  render() {
    return (
      <>
        <form className="container">
          <div className="mb-3">
            <label className="form-label" for="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control "
              value=""
              onChange={() => {}}
              placeholder="Name"
              id="name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="address">
              Address:
            </label>
            <input
              type="text"
              name="street"
              className="form-control"
              value=""
              onChange={() => {}}
              placeholder="Street Address"
              id="street"
            />
            <input
              type="text"
              name="apartment"
              className="form-control mt-3"
              value=""
              onChange={() => {}}
              placeholder="Apartment,suite,unit,etc(optional)"
              id="apartment"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="city">
              City:
            </label>
            <input
              type="text"
              name="city"
              className="form-control"
              value=""
              onChange={() => {}}
              placeholder="city"
              id="city"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="country">
              Country
            </label>
            <input
              type="text"
              name="country"
              className="form-control"
              value=""
              onChange={() => {}}
              placeholder="country"
              id="country"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="zip">
              Zip Code:
            </label>
            <input
              type="text"
              name="zip"
              className="form-control"
              value=""
              onChange={() => {}}
              placeholder="12345"
              id="zip"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="email">
              E-mail:
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              value=""
              onChange={() => {}}
              placeholder="example@domain.com"
              id="email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="phoneNo">
              Phone NO.:
            </label>
            <input
              type="number"
              name="phoneNo"
              className="form-control"
              value=""
              onChange={() => {}}
              placeholder="01*********"
              id="phoneNo"
            />
          </div>

          <div className="form-container center">
            <span className="form-label">Total</span>
            <h2>$1200</h2>
          </div>

          <div className="d-flex justify-content-center m-2">
            <Link className="btn-main" to="/">
              Place Order
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default Checkout;

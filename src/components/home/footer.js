import React from "react";
import Logo from "../../images/logo_white.png";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-3">
              <div className="img">
                <img className="img-fluid" src={Logo} alt="company" />
              </div>
              <p className="d-block">
                <span className="mx-2">
                  <FaMapMarkerAlt />
                </span>
                59 Egypt, Mansoura University,ITI
              </p>
              <p className="d-block">
                <span className="mx-2">
                  <BiPhoneCall />
                </span>
                +012 345 67890
              </p>
            </div>
            <div className="col-12 col-md-3">
              <h4>Information</h4>
              <hr />
              <div className="footer-links">
                <Link className="link" to="">
                  About Us
                </Link>
                <Link className="link" to="">
                  Latest Post
                </Link>
                <Link className="link" to="">
                  Selling Tips
                </Link>
                <Link className="link" to="">
                  Advertising
                </Link>
                <Link className="link" to="">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <h4>My Account</h4>
              <hr />
              <div className="footer-links">
                <Link className="link" to="">
                  My Account
                </Link>
                <Link className="link" to="">
                  Login/Register
                </Link>
                <Link className="link" to="">
                  Cart
                </Link>
                <Link className="link" to="">
                  Wishlist
                </Link>
                <Link className="link" to="">
                  Order History
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <h4>Help & Support</h4>
              <hr />
              <div className="footer-links">
                <Link className="link" to="">
                  How To Shop
                </Link>
                <Link className="link" to="">
                  Payment
                </Link>
                <Link className="link" to="">
                  Returns
                </Link>
                <Link className="link" to="">
                  Delivery
                </Link>
                <Link className="link" to="">
                  Privacy & Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="final-footer">
            <div className="d-flex flex-row justify-content-between">
              <p>
                <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
                Copyright 2021.
              </p>
              <div className="links">
                <Link to="https://www.facebook.com/">
                  <i>
                    <AiFillFacebook size={25} />
                  </i>
                </Link>
                <Link to="https://www.twitter.com/">
                  <i>
                    <AiFillTwitterCircle size={25} />
                  </i>
                </Link>
                <Link to="https://www.linkedin.com/">
                  <i>
                    <AiFillInstagram size={25} />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

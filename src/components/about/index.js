import React from 'react';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router';
import BreadCrumb from '../breadcrumb';

export default function About() {
  const history = useHistory();
  const handleButton = () => {
    history.push("/");
  }
  return (

    <>
      <div>
        <BreadCrumb />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <h2 className="m-3">Who We Are?!</h2>
              <p className="p-2">
                Online shopping is also known as searching for a product by
                visiting the store's website, and then preparing the purchase
                order for the product you want. Other online shop definition
                include a range of sales and purchases that include many types
                of goods such as homes, clothing, electronics, accessories,
                and other products.
                <br />
                <br />
                Online shopping is a relatively new concept; the shopper may
                be concerned about fraud or theft, forget about any
                information about the purchase electronic account, such as a
                password, and may not trust that his or her personal
                information will be safe with merchants through so many people
                are dealing with the idea of shopping online very carefully,
                which is necessary in this type of shopping; because it helps
                to protect individuals from any operations of electronic
                fraud.
              </p>
              <button className="btn btn-main btn-200 btn-hover"
                onClick={handleButton}>
                Take a Tour
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <img className="m-3" src="https://dmexco.com/wp-content/uploads/2018/12/Fotolia_207963156_Subscription_Monthly_M.jpg" width="100%" height="400px" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h2 className="p-3 m-2 center">Why Shop From Us </h2>
          <div className="container">
            <div className="row">
              <div className="card  col-lg-3 col-md-4 col-sm-12">
                <h4 className="center">FREE SHIPPING</h4>
                <Divider />
                <p className="p-2">
                  Lorem Ipsum hasbeen standard daand scrambled. Rimply dummy
                  text of the printing and typesetting industry
                </p>
              </div>
              <div className="card col-lg-3 col-md-4 col-sm-12">
                <h4 className="center">24/7 SUPPORT</h4>
                <Divider />
                <p className="p-2">
                  Lorem Ipsum hasbeen standard daand scrambled. Rimply dummy
                  text of the printing and typesetting industry
                </p>
              </div>
              <div className="card col-lg-3 col-md-4 col-sm-12">
                <h4 className="center">EASY RETURN</h4>
                <Divider />
                <p className="p-2">
                  Lorem Ipsum hasbeen standard daand scrambled. Rimply dummy
                  text of the printing and typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}


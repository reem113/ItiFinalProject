import React from "react";
import { Link, useHistory } from "react-router-dom";

const BreadCrumb = ({ url }) => {
  const history = useHistory();
  let activeLink = history.location.pathname;

  return (
    <section className="breadcrumbs_wrapper banner_bg">
      <div className="container">
        {/* <h6>{activeLink}</h6> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {activeLink}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadCrumb;

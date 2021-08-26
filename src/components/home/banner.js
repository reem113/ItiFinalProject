import React from "react";
import { Link } from "react-router-dom";

class FullBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { someProp } = this.props;

    return (
      <section className="section full-bg-cover">
        <div className="container">
          <h3 className="main-title">
            End of Season Clearance
            <br />
            Sale upto 30%
          </h3>
          <p>
            Stock is limited. Order now to avoid
            <br />
            disappointment.
          </p>
          <Link to="" className="btn btn-main btn-hover btn-200">
            Shop Now
          </Link>
        </div>
      </section>
    );
  }
}

export default FullBanner;

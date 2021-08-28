import React from "react";
import { Link } from "react-router-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="p-5">
        <div className="d-flex justify-content-center p-2">
          <Link className="btn btn-main btn-200 me-3" to="/login">
            Login
          </Link>
          <Link className="btn btn-border btn-200" to="/signup">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default Account;

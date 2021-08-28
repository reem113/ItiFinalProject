import React, { useState } from "react";
import Logo from "../../images/logo_company.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import $ from "jquery";

import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function loginUser(e) {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (!data.success) {
          console.log(data.message);
          if (data.message == "This email doesn't exist!") {
            // $(".email-err").text(data.message);
          } else if (
            data.message == "Authentication failed, password is incorrect!"
          ) {
            $(".email-err").hide();
            $(".psw-err").text(data.message);
          }
        } else {
          $(".email-err").hide();
          $(".psw-err").hide();
          localStorage.setItem("User Token", data.token);
          localStorage.setItem("Email", data.userEmail);
          localStorage.setItem("ID", data.userId);
          history.push("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <section className="login_wrapper">
      <div className="form-container">
        <div className="d-flex justify-content-center">
          <img src={Logo} alt="Logo" />
        </div>
        <form
          method="POST"
          onSubmit={(event) => {
            loginUser(event);
          }}
        >
          <div className="email-div input-group">
            {/* <span className="input-group-text p-4"><AiOutlineUser /></span> */}
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="E-mail"
              required
            />
          </div>

          <span className="email-err"></span>

          <div className="psw-div input-group mt-3 mb-2">
            {/* <span className="input-group-text p-4"><AiOutlineLock /></span> */}
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Password"
              required
            />
          </div>

          <span className="psw-err"></span>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input p-2"
                id="rememberCheckBox"
              />
              <label
                className="custom-control-label m-2 form-text"
                for="rememberCheckBox"
              >
                Remember me
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
            <input type="submit" value="Login" className="btn btn-main" />
          </div>
        </form>
        <div className="mt-4">
          <div className="d-flex justify-content-center links form-text ">
            Don't have an account?{" "}
            <Link className="ml-2 signup-link" to="/signup">
              <u>Sign Up</u>
            </Link>
          </div>
          <div className="d-flex justify-content-center links form-text">
            <Link to="#">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

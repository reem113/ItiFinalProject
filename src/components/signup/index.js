import { React, useState } from "react";
import { useHistory } from "react-router";
import $ from "jquery";
import axios from "axios";

export default function SignUp() {
  const [name, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  const handlePasswordConfirmation = (event) => {
    event.target.value === password
      ? $(".psw")
        .text("password confirmed")
        .removeClass("alert-danger")
        .addClass("alert-success")
      : $(".psw")
        .text("password mismatch")
        .removeClass("alert-success")
        .addClass("alert-danger");
  };

  const register = async (e) => {
    console.log("123");
    e.preventDefault();

    console.log("123");
    let user = { name, email, password, phone };

    axios.post("http://localhost:8000/api/v1/users/register", user).then(() => {

      setUsername('');
      setEmail('');
      setPhone('');
      setPassword('');
      history.push("/login");
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="form-container ">
        <h2 className=" m-2">Registeration Form</h2>

        <form method="POST" onSubmit={(e) => register(e)}>
          <div className="mb-3">
            <label className="form-label" for="name">
              Username:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              placeholder="Username"
              id="name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="phone">
              Phone NO. :
            </label>
            <input
              type="number"
              name="phone"
              value={phone}
              className="form-control"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              placeholder="01*********"
              id="phone"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="email">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="example@domain.com"
              id="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" for="password">
              Password:
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Password "
              id="password"
              required
            />
            <input
              type="password"
              name="password"
              className="form-control mt-3 mb-2"
              onChange={handlePasswordConfirmation}
              placeholder="Confirm Password"
              id="passwordConfirmation"
              required
            />
            <strong className="psw alert fade show p-1 m-2"></strong>
          </div>

          <div className="d-flex justify-content-center ">
            <button type="submit" className="btn btn-main btn-hover btn-200">

              Register

            </button>
          </div>
        </form>
      </div>
    </>
  );
}

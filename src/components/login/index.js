import React, { useState, useEffect } from 'react'
import Logo from "../../images/logo_company.svg";
import { Link } from "react-router-dom";



import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function loginUser(e) {
        e.preventDefault()

        fetch('http://localhost:3000/api/v1/users/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (!data.success) console.log("---------------------")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div class="form-container">
                <div class="d-flex justify-content-center">
                    <img src={Logo} alt="Logo" />
                </div>
                <form method="POST" onSubmit={(event) => { loginUser(event) }}>
                    <div class="input-group mb-3">
                        <span class="input-group-text p-4"><AiOutlineUser /></span>
                        <input type="email" name="email" class="form-control" onChange={(event) => { setEmail(event.target.value) }} placeholder="E-mail" />
                    </div>

                    <div class="input-group mb-2">
                        <span class="input-group-text p-4"><AiOutlineLock /></span>
                        <input type="password" name="password" class="form-control" onChange={(event) => { setPassword(event.target.value) }} placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input p-2" id="rememberCheckBox" />
                            <label class="custom-control-label m-2 form-text" for="rememberCheckBox">Remember me</label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center ">
                        <input type="submit" value="Login" className="btn btn-main" />
                    </div>
                </form>
                <div class="mt-4">
                    <div class="d-flex justify-content-center links form-text ">
                        Don't have an account? <Link class="ml-2 signup-link" to="/signup"><u>Sign Up</u></Link>
                    </div>
                    <div class="d-flex justify-content-center links form-text">
                        <Link to="#">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

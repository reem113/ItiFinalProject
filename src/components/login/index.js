import React from "react";
import Logo from "../../images/logo_company.svg";
import { Link } from "react-router-dom";



import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

class Login extends React.Component {
    render() {
        return (


            <>
                <div class="form-container ">
                    <div class="d-flex justify-content-center">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <form>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-4"><AiOutlineUser /></span>
                            <input type="text" name="username" class="form-control" value="" onChange={() => { }} placeholder="Username" />
                        </div>

                        <div class="input-group mb-2">
                            <span class="input-group-text p-4"><AiOutlineLock /></span>
                            <input type="password" name="password" class="form-control" value="" onChange={() => { }} placeholder="Password" />
                        </div>

                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input p-2" id="rememberCheckBox" />
                                <label class="custom-control-label m-2 form-text" for="rememberCheckBox">Remember me</label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center ">
                            <Link className="btn-main" to="/">Login</Link>
                        </div>
                    </form>
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links form-text ">
                            Don't have an account? <Link class="ml-2 signup-link" to="/signup"><u>Sign Up</u></Link>
                        </div>
                        <div class="d-flex justify-content-center links form-text">
                            <Link to=''>Forgot your password?</Link>
                        </div>
                    </div>
                </div>


            </>

        );
    }
}

export default Login;

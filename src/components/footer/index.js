import React from "react";
import Logo from "../../images/logo_company.svg";
import {Link } from 'react-router-dom'
import { AiFillFacebook,
     AiFillTwitterCircle,
     AiFillLinkedin,
     AiFillYoutube,
     AiFillGithub,
     AiOutlineBehanceSquare,
     } from "react-icons/ai";
     import { FaCcVisa,
        FaCcMastercard,
        FaCcDiscover,
        FaCcAmex } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    return (
        
        <div class="footer">
            <div class="container">
                <div class="row ">
                    <div class="col-12 col-md-3">
                        <div class="img">      
                        <img src={Logo} alt="company" />
                        </div>
                        <p class="para"><span class=" mr-3 fa fa-map-marker"></span>59 Street,NewYork City,Rose Town,05 Rive House</p>
                        <p class="para"><span class="mr-3 fa fa-phone"></span>+012 345 67890</p>
                    </div>
                    <div class=" flink col-12 col-md-3">
                        <h4>Information</h4>
                        <div class="hhr"><hr/></div>
                        <Link class="link" to=''>About Us</Link>
                        <Link class="link" to=''>Latest Post</Link>
                        <Link class="link" to=''>Selling Tips</Link>
                        <Link class="link" to=''>Advertising</Link>
                        <Link class="link" to=''>Contact Us</Link>

                    </div>
                    <div class=" flink col-12 col-md-3">
                        <h4>My Account</h4>
                        <div class="hhr"><hr/></div>
                        <Link class="link" to=''>My Account</Link>
                        <Link class="link" to=''>Login/Register</Link>
                        <Link class="link" to=''>Cart</Link>
                        <Link class="link" to=''>Wishlist</Link>
                        <Link class="link" to=''>Order History</Link>
                    </div>
                    <div class=" flink col-12 col-md-3">
                        <h4>Help & Support</h4>
                        <div class="hhr"><hr/></div>
                        <Link class="link" to=''>How To Shop</Link>
                        <Link class="link" to=''>Payment</Link>
                        <Link class="link" to=''>Returns</Link>
                        <Link class="link" to=''>Delivery</Link>
                        <Link class="link" to=''>Privacy & Cookie Policy</Link>
                    </div>
                </div>
                <hr/>
                <div class="finalfooter">
                    <div class="row ">
                        <div class="col-12 col-md-5">
                            <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Copyright  2021.</p>
                        </div>
                        <div class=" flink col-12 col-md-4">
                            <div class="links">
                                <Link to="https://www.facebook.com/"><i><AiFillFacebook size={25}/></i></Link>
                                <Link to="https://www.twitter.com/"><i ><AiFillTwitterCircle size={25}/></i></Link>
                                <Link to="https://www.linkedin.com/"><i><AiFillLinkedin size={25}/></i></Link>
                                <Link to="https://www.youtube.com/"><i><AiFillYoutube size={25}/></i></Link>
                                <Link to="https://www.behance.com/"><i><AiOutlineBehanceSquare size={25}/></i></Link>
                                <Link to="https://www.github.com/"><i><AiFillGithub size={25}/></i></Link>
                            </div>
                        </div>
                        <div class=" flink col-12 col-md-3">
                            <div class="links">
                                <Link to="https://www.visa.com/"><i><FaCcVisa size={50}/></i></Link>
                                <Link to="https://www.mastercard.com/"><i><FaCcMastercard size={50}/></i></Link>
                                <Link to="https://www.discover.com/"><i><FaCcDiscover size={50}/></i></Link>
                                <Link to="https://www.amex.com/"><i><FaCcAmex size={50}/></i></Link>
                            </div>
                        </div>
                    
                    </div> 
                </div>   
            </div>    
        </div>
    );
  }
}

export default Footer;

import React from "react";
import BreadCrumb from "../breadcrumb";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
    return (
        <>
            <div>
                <BreadCrumb />
                <div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 p-5 ">
                            <div className="m-1 p-1  ">
                                <h5>Address</h5>
                                <FaMapMarkerAlt className="icons m-1 p-1" />
                                <span>
                                    195 Broaddus Maple Court Avenue, United States of America{" "}
                                </span>
                            </div>

                            <div className="m-1 p-1">
                                <h5>Phone </h5>
                                <FaPhoneAlt className="icons m-1 " />
                                <span>+146-4567890</span>
                            </div>

                            <div className="m-1 p-1">
                                <h5>Email </h5>
                                <FaEnvelope className="icons m-1 " />
                                <span>company@corporate.com</span>
                            </div>
                        </div>
                        <div className=" col-sm-12 col-md-5 col-lg-5 container p-2 m-3">

                            <h4 className="m-2">Send Us a Message</h4>
                            <input className="p-2 m-2 full-width " type="text" placeholder="Name" /><br />
                            <input className="p-2 m-2 full-width " type="email" placeholder="Email" /><br />
                            <input className="p-2 m-2 full-width " type="text" placeholder="Subject" /><br />
                            <input className="p-2 m-2 full-width " type="text" placeholder="Message*" />


                            <div className="center">
                                <input className="btn btn-main btn-hover btn-200" type="button" value="Submit" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

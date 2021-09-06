import { Divider } from '@material-ui/core';
import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { SiVisa } from "react-icons/si"
import { useHistory } from 'react-router';
import BreadCrumb from '../breadcrumb';

export default function PlaceOrder() {

    const history = useHistory();
    const [userInfo, setUserInfo] = useState(null);
    const id = localStorage.getItem("ID");

    const handlePlaceOrder = () => { history.push("/") }

    useEffect(() => {
        const getUserInfo = () => {
            const URL = `http://localhost:8000/api/v1/users/${id}`
            axios.get(URL)
                .then(res => {
                    console.log(res.data);
                    setUserInfo(res.data.user);
                })
                .catch(error => { console.log(error); })

        }
        getUserInfo()
    }, [id])


    return (
        <>
            <BreadCrumb />
            {userInfo && (

                <div className="row">
                    <div className="col-sm-8 col-xl-8 ">
                        <div className="wrap-container p-3">
                            <h4 className="mt-2">Shipping Address</h4>
                            <Divider className="mt-3 mb-3" />
                            <div className="row">
                                <div className="col-sm-6 col-xl-6 ">
                                    <div className="user-info"><h5>{userInfo.name}</h5></div>
                                    <div className="user-info">{userInfo.address[0].street} St. ,</div>
                                    <div className="user-info">Building {userInfo.address[0].apartment},</div>
                                    <div className="user-info">{userInfo.address[0].city},</div>
                                    <div className="user-info">{userInfo.address[0].country},</div>
                                    <div className="user-info">Phone: {userInfo.phone}</div>
                                </div>
                                <div className="col-sm-6 col-xl-6">
                                    <FaTruckMoving className="deliver-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="wrap-container p-3">
                            <h4 className="mt-2">Delivery Time</h4>
                            <Divider className="mt-3 mb-3" />
                            <div className="col-sm-6 col-xl-6 p-2 ">
                                <p>Delivered in range (2-3) days from the day of placing order.</p>
                            </div>
                        </div>
                        <div className="wrap-container p-3">
                            <h4 className="mt-2">Payment</h4>
                            <Divider className="mt-3 mb-3" />
                            <div className="col-sm-10 col-xl-10 ">
                                <div><SiVisa className="visa-icon" />
                                    <span className="user-info ml-5 p-3">****8234</span>
                                    <span className="price-details ml-5 p-3"><b>$ 62.00</b></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-xl-4 ">
                        <div className="wrap-container p-3">
                            <h4>Order Summary</h4>
                            <div><span>Subtotal:</span><span className="price-details">$ 52.00</span></div>
                            <div><span>Shipping:</span><span className="price-details">$ 10.00</span></div>
                            <div><span>Taxes:</span><span className="price-details">$ 0.00</span></div>
                            <Divider className="mb-5 mt-5" />
                            <div className="mb-5"><span className="total-title">Total</span><span className="total-price">$ 62.00</span></div>
                            <div className="center"><button className="btn btn-main btn-hover btn-200 " onClick={handlePlaceOrder}>Place Order</button></div>

                        </div>
                    </div>
                </div>

            )}


        </>
    )
}

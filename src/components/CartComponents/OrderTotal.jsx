import React, {useState} from 'react';
import './OrderTotal.scss'
import {Divider} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../redux/userSlice";
import Method from "./Method";
import CanadaPost from '../../assets/image 48.svg'
import FedEx from '../../assets/image 49.svg'

const OrderTotal = ({activeStep, setActiveStep}) => {
    const dispatch = useDispatch()
    const user = useSelector(
        (state) => state.user.currentUser
    );

    const OrderMethods = [
        {
            name: "Deliver",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 17H14V5H2V17H5" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M20 17H22V13.66C22.0004 13.1346 21.8973 12.6142 21.6965 12.1286C21.4958 11.643 21.2013 11.2018 20.83 10.83L19 9H14"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 17H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M7.5 20C8.88071 20 10 18.8807 10 17.5C10 16.1193 8.88071 15 7.5 15C6.11929 15 5 16.1193 5 17.5C5 18.8807 6.11929 20 7.5 20Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            price: "+$10"
        },
        {
            name: "Pick-up",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.5 9.39996L7.5 4.20996" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.28906 7L11.9991 12L20.7091 7" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M12 22V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            price: "$0"
        },
    ]

    const DeliverMethods = [
        {name: "Canada Post", svg: <img src={CanadaPost}/>, price: "+$10"},
        {name: "FedEx", svg: <img src={FedEx}/>, price: "$0"},
    ];

    const [checkedOrderMethod, setCheckedOrderMethod] = useState(OrderMethods[0].name);
    const [checkedDeliverMethod, setCheckedDeliverMethod] = useState(DeliverMethods[0].name);

    return (
        <div className='order-total'>
            {activeStep === 1 &&
                <>
                    <h1>Order Method</h1>
                    <div className='method-wrapper'>
                        {OrderMethods.map(method =>
                            <Method method={method} checkedMethod={checkedOrderMethod} setChecked={setCheckedOrderMethod}/>
                        )}
                    </div>
                    <Divider sx={{width: "100%"}}/>
                    <h1>Delivery Method</h1>
                    <div className='method-wrapper'>
                        {DeliverMethods.map(method =>
                            <Method method={method} checkedMethod={checkedDeliverMethod} setChecked={setCheckedDeliverMethod}/>
                        )}
                    </div>
                    <Divider sx={{width: "100%"}}/>
                </>
            }
            <h1>Order Summary</h1>
            <div className='details'>
                <div className='details-info'>
                    <p>Subtotal</p>
                    <p className='stroke'>--------------------------</p>
                    <p>$139.00</p>
                </div>
                <div className='details-info'>
                    <p>Shipping cost</p>
                    <p className='stroke'>--------------------------</p>
                    <p>+$0.50</p>
                </div>
                <div className='details-info'>
                    <p>Taxes</p>
                    <p className='stroke'>--------------------------</p>
                    <p>+$0.50</p>
                </div>
                <div className='details-info'>
                    <p>Coupon</p>
                    <p className='stroke'>--------------------------</p>
                    <p>-$9.00</p>
                </div>
                <div className='details-info'>
                    <p>Discount</p>
                    <p className='stroke'>--------------------------</p>
                    <p>-$1.00</p>
                </div>
            </div>
            <Divider sx={{width: "100%", borderColor: "rgba(0, 0, 0, 0.05)"}}/>
            <div className='discount'>
                <h1>Discount Code</h1>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", gap: "10px"}}>
                    <input placeholder='Enter the discount code'/>
                    <button>Apply</button>
                </div>
            </div>
            <Divider sx={{width: "100%", borderColor: "rgba(0, 0, 0, 0.05)"}}/>
            <div className='total-price'>
                <p>Total Price</p>
                <p className='stroke'>--------</p>
                <p>$129.98</p>
            </div>
            {user ?
                <button className='green' onClick={() => setActiveStep(activeStep + 1)}>Proceed to Checkout</button> :
                <button onClick={() => dispatch(openModal())}>Login | Sign Up</button>
            }
        </div>
    );
};

export default OrderTotal;
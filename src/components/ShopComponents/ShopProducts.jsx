import React from 'react';
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ShopProducts = ({photo, name, rating, price, id, lessProductsRow}) => {
    const navigate = useNavigate();
    return (
        <div className={`inside-swiper ${lessProductsRow && 'shorter'}`} onClick={() => navigate(`/product/${id}`)}>
            <div className='image-part'>
                <img src={photo} alt={name}/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 16 16"
                         fill="none">
                        <g clip-path="url(#clip0_2119_13622)">
                            <path
                                d="M5.33366 14.6663C5.70185 14.6663 6.00033 14.3679 6.00033 13.9997C6.00033 13.6315 5.70185 13.333 5.33366 13.333C4.96547 13.333 4.66699 13.6315 4.66699 13.9997C4.66699 14.3679 4.96547 14.6663 5.33366 14.6663Z"
                                stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                d="M12.6667 14.6663C13.0349 14.6663 13.3333 14.3679 13.3333 13.9997C13.3333 13.6315 13.0349 13.333 12.6667 13.333C12.2985 13.333 12 13.6315 12 13.9997C12 14.3679 12.2985 14.6663 12.6667 14.6663Z"
                                stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <path
                                d="M1.36621 1.36621H2.69954L4.47288 9.64621C4.53793 9.94945 4.70666 10.2205 4.95002 10.4128C5.19338 10.605 5.49615 10.7064 5.80621 10.6995H12.3262C12.6297 10.6991 12.9239 10.5951 13.1602 10.4048C13.3966 10.2145 13.561 9.94923 13.6262 9.65288L14.7262 4.69954H3.41288"
                                stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2119_13622">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Add
                </button>
            </div>
            <div className='price-rating'>
                <Rating
                    color="success"
                    name="simple-controlled"
                    value={rating}
                />
                <p className='price'>{price}$</p>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default ShopProducts;
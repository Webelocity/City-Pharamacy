import React from 'react';
import './CategoryBanner.scss'
import {Container} from "@mui/material";
import photo2 from '../../assets/Frame 76 (2).png'
import covid from '../../assets/covid.svg'
import CategoryProductsSwiper from "./CategoryProductsSwiper";
import {useNavigate} from "react-router-dom";

const CategoryBanner = ({categoryName, category, featuredProducts}) => {
    const navigate = useNavigate();
    return (
        <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px", md: "auto"}}}>
            <div className='category-banner-wrapper'>
                <div className='banner'>
                    <div className='letf-side-text'>
                        <div className='title'>
                            <p>Shop now</p>
                            <h1>{categoryName}</h1>
                        </div>
                        <p>Elevate Your Health, Not Your Spend</p>
                    </div>
                    <img src={photo2} alt='banner-category'/>
                    <button onClick={() => navigate(`/shop/${category}`)} >
                        Shop Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                             fill="none">
                            <g clip-path="url(#clip0_2584_7437)">
                                <path
                                    d="M5.33366 15.1663C5.70185 15.1663 6.00033 14.8679 6.00033 14.4997C6.00033 14.1315 5.70185 13.833 5.33366 13.833C4.96547 13.833 4.66699 14.1315 4.66699 14.4997C4.66699 14.8679 4.96547 15.1663 5.33366 15.1663Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M12.6667 15.1663C13.0349 15.1663 13.3333 14.8679 13.3333 14.4997C13.3333 14.1315 13.0349 13.833 12.6667 13.833C12.2985 13.833 12 14.1315 12 14.4997C12 14.8679 12.2985 15.1663 12.6667 15.1663Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M1.36621 1.86621H2.69954L4.47288 10.1462C4.53793 10.4495 4.70666 10.7205 4.95002 10.9128C5.19338 11.105 5.49615 11.2064 5.80621 11.1995H12.3262C12.6297 11.1991 12.9239 11.0951 13.1602 10.9048C13.3966 10.7145 13.561 10.4492 13.6262 10.1529L14.7262 5.19954H3.41288"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2584_7437">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className='featured-special-offers-wrapper'>
                    <div className='special-offers'>
                        <h1>Special Offers</h1>
                        <div className='new-arrivals'>
                            <div className='sticker'>
                                <p>30% OFF</p>
                            </div>
                            <img src={covid} alt='new-arrivals'/>
                            <div className='title'>
                                <h1>New Arrivals</h1>
                                <p>Find your medicine</p>
                            </div>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div style={{width: "70%"}}>
                        <CategoryProductsSwiper data={featuredProducts} largeAmountOfProducts={4} mediumAmountOfProducts={3} smallAmountOfProducts={2}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CategoryBanner;
import React from 'react';
import './CategoryBanner.scss'
import {Container} from "@mui/material";
import covid from '../../assets/covid.svg'
import CategoryProductsSwiper from "./CategoryProductsSwiper";
import Banner from "./Banner";
import covid2 from "../../assets/covid-banner.png";
import health from "../../assets/health-banner.png";


const CategoryBanner = ({categoryName, category, featuredProducts}) => {
    return (
        <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px", md: "auto"}}}>
            <div className='category-banner-wrapper'>
                <Banner categoryName={categoryName} category={categoryName} photo={categoryName === 'COVID-19 Essentials' ? covid2 : health} />
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
                        <CategoryProductsSwiper data={featuredProducts} largeAmountOfProducts={4}
                                                mediumAmountOfProducts={3} smallAmountOfProducts={2}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CategoryBanner;
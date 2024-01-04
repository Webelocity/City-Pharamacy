import React from 'react';
import {Container, IconButton, InputAdornment, InputBase, useMediaQuery} from "@mui/material";
import photo from '../../assets/Frame 76.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {FreeMode, Navigation} from 'swiper/modules';
import './ShopByCategory.scss'
import covid from '../../assets/covid.svg'
import Step from "../Step";
import {useNavigate} from "react-router-dom";

const ShopByCategory = () => {
    const categories = [
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
    ]

    const small = useMediaQuery('(max-width:600px)');
    const medium = useMediaQuery('(min-width:600px)');
    const large = useMediaQuery('(min-width:1200px)');
    const navigate = useNavigate();

    const path = [{name: "Categories"}]

    return (
        <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px !important", md: "auto"}}}>
            <div className='our-products-wrapper'>
                <div className='top-banner-wrapper'>
                    <div className='left-side-text'>
                        <div className='title'>
                            <p>Shop Deals</p>
                            <h1>New Arrivals For You</h1>
                        </div>
                        <InputBase
                            className='mui-register-password'
                            type='text'
                            placeholder='Search among products'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16"
                                             fill="none">
                                            <path
                                                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                                stroke="#616161" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#616161" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <img src={photo} alt='new-products'/>
                </div>
                <div className='top-part'>
                    <Step data={path}/>
                    <div className='search'>
                        <h1>Shop by Category</h1>
                    </div>

                </div>
                <div className='products'>
                    {categories.map(category =>
                        <div className='inside-swiper' onClick={() => navigate(`/shop/${category.id}`)}>
                            <h1>{category.name}</h1>
                            <p>{category.numberOfItems} items</p>
                            <img src={category.photo} alt={category.name}/>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default ShopByCategory;
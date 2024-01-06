import React from 'react';
import {Container, Divider, IconButton, InputAdornment, InputBase, useMediaQuery} from "@mui/material";
import './ShopSubCategories.scss'
import Filters from "../../components/ShopComponents/Filters";
import CategoryProducts from "../../components/ShopComponents/CategoryProducts";
import {FreeMode, Navigation} from "swiper/modules";
import SwiperNavButton from "../../components/SwiperNavButton";
import {Swiper, SwiperSlide} from "swiper/react";
import covid from "../../assets/covid.svg";
import Step from "../../components/Step";
import {useNavigate, useParams} from "react-router-dom";
import photo from "../../assets/Image.svg";

const ShopSubCategories = () => {
    const matches = useMediaQuery('(max-width:1200px)');
    const small = useMediaQuery('(max-width:600px)');
    const medium = useMediaQuery('(min-width:600px)');
    const large = useMediaQuery('(min-width:1200px)');
    const categories = [
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "covid"},
    ];
    const products = [
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id: 1},
    ]
    const navigate = useNavigate();
    const {id, subcategory} = useParams();


    return (
        <div className='shop-category-wrapper'>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px !important", md: "auto"}}}>
                <div className='our-products-wrapper'>
                    <div className='top-part'>
                        {matches && <Step data={['Categories', `${id}`, `${subcategory}`]}/>}
                        <div className='search second'>
                            <h1>Our Products</h1>
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
                                                <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#616161"
                                                      stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div style={{display: "flex", justifyContent: "flex-start", width: "100%"}}>
                            <Step data={['Categories', `${id}`, `${subcategory}`]}/>
                        </div>
                        <div className='products' style={{marginTop:"20px"}}>
                            {categories.map(category =>
                                <div className='inside-swiper'
                                     onClick={() => navigate(`${id ? `/shop/${id}/${category.id}` : `/shop/${category.id}`}`)}>
                                    <h1>{category.name}</h1>
                                    <p>{category.numberOfItems} items</p>
                                    <img src={category.photo} alt={category.name}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
            <div className='filters-and-products-wrapper'>
                <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px !important", md: "auto"}}}>
                    <div className='wrapper'>
                        {!matches && <Filters/>}
                        <CategoryProducts products={products} lessProductsRow={true}/>
                    </div>
                </Container>
            </div>
            {/*<Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px !important", md: "auto"}}}>*/}
            {/*    <div className='products-category-wrapper'>*/}
            {/*        <Swiper*/}
            {/*            slidesPerView={large ? 5 : medium ? 3 : small && 1.5}                        spaceBetween={10}*/}
            {/*            modules={[Navigation, FreeMode]}*/}
            {/*            navigation={true}*/}
            {/*            className="mySwiper"*/}
            {/*            freeMode={true}*/}
            {/*            speed={800}*/}
            {/*        >*/}
            {/*            <div className='top-section'>*/}
            {/*                <h1>Products Category</h1>*/}
            {/*                <div className='top-buttons'>*/}
            {/*                    <button>View more</button>*/}
            {/*                    <Divider*/}
            {/*                        sx={{*/}
            {/*                            display: {xs: "none", lg: "flex"},*/}
            {/*                            height: "30px",*/}
            {/*                            marginTop: "8px !important"*/}
            {/*                        }}*/}
            {/*                        orientation="vertical" flexItem/>*/}
            {/*                    <div className='nav-buttons'>*/}
            {/*                        <SwiperNavButton/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            {categories.map(category =>*/}
            {/*                <SwiperSlide>*/}
            {/*                    <div className='inside-swiper'>*/}
            {/*                        <h1>{category.name}</h1>*/}
            {/*                        <p>{category.numberOfItems} items</p>*/}
            {/*                        <button onClick={() => navigate(`/shop/${category.id}`)}>Shop Now</button>*/}
            {/*                        <img src={category.photo} alt={category.name}/>*/}
            {/*                    </div>*/}
            {/*                </SwiperSlide>*/}
            {/*            )}*/}
            {/*        </Swiper>*/}
            {/*    </div>*/}
            {/*</Container>*/}
        </div>
    );
};

export default ShopSubCategories;
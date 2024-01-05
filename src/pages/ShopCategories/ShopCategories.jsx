import React from 'react';
import {useParams} from "react-router-dom";
import ShopByCategory from "../../components/ShopComponents/ShopByCategory";
import BestSeller from "../../components/ShopComponents/BestSeller";
import photo2 from "../../assets/Image (1).svg";
import photo from "../../assets/Image.svg";
import covid from "../../assets/covid.svg";
import Banner from "../../components/ShopComponents/Banner";
import {Container} from "@mui/material";
import CategoryProducts from "../../components/ShopComponents/CategoryProducts";
import health from '../../assets/health-banner.png'
import covid2 from '../../assets/covid-banner.png'

const BestSellerData = [
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo2, id: 1},
]

const categories = [
    {name: "sub-1", numberOfItems: 28, photo: covid, id: "sub-1"},
    {name: "sub-2", numberOfItems: 28, photo: covid, id: "sub-2"},
    {name: "sub-3", numberOfItems: 28, photo: covid, id: "sub-3"},
    {name: "sub-4", numberOfItems: 28, photo: covid, id: "sub-4"},
    {name: "sub-5", numberOfItems: 28, photo: covid, id: "sub-5"},
]

const products = [
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo, id:1},
]

const ShopCategories = () => {
    const {id} = useParams();
    return (
        <div>
            <ShopByCategory path={['Categories', `${id}`]} categories={categories} name={<h1>Shop by <b style={{color:"var(--Main-Green, #219D50)"}}>{id}</b> Products</h1>}/>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px !important", md: "auto"}}}>
                <Banner categoryName={id} category={id} photo={id === 'COVID-19 Essentials' ? covid2 : health} />
                <CategoryProducts products={products} showSort={false}/>
            </Container>
            <BestSeller data={BestSellerData}/>
        </div>
    );
};

export default ShopCategories;
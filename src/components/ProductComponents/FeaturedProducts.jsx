import React from 'react';
import {Container} from "@mui/material";
import CategoryProductsSwiper from "../ShopComponents/CategoryProductsSwiper";
import photo from "../../assets/Image.svg";

const featured = {
    name: "Featured Products",
    products: [
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
}

const FeaturedProducts = () => {
    return (
        <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "20px", md: "0px"}, paddingY: "40px"}}>
            <CategoryProductsSwiper data={featured} largeAmountOfProducts={5} mediumAmountOfProducts={4}
                                    smallAmountOfProducts={2.5}/>
        </Container>
    );
};

export default FeaturedProducts;
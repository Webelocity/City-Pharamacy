import React from 'react';
import {Container} from "@mui/material";
import CategoryCart from "./CategoryCart";
import photo from "../../assets/Image.svg";

const Beauty = {
    name: "Beauty",
    products: [
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
    ]
}
const Baby= {
    name: "Baby & Child",
    products: [
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
    ]
}
const Health= {
    name: "Health & Wellness",
    products: [
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
    ]
}

const Categories = () => {
    return (
        <div className='categories-wrapper'>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px", md: "auto"}}}>
                <div className='cart-wrapper'>
                    <CategoryCart data={Beauty}/>
                    <CategoryCart data={Baby}/>
                    <CategoryCart data={Health}/>
                </div>
            </Container>
        </div>
    );
};

export default Categories;
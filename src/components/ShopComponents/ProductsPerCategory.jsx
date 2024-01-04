import React from 'react';
import './ProductsPerCategory.scss'
import CategoryProductsSwiper from "./CategoryProductsSwiper";
import photo from '../../assets/Image.svg'
import {Divider} from "@mui/material";

const ProductsPerCategory = () => {
    const Beauty = {
        name:"Beauty",
        products:[
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
        ]
    }
    const COVID = {
        name:"COVID-19 Essentials",
        products:[
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
        ], id: 1
    }

    const Health = {
        name:"Health & Wellness",
        products:[
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
        ]
    }

    const Gift = {
        name:"Gift Sets",
        products:[
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo,id:1},
        ]
    }

    const Baby = {
        name:"Baby & Child",
        products:[
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id:1},
        ]
    }

    const Personal = {
        name:"Personal Care",
        products:[
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
            {name:"Collagen Powder - Vital Protein", price:39.6, rating:5, photo:photo, id: 1},
        ]
    }


    return (
        <div className='product-per-category-wrapper'>
            <CategoryProductsSwiper data={Beauty}/>
            <Divider sx={{width:"100%", marginY:"48px", color:"rgba(0, 0, 0, 0.05);"}}/>
            <CategoryProductsSwiper data={COVID}/>
            <Divider sx={{width:"100%", marginY:"48px", color:"rgba(0, 0, 0, 0.05);"}}/>
            <CategoryProductsSwiper data={Health}/>
            <Divider sx={{width:"100%", marginY:"48px", color:"rgba(0, 0, 0, 0.05);"}}/>
            <CategoryProductsSwiper data={Gift}/>
            <Divider sx={{width:"100%", marginY:"48px", color:"rgba(0, 0, 0, 0.05);"}}/>
            <CategoryProductsSwiper data={Baby}/>
            <Divider sx={{width:"100%", marginY:"48px", color:"rgba(0, 0, 0, 0.05);"}}/>
            <CategoryProductsSwiper data={Personal}/>
        </div>
    );
};

export default ProductsPerCategory;
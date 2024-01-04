import React from 'react';
import './Shop.scss'
import ShopByCategory from "../../components/ShopComponents/ShopByCategory";
import Categories from "../../components/ShopComponents/Categories";
import CategoryBanner from "../../components/ShopComponents/CategoryBanner";
import covid from "../../assets/covid.svg";
import BestSeller from "../../components/ShopComponents/BestSeller";
import photo from '../../assets/Image (1).svg'

const Shop = () => {
    const featured = {
        name: "Featured Products",
        products: [
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
            {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: covid, id: 1},
        ]
    }

    const BestSellerData = [
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
        {name: "Collagen Powder - Vital Protein", price: 39.6, photo: photo, id: 1},
    ]
    return (
        <div className='shop-wrapper'>
            <ShopByCategory/>
            <Categories/>
            <CategoryBanner categoryName={'COVID-19 Essentials'} category='covid' featuredProducts={featured}/>
            <BestSeller data={BestSellerData} />
            <CategoryBanner categoryName={'Health & Wellness'} category='health' featuredProducts={featured}/>
        </div>
    );
};

export default Shop;
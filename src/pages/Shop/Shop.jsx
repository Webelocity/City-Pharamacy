import React from 'react';
import './Shop.scss'
import ShopByCategory from "../../components/ShopComponents/ShopByCategory";
import Categories from "../../components/ShopComponents/Categories";
import CategoryBanner from "../../components/ShopComponents/CategoryBanner";
import covid from "../../assets/covid.svg";
import health from "../../assets/health.svg";
import beauty from "../../assets/beauty.svg";
import personal from "../../assets/peronal.svg";
import baby from "../../assets/baby.svg";
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

    const categories = [
        {name: "COVID-19 Essentials", numberOfItems: 28, photo: covid, id: "COVID-19 Essentials"},
        {name: "Health & Wellness", numberOfItems: 28, photo: health, id: "Health & Wellness"},
        {name: "Beauty", numberOfItems: 28, photo: beauty, id: "Beauty"},
        {name: "Personal Care", numberOfItems: 28, photo: personal, id: "Personal Care"},
        {name: "Baby & Child", numberOfItems: 28, photo: baby, id: "Baby & Child"},
    ]
    return (
        <div className='shop-wrapper'>
            <ShopByCategory path={['Categories']} categories={categories} name={<h1>Shop By Category</h1>}/>
            <Categories/>
            <CategoryBanner categoryName={'COVID-19 Essentials'} category='covid' featuredProducts={featured}/>
            <BestSeller data={BestSellerData}/>
            <CategoryBanner categoryName={'Health & Wellness'} category='health' featuredProducts={featured}/>
        </div>
    );
};

export default Shop;
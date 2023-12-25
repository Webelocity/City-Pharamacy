import React, {useState} from 'react';
import './CategoryProducts.scss'
import {MenuItem, Pagination, Select} from "@mui/material";
import photo from "../../assets/Image.svg";
import ShopProducts from "./ShopProducts";


const products = [
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
    {name: "Collagen Powder - Vital Protein", price: 39.6, rating: 5, photo: photo},
]


const CategoryProducts = () => {
    const [sort, setSort] = useState(0);

    return (
        <div className='category-products-wrapper'>
            <div className='show-result-wrapper'>
                <p>Showing 1–12 of 17 results</p>
                <Select
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                borderRadius: " 0px 0px 10px 10px",
                                color: "var(--Variable-Grey-Text, #5C5F62)",
                                fontSize: "12px",
                                fontWeight: 600,
                            },
                        },
                    }}
                >
                    <MenuItem value={0}>Default Sorting</MenuItem>
                    <MenuItem value={10}>Sort by popularity</MenuItem>
                    <MenuItem value={20}>Sort by average rating</MenuItem>
                    <MenuItem value={30}>Sort by latest</MenuItem>
                </Select>
            </div>
            <div className='products-wrapper'>
                {products.map(product =>
                    <ShopProducts name={product.name} photo={product.photo} price={product.price}
                                  rating={product.rating}/>
                )}
            </div>
            <div className='pagination'>
                <Pagination sx={{color: "#323232"}} count={10} color="primary"/>
            </div>
        </div>
    );
};

export default CategoryProducts;
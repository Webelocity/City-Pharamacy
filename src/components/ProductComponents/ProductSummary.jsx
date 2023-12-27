import React, {useState} from 'react';
import './ProductSummary.scss'
import {Container} from "@mui/material";
import Description from "./Description";
import Reviews from "./Reviews";


const categories = ['Description', 'Reviews', 'Additional information']
const ProductSummary = () => {
    const [category, setCategory] = useState('Description');
    return (
        <div style={{background: "var(--Foggy-Gray-50, #F5F5F1)"}}>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "20px", md: "auto"}}}>
                <div className='product-summary-wrapper'>
                    <div className='navigators'>
                        {categories.map(categoryToMap =>
                            <p onClick={() => setCategory(categoryToMap)}
                               className={category === categoryToMap && 'green'}>{categoryToMap}</p>
                        )}
                    </div>
                    {category === 'Description' && <Description />}
                    {category === 'Reviews' && <Reviews />}
                </div>
            </Container>
        </div>
    );
};

export default ProductSummary;
import React, {useState} from 'react';
import './ProductSummary.scss'
import {Container} from "@mui/material";
import Description from "./Description";


const categories = ['Description', 'Reviews', 'Additional information']
const ProductSummary = () => {
    const [category, setCategory] = useState('Description');
    return (
        <div style={{background: "var(--Foggy-Gray-50, #F5F5F1)"}}>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "0px", md: "auto"}}}>
                <div className='product-summary-wrapper'>
                    <div className='navigators'>
                        {categories.map(categoryToMap =>
                            <p onClick={() => setCategory(categoryToMap)}
                               className={category === categoryToMap && 'green'}>{categoryToMap}</p>
                        )}
                    </div>
                    {category === 'Description' && <Description />}
                </div>
            </Container>
        </div>
    );
};

export default ProductSummary;
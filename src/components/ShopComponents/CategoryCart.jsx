import React from 'react';
import CategoryCartProduct from "./CategoryCartProduct";

const CategoryCart = ({data}) => {
    return (
        <div className='category-cart-wrapper'>
            <h1>{data.name}</h1>
            <div className='product-wrapper'>
                {data.products.map(data =>
                    <CategoryCartProduct photo={data.photo} price={data.price} name={data.name} id={data.id}/>
                )}
            </div>
            <button className='view-all'>View All</button>
        </div>
    );
};

export default CategoryCart;
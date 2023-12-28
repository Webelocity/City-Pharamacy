import React from 'react';
import './Description.scss'
import photo from '../../assets/product2.svg'

const Description = () => {
    return (
        <div className='product-description-wrapper'>
            <div className='left-side-photo'>
                <img src={photo} alt='product'/>
                <div className='products-on-top'>
                    <img src={photo} alt='product'/>
                    <img src={photo} alt='product'/>
                </div>
            </div>
            <div className='right-side'>
                <h1>Product details</h1>
                <p>
                    While our foundation is built on tradition, we're not bound by it. We're constantly evolving,
                    leveraging the latest technologies to bring our renowned personal service and care right to your
                    fingertips. Because at City Pharmacy, your health is more than just our mission—it's our passion.

                    Because at City Pharmacy, your health is more than just our mission—it's our passion.
                </p>
            </div>
        </div>
    );
};

export default Description;
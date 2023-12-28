import React from 'react';
import Comments from "./Comments";
import './Reviews.scss'
import Ratings from "./Ratings";

const Reviews = () => {
    return (
        <div className='reviews-wrapper'>
            <Comments />
            <Ratings />
        </div>
    );
};

export default Reviews;
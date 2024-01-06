import React from 'react';
import './Ratings.scss'
import {LinearProgress, Rating, useMediaQuery} from "@mui/material";
import photo from '../../assets/everyday-turmeric.svg'


const Ratings = () => {
    const matches = useMediaQuery('(max-width:1200px)')
    return (
        <div className='ratings-wrapper'>
            <div className='ratings-section'>
                <div className='rating-numbers'>
                    <Rating size="large" value={4} readOnly />
                    <p>4.2</p>
                </div>
                <div className='ratings-data'>
                    <div className='linear-progress-wrapper'>
                        <p>5</p>
                        <LinearProgress variant="determinate" value={80}/>
                        <p className='person'>28</p>
                    </div>
                    <div className='linear-progress-wrapper'>
                        <p>4</p>
                        <LinearProgress variant="determinate" value={70}/>
                        <p className='person'>26</p>
                    </div>
                    <div className='linear-progress-wrapper'>
                        <p>3</p>
                        <LinearProgress variant="determinate" value={40}/>
                        <p className='person'>20</p>
                    </div>
                    <div className='linear-progress-wrapper'>
                        <p>2</p>
                        <LinearProgress variant="determinate" value={20}/>
                        <p className='person'>12</p>
                    </div>
                    <div className='linear-progress-wrapper'>
                        <p>1</p>
                        <LinearProgress variant="determinate" value={25}/>
                        <p className='person'>4</p>
                    </div>
                </div>
            </div>
            {!matches &&
                <div className='special-offers'>
                    <p>Special Offers</p>
                    <div className='new-arrivals'>
                        <div className='up-top'>
                            <p>Up To 50%</p>
                        </div>
                        <img src={photo} alt='product'/>
                        <div className='text'>
                            <p>New Arrivals</p>
                            <p className='description'>Find your medicine</p>
                        </div>
                        <button>Explore Now</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Ratings;
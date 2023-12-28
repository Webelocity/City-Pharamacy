import React from 'react';
import photo from "../../assets/product.svg";
import './LeftSideImage.scss'


const data = [1, 2, 3]

const LeftSideImage = () => {
    return (
        <div className='left-side'>
            <div className='photo'>
                <img src={photo} alt='product'/>
            </div>
            <div className='small-photos-wrapper'>
                {data.map(d =>
                    <div className='photo'>
                        <img src={photo} alt='product'/>
                    </div>
                )}
                <div className='more'>
                    +9 more
                </div>
            </div>
        </div>
    );
};

export default LeftSideImage;
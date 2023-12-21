import React from 'react';
import './LeftSide.scss'
import image from '../../assets/Rectangle 4.png'
import circles from '../../assets/Circle Background.svg'

const LeftSide = () => {
    return (
        <div className='left-side-wrapper'>
            <p>City Pharmacy</p>
            <div style={{position:"relative"}}>
                <img style={{height:"541.916px"}} src={image} alt='forget-password-image'/>
                <img style={{position:"absolute", top:"43%", right:"-7%"}} src={circles} alt={'circles1'} />
                <img style={{position:"absolute", top:"-5%", left:"-6%"}} src={circles} alt={'circles1'} />
            </div>
        </div>
    );
};

export default LeftSide;
import React from 'react';
import './Step.scss'

const Step = ({data}) => {
    return (
        <div className='categories-stepper'>
            <p>Home</p>
            {data.map((d, index) =>
                <li className={`${data.length -1 === index && 'green'} `}><span>{d.name}</span></li>
            )}
        </div>
    );
};

export default Step;

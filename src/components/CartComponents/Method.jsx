import React from 'react';
import CityCheckbox from "../CityCheckbox";

const Method = ({method, checkedMethod, setChecked}) => {
    const checked = method.name === checkedMethod;

    return (
        <div className={`method ${checked && 'checked'}`} onClick={() => setChecked(method.name)}>
            <CityCheckbox checked={checked} />
            <h1>{method.name}</h1>
            <div className='image-svg'>{method.svg}</div>
            <p>{method.price}</p>
        </div>
    );
};

export default Method;
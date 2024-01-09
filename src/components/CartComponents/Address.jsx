import React from 'react';
import {IconButton} from "@mui/material";
import CityCheckbox from "../CityCheckbox";

const Address = ({address, checkedAddress, setCheckedAddress, onEditAddress, setEdit, isBilling}) => {
    const checked = address.index === checkedAddress
    return (
        <div className={`single-address ${checked && 'checked'}`} onClick={() => setCheckedAddress(address.index)}>
            <CityCheckbox checked={checked}/>
            <div className='address'>
                <div className='name'>
                    <div className='n'>
                        <p>
                            {address.first_name} {address.last_name}
                        </p>
                        {address.default &&
                            <p className='default'>Default</p>
                        }
                    </div>
                    <IconButton sx={{padding: '10px'}} onClick={(event) => {
                        onEditAddress(event, address, isBilling);
                        setEdit(true);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <g clip-path="url(#clip0_1579_184400)">
                                <path d="M15 1.66699L18.3333 5.00033" stroke="#219D50" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M6.24935 17.0837L15.8327 7.50033L12.4993 4.16699L2.91602 13.7503L1.66602 18.3337L6.24935 17.0837Z"
                                    stroke="#219D50" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1579_184400">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </IconButton>
                </div>
                <p>
                    {address?.street}, {address?.town}, {address?.postal_code}, {address?.country}
                </p>
            </div>
        </div>
    );
};

export default Address;
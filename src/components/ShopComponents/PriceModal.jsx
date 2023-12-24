import React from 'react';
import {IconButton, Modal, Slider} from "@mui/material";
import './PriceModal.scss'

function valuetext(value) {
    return `${value}`;
}

const PriceModal = ({open, handleClose}) => {
    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='inside-modal'>
                <div className='top-section'>
                    <button>Clear All</button>
                    <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                            <path
                                d="M6.25 1.91699L3.375 5.75033V19.167C3.375 19.6753 3.57693 20.1628 3.93638 20.5223C4.29582 20.8817 4.78334 21.0837 5.29167 21.0837H18.7083C19.2167 21.0837 19.7042 20.8817 20.0636 20.5223C20.4231 20.1628 20.625 19.6753 20.625 19.167V5.75033L17.75 1.91699H6.25Z"
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.375 5.75H20.625" stroke="black" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path
                                d="M15.8334 9.58301C15.8334 10.5997 15.4295 11.5747 14.7106 12.2936C13.9917 13.0125 13.0167 13.4163 12 13.4163C10.9834 13.4163 10.0083 13.0125 9.28944 12.2936C8.57055 11.5747 8.16669 10.5997 8.16669 9.58301"
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Category
                    </div>
                    <IconButton sx={{padding: "0px !important"}} onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M27.9961 12L11.9961 28.0005" stroke="#979797" stroke-width="1.28573"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9961 12L27.9961 28.0005" stroke="#979797" stroke-width="1.28573"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                </div>
                <div className='filter-by-price'>
                    <div className='price'>
                        <div className='text'>
                            <h1>Filter by price</h1>
                            <button>Reset</button>
                        </div>
                        <Slider
                            size="medium"
                            color="success"
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </div>
                    <div className='inside-price-collapse'>
                        <input type='checkbox'/>
                        <p>$1 - $25 (8)</p>
                    </div>
                    <div className='inside-price-collapse'>
                        <input type='checkbox'/>
                        <p>$1 - $25 (8)</p>
                    </div>
                    <div className='inside-price-collapse'>
                        <input type='checkbox'/>
                        <p>$1 - $25 (8)</p>
                    </div>
                    <div className='inside-price-collapse'>
                        <input type='checkbox'/>
                        <p>$1 - $25 (8)</p>
                    </div>
                    <div className='inside-price-collapse'>
                        <input type='checkbox'/>
                        <p>$1 - $25 (8)</p>
                    </div>
                </div>
                <div className='buttons'>
                    <button>Apply Filters</button>
                    <button className='white' onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default PriceModal;
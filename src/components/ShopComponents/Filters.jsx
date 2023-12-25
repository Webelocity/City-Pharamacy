import React, {useState} from 'react';
import './Filters.scss';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Slider} from "@mui/material";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import {useNavigate, useParams} from 'react-router-dom'

function valuetext(value) {
    return `${value}`;
}

const Filters = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [value, setValue] = React.useState([20, 37]);
    const [openPrice, setOpenPrice] = useState(true)
    const [filtersCategory, setFiltersCategory] = useState(
        [
            {name: "Beauty", open: false, category: "beauty"},
            {name: "COVID-19 Essentials", open: false, category: "covid"},
            {name: "Health & Wellness", open: false, category: "health"},
            {name: "Home Care & Devices", open: false, category: "home-care"},
            {name: "Baby & Child", open: false, category: "baby"},
            {name: "Personal Care", open: false, category: "personal"},
        ])

    const handleClick = (name) => {
        const filterToRedirect = filtersCategory.filter(filter => {
            return filter.name === name;
        });
        setFiltersCategory(prevFilters => {
            return prevFilters.map(filter => {
                if (filter.name === name) {
                    return {...filter, open: !filter.open}; // Toggle the 'open' attribute
                } else return {...filter, open: false}
            });
        });
        navigate(`/shop/${filterToRedirect[0].category}`)
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='filters-wrapper'>
            <div className='shop-all' onClick={() => navigate('/shop')}>
                <div className='inside-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                            stroke="#219D50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 6H21" stroke="#219D50" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path
                            d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                            stroke="#219D50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>
                        Shop All
                    </p>
                </div>
            </div>
            <div className='categories'>
                {filtersCategory.map(category =>
                    <>
                        <ListItemButton className='collapse' onClick={() => handleClick(category.name)}>
                            <ListItemText className={`list ${category.open && 'open'}`} primary={`${category.name}`}/>
                            {category.open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={category.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText primary="Starred"/>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </>)}
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
                <ListItemButton className='collapse' onClick={() => setOpenPrice(!openPrice)}>
                    <ListItemText primary={`Price`}/>
                    {openPrice ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={openPrice} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
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
                    </List>
                </Collapse>
            </div>
            <div className='schedule-appointment'>
                <div className='inside-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
                        <path
                            d="M25.0417 5.16699H6.95833C5.5316 5.16699 4.375 6.32359 4.375 7.75033V25.8337C4.375 27.2604 5.5316 28.417 6.95833 28.417H25.0417C26.4684 28.417 27.625 27.2604 27.625 25.8337V7.75033C27.625 6.32359 26.4684 5.16699 25.0417 5.16699Z"
                            stroke="#219D50" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.167 2.58301V7.74967" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M10.833 2.58301V7.74967" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M4.375 12.917H27.625" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M10.833 18.083H10.8459" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M16 18.083H16.0129" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M21.167 18.083H21.1799" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M10.833 23.25H10.8459" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M16 23.25H16.0129" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M21.167 23.25H21.1799" stroke="#219D50" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    <div className='text'>
                        <h1>Schedule Appointment</h1>
                        <p>Schedule appointments with healthcare providers for prescription renewals, consultations, or
                            medication adjustments.</p>
                    </div>
                    <button>Schedule with healthcare Providers</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
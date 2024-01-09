import React, {useState} from 'react';
import './RightSideInfo.scss'
import photo from '../../assets/product.svg'
import {IconButton, Rating, useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router-dom";

const RightSideInfo = () => {
    const data = {colors: ['#C6B6C4', '#D3FCE2'], models: [1, 2], sizes: [`S`, `M`, `L`, `XL`]};
    const matches = useMediaQuery('(max-width:1200px)');
    const navigate = useNavigate();
    const [color, setColor] = useState(data.colors[0]);
    const [model, setModel] = useState(data.models[0]);
    const [size, setSize] = useState(data.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(prevState => prevState + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevState => prevState - 1)
        }
    }

    return (
        <div className='product-info-wrapper'>
            <div className='top-side'>
                <div className='category-product'>
                    <img src={photo} alt={'product-category'}/>
                    <p>COVID-19 Essentials (45)</p>
                </div>
                <h1>Nora - Oil Premium</h1>
                <div className='rating'>
                    <Rating/>
                    <p>(3 customer review)</p>
                </div>
            </div>
            <p>
                While our foundation is built on tradition, we're not bound by it. We're constantly evolving, leveraging
                the latest technologies to bring our renowned personal service and care right to your fingertips.
                Because at City Pharmacy, your health is more than just our mission—it's our passion.
            </p>
            <div className='price'>
                <div className='price-in-price'>
                    <h1>$24.99</h1>
                    <h1 className='discount'>$29.99</h1>
                </div>
                {matches &&
                    <div className='quantity'>
                        <IconButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                 fill="none">
                                <path
                                    d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </IconButton>
                        <p>2</p>
                        <IconButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                 fill="none">
                                <path
                                    d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 11.167V21.8337" stroke="black" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </IconButton>
                    </div>
                }
                {matches &&
                    <IconButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path
                                d="M13.6134 3.55298C13.2789 3.21736 12.8815 2.95107 12.4439 2.76937C12.0064 2.58767 11.5372 2.49414 11.0634 2.49414C10.5896 2.49414 10.1204 2.58767 9.68284 2.76937C9.24526 2.95107 8.84784 3.21736 8.51339 3.55298L8.00006 4.07298L7.48672 3.55298C7.15227 3.21736 6.75486 2.95107 6.31727 2.76937C5.87968 2.58767 5.41053 2.49414 4.93672 2.49414C4.46291 2.49414 3.99376 2.58767 3.55618 2.76937C3.11859 2.95107 2.72118 3.21736 2.38672 3.55298C0.973391 4.96631 0.886724 7.35298 2.66672 9.16631L8.00006 14.4996L13.3334 9.16631C15.1134 7.35298 15.0267 4.96631 13.6134 3.55298Z"
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                }
            </div>
            <div className='colors-model'>
                <div className='colors-wrapper'>
                    <p>Colors</p>
                    <div className='colors'>
                        {data.colors.map(colorToMap =>
                            <div className={`colors-picker ${colorToMap === color && 'selected'}`}
                                 onClick={() => setColor(colorToMap)} style={{backgroundColor: colorToMap}}/>
                        )}
                    </div>
                </div>
                <div className='models-wrapper'>
                    <p>Model</p>
                    <div className='models'>
                        {data.models.map(modelToMap =>
                            <img className={`${modelToMap === model && 'selected'}`}
                                 onClick={() => setModel(modelToMap)} src={photo} alt='product'/>
                        )}
                    </div>
                </div>
                <div className='models-wrapper'>
                    <p>Size</p>
                    <div className='models'>
                        {data.sizes.map(sizeToMap =>
                            <div className={`size ${sizeToMap === size && 'selected'}`}
                                 onClick={() => setSize(sizeToMap)}><p>{sizeToMap}</p></div>
                        )}
                    </div>
                </div>
            </div>
            <div className='quantity-buy'>
                {!matches &&
                    <div className='quantity'>
                        <IconButton onClick={decreaseQuantity}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                 fill="none">
                                <path
                                    d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </IconButton>
                        <p>{quantity}</p>
                        <IconButton onClick={increaseQuantity}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                 fill="none">
                                <path
                                    d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 11.167V21.8337" stroke="black" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </IconButton>
                    </div>
                }
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0_2244_34040)">
                            <path
                                d="M5.33268 15.1663C5.70087 15.1663 5.99935 14.8679 5.99935 14.4997C5.99935 14.1315 5.70087 13.833 5.33268 13.833C4.96449 13.833 4.66602 14.1315 4.66602 14.4997C4.66602 14.8679 4.96449 15.1663 5.33268 15.1663Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M12.6667 15.1663C13.0349 15.1663 13.3333 14.8679 13.3333 14.4997C13.3333 14.1315 13.0349 13.833 12.6667 13.833C12.2985 13.833 12 14.1315 12 14.4997C12 14.8679 12.2985 15.1663 12.6667 15.1663Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M1.36719 1.86621H2.70052L4.47385 10.1462C4.53891 10.4495 4.70763 10.7205 4.951 10.9128C5.19436 11.105 5.49712 11.2064 5.80719 11.1995H12.3272C12.6306 11.1991 12.9248 11.0951 13.1612 10.9048C13.3976 10.7145 13.5619 10.4492 13.6272 10.1529L14.7272 5.19954H3.41385"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2244_34040">
                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Add to cart
                </button>
                <button onClick={() => navigate('/cart')} className='green-light'>
                    Buy Now
                </button>
                {!matches &&
                    <IconButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path
                                d="M13.6134 3.55298C13.2789 3.21736 12.8815 2.95107 12.4439 2.76937C12.0064 2.58767 11.5372 2.49414 11.0634 2.49414C10.5896 2.49414 10.1204 2.58767 9.68284 2.76937C9.24526 2.95107 8.84784 3.21736 8.51339 3.55298L8.00006 4.07298L7.48672 3.55298C7.15227 3.21736 6.75486 2.95107 6.31727 2.76937C5.87968 2.58767 5.41053 2.49414 4.93672 2.49414C4.46291 2.49414 3.99376 2.58767 3.55618 2.76937C3.11859 2.95107 2.72118 3.21736 2.38672 3.55298C0.973391 4.96631 0.886724 7.35298 2.66672 9.16631L8.00006 14.4996L13.3334 9.16631C15.1134 7.35298 15.0267 4.96631 13.6134 3.55298Z"
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                }
            </div>
            <div className='free-shiping'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M14 16H9M19 16H22V12.85C22.0007 12.6121 21.9165 12.3816 21.7625 12.2002C21.6085 12.0187 21.3949 11.8981 21.16 11.86L16 11L13.3 7.40005C13.2069 7.27585 13.0861 7.17505 12.9472 7.10562C12.8084 7.03619 12.6552 7.00005 12.5 7.00005H5.24C4.86727 6.99745 4.50123 7.09907 4.18318 7.29344C3.86513 7.4878 3.60772 7.76718 3.44 8.10005L2.64 9.73005C2.22015 10.5647 2.00099 11.4858 2 12.42V16H4"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M6.5 19C7.88071 19 9 17.8807 9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5C4 17.8807 5.11929 19 6.5 19Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M16.5 19C17.8807 19 19 17.8807 19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p><b>Free shipping :</b> on orders over $750 and above</p>
            </div>
        </div>
    );
};

export default RightSideInfo;
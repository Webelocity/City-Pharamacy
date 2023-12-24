import React from 'react';
import {useSwiper} from "swiper/react";

const SwiperNavButton = () => {
    const swiper = useSwiper();
    return (
        <>
            <button onClick={() => swiper.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                     fill="none">
                    <g clip-path="url(#clip0_2154_6739)">
                        <path
                            d="M6.7377 4.4627C6.9377 4.6377 7.0377 4.85019 7.0377 5.10019C7.0377 5.35019 6.9377 5.55019 6.7377 5.7002L3.2127 9.3002H18.4377C18.9877 9.35019 19.2877 9.6502 19.3377 10.2002C19.2877 10.7502 18.9877 11.0502 18.4377 11.1002H3.2127L6.7752 14.6627C7.1252 15.0877 7.1252 15.5127 6.7752 15.9377C6.3502 16.2877 5.9252 16.2877 5.5002 15.9377L0.400195 10.8377C0.0501953 10.4127 0.0501953 9.9877 0.400195 9.5627L5.5002 4.4627C5.9252 4.11269 6.3377 4.11269 6.7377 4.4627Z"
                            fill="#219D50"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2154_6739">
                            <rect width="19.2" height="19.2" fill="white"
                                  transform="matrix(1 0 0 -1 0.400391 19.7998)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <button onClick={() => swiper.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                     fill="none">
                    <g clip-path="url(#clip0_2154_33109)">
                        <path
                            d="M13.2623 4.4627C13.0623 4.6377 12.9623 4.85019 12.9623 5.10019C12.9623 5.35019 13.0623 5.55019 13.2623 5.7002L16.7873 9.3002H1.5623C1.0123 9.35019 0.712303 9.6502 0.662304 10.2002C0.712303 10.7502 1.0123 11.0502 1.5623 11.1002H16.7873L13.2248 14.6627C12.8748 15.0877 12.8748 15.5127 13.2248 15.9377C13.6498 16.2877 14.0748 16.2877 14.4998 15.9377L19.5998 10.8377C19.9498 10.4127 19.9498 9.9877 19.5998 9.5627L14.4998 4.4627C14.0748 4.11269 13.6623 4.11269 13.2623 4.4627Z"
                            fill="#219D50"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2154_33109">
                            <rect width="19.2" height="19.2" fill="white"
                                  transform="matrix(-1 0 0 -1 19.5996 19.7998)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </>
    );
};

export default SwiperNavButton;
import React, { useCallback, useRef } from "react";
import {
  Container,
  IconButton,
  InputAdornment,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import "./OurProductsSwiper.scss";
import covid from "../../assets/covid.svg";
import health from "../../assets/health.png";
import beauty from "../../assets/beauty.png";
import personalcare from "../../assets/personalcare.png";
import babycare from "../../assets/babycare.png";
import { Link } from "react-router-dom";
import next from "../../assets/Button - Next slide.png";
import prev from "../../assets/Left Arrow.png";

const OurProductsSwiper = () => {
  const categories = [
    {
      name: "COVID-19 Essentials",
      numberOfItems: 28,
      photo: covid,
      buttonLink: "Shop",
    },
    {
      name: "Health & Wellness",
      numberOfItems: 35,
      photo: health,
      buttonLink: "Shop",
    },
    { name: "Beauty", numberOfItems: 34, photo: beauty, buttonLink: "Shop" },
    {
      name: "Personal Care",
      numberOfItems: 31,
      photo: personalcare,
      buttonLink: "Shop",
    },
    {
      name: "Baby & Child",
      numberOfItems: 20,
      photo: babycare,
      buttonLink: "Shop",
    },
    {
      name: "Suppliments",
      numberOfItems: 17,
      photo: covid,
      buttonLink: "Shop",
    },
  ];

  const small = useMediaQuery("(max-width:600px)");
  const medium = useMediaQuery("(min-width:600px)");
  const large = useMediaQuery("(min-width:1200px)");

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Container
      sx={{
        maxWidth: "1440px !important",
        paddingX: { xs: "0px !important", md: "auto" },
      }}>
      <div className="our-products-wrapperH">
        <div className="products">
          <Swiper
            slidesPerView={large ? 5 : medium ? 3 : small && 1.5}
            spaceBetween={24}
            modules={[FreeMode, Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="mySwiper"
            freeMode={true}
            speed={400}>
            {categories.map((category) => (
              <SwiperSlide>
                <div className="inside-swiper">
                  <h1>{category.name}</h1>
                  <p>{category.numberOfItems} items</p>
                  <img src={category.photo} alt={category.name} />
                  <Link className="button" to={category.buttonLink}>
                    Shop Now
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="buttons">
            <img src={prev} alt="arrow" ref={navigationPrevRef} />
            <img src={next} alt="arrow" ref={navigationNextRef} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurProductsSwiper;

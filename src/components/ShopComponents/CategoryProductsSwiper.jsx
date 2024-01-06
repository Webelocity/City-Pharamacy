import React from "react";
import "./CategoryProductsSwiper.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { Divider, useMediaQuery } from "@mui/material";
import SwiperNavButton from "../SwiperNavButton";
import ShopProducts from "./ShopProducts";

const CategoryProductsSwiper = ({ data, largeAmountOfProducts, mediumAmountOfProducts, smallAmountOfProducts }) => {
  const smallDisplay = useMediaQuery("(max-width:600px)");
  const mediumDisplay = useMediaQuery("(min-width:600px)");
  const largeDisplay = useMediaQuery("(min-width:1200px)");

  return (
    <div className="category-product-swiper-wrapper">
      <div className="products">
        <Swiper
          slidesPerView={
            largeDisplay ? largeAmountOfProducts : mediumDisplay ? mediumAmountOfProducts : smallDisplay && smallAmountOfProducts
          }
          spaceBetween={10}
          modules={[Navigation, FreeMode]}
          navigation={true}
          className="mySwiper"
          freeMode={true}
          speed={800}>
          <div className="top-section">
            <h1>{data.name}</h1>
            <div className="top-buttons">
              <button>View more</button>
              <Divider
                sx={{
                  display: { xs: "none", lg: "flex" },
                  height: "30px",
                  marginTop: "8px !important",
                }}
                orientation="vertical"
                flexItem
              />
              <div className="nav-buttons">
                <SwiperNavButton />
              </div>
            </div>
          </div>

          {data.products.map((product,index) => (
            <SwiperSlide key={index}>
              <ShopProducts
                name={product.name}
                photo={product.photo}
                price={product.price}
                rating={product.rating}
                id={product.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button>View More</button>
    </div>
  );
};

export default CategoryProductsSwiper;

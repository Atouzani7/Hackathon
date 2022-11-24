import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import "./Slider.css";

import { Pagination, Navigation } from "swiper";

export default function Slider() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(({ data }) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop
      loopFillGroupWithBlank
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {categories.map((category) => {
        return (
          <SwiperSlide className="slide" key={category.idCategory}>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            {category.strCategory}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

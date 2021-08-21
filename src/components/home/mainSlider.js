import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const MainSlider = () => {
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        getData();
        async function getData() {
            const response = await fetch("http://localhost:8000/api/v1/categories/");
            const data = await response.json();
            setSlider(data);
        }
    }, []);

    return (
        <div className="home-slider-parallax">
            {/* display books from the API */}
            {slider && (
                <Swiper
                    spaceBetween={20}
                    speed={600}
                    navigation={true}
                    className="mySwiper"
                >
                    {slider.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={"home-Slide-" + index} />
                            <div className="parallax-text">
                                <h1>{slide.title}</h1>
                                <h3>{slide.description}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default MainSlider;

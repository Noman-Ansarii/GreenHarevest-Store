import React, { useState, useEffect } from 'react'
import IMG1 from '../images/Slider/cat-1.jpg.webp';
import IMG2 from '../images/Slider/cat-2.jpg.webp';
import IMG3 from '../images/Slider/cat-3.jpg.webp';
import IMG4 from '../images/Slider/cat-4.jpg.webp';
import IMG5 from '../images/Slider/cat-5.jpg.webp';
// Import Swiper React componentscomponents
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
function Slider() {

    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setSlidesPerView(1);
            } else if (window.innerWidth <= 991) {
                setSlidesPerView(2);
            } else if (window.innerWidth <= 1199) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };

        // Initial call
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="categories">
            <div className="container">
                <div className="row" id='row'>
                    <Swiper
                        loop={true}
                        watchSlidesProgress={true}
                        slidesPerView={slidesPerView}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            loop: true,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                            clickable: true,

                        }}
                        pagination={{
                            el: '.swiper-Pagniattion', clickable: true
                        }}
                        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
                        className="mySwiper">
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG1} alt="" /><h5 className='card-img-overlay'><a href="/">Fresh Fruit</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG2} alt="" /><h5 className='card-img-overlay'><a href="/">Dried Fruit</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG3} alt="" /><h5 className='card-img-overlay'><a href="/">Vegetables</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG4} alt="" /><h5 className='card-img-overlay'><a href="/">Fruit Drink</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG5} alt="" /><h5 className='card-img-overlay'><a href="/">Meal</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG1} alt="" /><h5 className='card-img-overlay'><a href="/">Fresh Fruit</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG2} alt="" /><h5 className='card-img-overlay'><a href="/">Dried Fruit</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG3} alt="" /><h5 className='card-img-overlay'><a href="/">Vegetables</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG4} alt="" /><h5 className='card-img-overlay'><a href="/">Fruit Drink</a></h5></div></SwiperSlide>
                        <SwiperSlide className='MySwiperSlide'><div className="img-fluid"><img src={IMG5} alt="" /><h5 className='card-img-overlay'><a href="/">Meal</a></h5></div></SwiperSlide>
                    </Swiper>
                    <div className="owl-nav1">
                        <div className="swiper-button-prev">
                            <button type="button" role="presentation" class="owl-prev" fdprocessedid="1i2x7q"><span class="bx bx-chevron-left"><span></span></span></button>
                        </div>
                        <div className="swiper-Pagniattion">

                        </div>
                        <div className="swiper-button-next">
                            <button type="button" role="presentation" class="owl-next" fdprocessedid="7eyu5f"><span class="bx bx-chevron-right"><span></span></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;

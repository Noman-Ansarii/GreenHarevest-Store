import React from 'react';
import IMG1 from '../images/Products/lp-1.jpg.webp';
import IMG2 from '../images/Products/lp-2.jpg.webp';
import IMG3 from '../images/Products/lp-3.jpg.webp';

// Import Swiper React componentscomponents
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

function Products() {
    return (
        <>
            <section className="latest-product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    <Swiper
                                        loop={true}
                                        watchSlidesProgress={true}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                            loop: true,
                                        }}
                                        navigation={{
                                            prevEl: '.owl-nav-button-prev1',
                                            nextEl: '.owl-nav-button-next1',
                                            clickable: true,
                                        }}
                                        modules={[Autoplay, Navigation, EffectCoverflow]}
                                        className="mySwiper">
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="owl-nav">
                                        <div className="owl-nav-button-prev1">
                                            <button type="button" role="presentation" class="owl-prev" fdprocessedid="1i2x7q"><span class="bx bx-chevron-left"><span></span></span></button>
                                        </div>
                                        <div className="owl-nav-button-next1">
                                            <button type="button" role="presentation" class="owl-next" fdprocessedid="7eyu5f"><span class="bx bx-chevron-right"><span></span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Top Rated Products</h4>
                                <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    <Swiper
                                        loop={true}
                                        watchSlidesProgress={true}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                            loop: true,
                                        }}
                                        navigation={{
                                            prevEl: '.owl-nav-button-prev2',
                                            nextEl: '.owl-nav-button-next2',
                                            clickable: true,
                                        }}
                                        modules={[Autoplay, Navigation, EffectCoverflow]}
                                        className="mySwiper">
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="owl-nav">
                                        <div className="owl-nav-button-prev2">
                                            <button type="button" role="presentation" class="owl-prev" fdprocessedid="1i2x7q"><span class="bx bx-chevron-left"><span></span></span></button>
                                        </div>
                                        <div className="owl-nav-button-next2">
                                            <button type="button" role="presentation" class="owl-next" fdprocessedid="7eyu5f"><span class="bx bx-chevron-right"><span></span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Review Products</h4>
                                <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    <Swiper
                                        loop={true}
                                        watchSlidesProgress={true}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                            loop: true,
                                        }}
                                        navigation={{
                                            prevEl: '.owl-nav-button-prev3',
                                            nextEl: '.owl-nav-button-next3',
                                            clickable: true,
                                        }}
                                        modules={[Autoplay, Navigation, EffectCoverflow]}
                                        className="mySwiper">
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG1} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG2} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src={IMG3} alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="owl-nav">
                                        <div className="owl-nav-button-prev3">
                                            <button type="button" role="presentation" class="owl-prev" fdprocessedid="1i2x7q"><span class="bx bx-chevron-left"><span></span></span></button>
                                        </div>
                                        <div className="owl-nav-button-next3">
                                            <button type="button" role="presentation" class="owl-next" fdprocessedid="7eyu5f"><span class="bx bx-chevron-right"><span></span></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;

import React, {useState} from 'react'
import IMG from '../images/banner.jpg.webp'

function InrterFace() {

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }
    return (
        <>
            <section class="hero">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="hero__categories">
                                <div class="hero__categories__all" onClick={toggleDropdown}>
                                    <i class="bx bx-menu"></i>
                                    <span>All Departments</span>
                                    <span className={dropdown ? 'bx bx-chevron-up' : 'bx bx-chevron-down'}></span>
                                </div>
                                <ul style={{ display: dropdown ? 'block' : 'none' }}>
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter &amp; Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya &amp; Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="hero__search">
                                <div class="hero__search__form">
                                    <form action="#">
                                        <div class="hero__search__categories">
                                            All Categories
                                            <i class='bx bx-chevron-down' ></i>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?"/>
                                            <button type="submit" class="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div class="hero__search__phone">
                                    <div class="hero__search__phone__icon">
                                        <i class="bx bx-phone"></i>
                                    </div>
                                    <div class="hero__search__phone__text">
                                        <h5>+92-323-737-5911</h5>
                                        <span>Support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="hero__item set-bg" style={{backgroundImage: `url(${IMG})`}}>
                                <div class="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>Vegetable <br/>100% Organic</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="#" class="primary-btn">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InrterFace

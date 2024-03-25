import React, {useState} from 'react'
import IMG from '../images/logo.png.png'
import OverlaySliderOfNavbar from './OverlaySliderOfNavbar';

function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="header__logo">
                            <a href="./index.html"><img src={IMG} alt="" /></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <nav class="header__menu">
                            <ul>
                                <li class="active"><a href="./index.html">Home</a></li>
                                <li><a href="./shop-grid.html">Shop</a></li>
                                <li><a href="#">Pages<i class='bx bx-chevron-down' ></i></a>
                                    <ul class="header__menu__dropdown">
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-3">
                        <div class="header__cart">
                            <ul>
                                <li><a href="#"><i class="bx bx-heart"></i> <span>1</span></a></li>
                                <li><a href="#"><i class="bx bx-shopping-bag"></i> <span>3</span></a></li>
                            </ul>
                            <div class="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div class="humberger__open" onClick={toggleSidebar}>
                    <i class="bx bx-menu"></i>
                </div>
            </div>
            <OverlaySliderOfNavbar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )
}

export default Navbar

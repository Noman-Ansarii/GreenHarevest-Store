import React, { useEffect } from 'react';
import IMG1 from '../images/logo.png.png';
import IMG2 from '../images/language.png.webp';

function OverlaySliderOfNavbar({ isOpen, toggleSidebar }) {
    useEffect(() => {
        const closeSidebarOnOutsideClick = (event) => {
            if (isOpen && !event.target.closest('.humberger__menu__wrapper')) {
                toggleSidebar();
            }
        };

        document.addEventListener('mousedown', closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
        };
    }, [isOpen, toggleSidebar]);

    return (
        <>
            {/* Overlay to cover the body when the sidebar is open */}
            {isOpen && <div className="humberger__menu__overlay active"></div>}
            <div className={`humberger__menu__wrapper ${isOpen ? 'show__humberger__menu__wrapper' : ''}`}>
                <div className="humberger__menu__logo">
                    <a href="#"><img src={IMG1} alt="" /></a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="#"><i className="bx bx-heart"></i> <span>1</span></a></li>
                        <li><a href="#"><i className="bx bx-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src={IMG2} alt="" />
                        <div>English</div>
                        <span className="bx bx-chevron-down"></span>
                        <ul>
                            <li><a href="#">English</a></li>
                            <li><a href="#">Urdu</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="#"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="./shop-grid.html">Shop</a></li>
                        <li><a href="#">Pages</a>
                            <ul className="header__menu__dropdown">
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
                <div id="mobile-menu-wrap">
                    <div className="slicknav_menu">
                        <a href="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_open">
                            <span className="slicknav_menutxt">MENU</span>
                            <span className="bx bx-menu">
                                <span className="slicknav_icon-bar"></span>
                                <span className="slicknav_icon-bar"></span>
                                <span className="slicknav_icon-bar"></span>
                            </span>
                        </a>
                        <nav className="slicknav_nav" aria-hidden="false" role="menu">
                            <ul>
                                <li className="active"><a href="./index.html" role="menuitem">Home</a></li>
                                <li><a href="./shop-grid.html" role="menuitem">Shop</a></li>
                                <li className="slicknav_collapsed slicknav_parent">
                                    <a href="#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row">
                                        <a href="#">Pages</a>
                                        <span className="slicknav_arrow">►</span>
                                    </a>
                                    <ul className="header__menu__dropdown slicknav_hidden" role="menu" style={{ display: "none" }} aria-hidden="true">
                                        <li><a href="./shop-details.html" role="menuitem" tabIndex="-1">Shop Details</a></li>
                                        <li><a href="./shoping-cart.html" role="menuitem" tabIndex="-1">Shoping Cart</a></li>
                                        <li><a href="./checkout.html" role="menuitem" tabIndex="-1">Check Out</a></li>
                                        <li><a href="./blog-details.html" role="menuitem" tabIndex="-1">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html" role="menuitem">Blog</a></li>
                                <li><a href="./contact.html" role="menuitem">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header__top__right__social">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                    <a href="#"><i className="bx bxl-pinterest"></i></a>
                </div>
            </div>
        </>
    )
}

export default OverlaySliderOfNavbar;

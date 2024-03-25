import React from 'react'
import IMG1 from '../images/Banner/banner-1.jpg.webp'
import IMG2 from '../images/Banner/banner-2.jpg.webp'

function Banner() {
    return (
        <>
            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="banner__pic">
                                <img src={IMG1} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="banner__pic">
                                <img src={IMG2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner

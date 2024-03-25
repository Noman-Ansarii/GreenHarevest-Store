import React from 'react'
import IMG1 from '../images/Blog/blog-1.jpg.webp'
import IMG2 from '../images/Blog/blog-2.jpg.webp'
import IMG3 from '../images/Blog/blog-3.jpg.webp'

function Blog() {
    return (
        <>
            <section class="from-blog spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title from-blog__title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={IMG1} alt="" />
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class='bx bx-calendar'></i> May 4,2019</li>
                                        <li><i class='bx bx-comment' ></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={IMG2} alt="" />
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class='bx bx-calendar'></i> May 4,2019</li>
                                        <li><i class='bx bx-comment' ></i> 5</li>
                                    </ul>
                                    <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={IMG3} alt="" />
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class='bx bx-calendar'></i> May 4,2019</li>
                                        <li><i class='bx bx-comment' ></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Visit the clean farm in the US</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog

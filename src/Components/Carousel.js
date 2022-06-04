import React from 'react';
// import Gadgets from './Gadgets';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <Link to = "/gadgets" class="carousel-item active">
                        <img src="https://www.techadvisor.com/cmsdata/slideshow/3214618/apple_macbook_air_m1_2020_review_42_thumb800.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Electronics & Gadgets</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </Link>
                    <Link to = "/textbook" class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Textbooks</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </Link>
                    <Link to = "/vehicle" class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1552642762-f55d06580015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Vehicles</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </Link>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
import React from 'react';
// import Gadgets from './Gadgets';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" style={{height:"500px",overflow:"hidden"}} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <Link to = "/categories/Gadgets" className="carousel-item active">
                        <img src="https://www.techadvisor.com/cmsdata/slideshow/3214618/apple_macbook_air_m1_2020_review_42_thumb800.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block carousel-caption-custom">
                            <h5>Electronics & Gadgets</h5>
                            <p>Your place for second hand Electronics & Gadgets</p>
                        </div>
                    </Link>
               
                    <Link to = "/categories/Textbooks" className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block carousel-caption-custom">
                            <h5>Textbooks</h5>
                            <p>Your place for second hand books</p>
                        </div>
                    </Link>
                    <Link to = "/categories/Vehicles" className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1552642762-f55d06580015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block carousel-caption-custom">
                            <h5>Vehicles</h5>
                            <p>Your place for second hand</p>
                        </div>
                    </Link>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
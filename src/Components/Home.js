import React from 'react';
import Carousel from './Carousel';
import ProductsPage from './ProductsPage';
import Results from './Results';

const Home = () => {
  return (
    <div>
        {/* <Results /> */}
        <Carousel />
        <ProductsPage type = "All" />
    </div>
    
  )
}

export default Home
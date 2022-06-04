import React from 'react';
import Carousel from './Carousel';
import ProductsPage from './ProductsPage';

const Home = () => {
  return (
    <div>
        <Carousel />
        <ProductsPage type = "All" />
    </div>
    
  )
}

export default Home
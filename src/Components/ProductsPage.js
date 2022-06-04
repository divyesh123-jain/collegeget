import React from 'react'
import Card from './Card';

const ProductsPage = ({ type }) => {
    const arr = [1,2,3,4,5];
    return (
        <div className='container-fluid mt-4'>
            <h2>Displaying {type} Products</h2>
            <div className="row mt-5">
                {arr.map((card)=><Card />)}     
            </div>
        </div>
    )
}

export default ProductsPage
import React from 'react'

const ProductContainer = ({product}) => {
  return (
    <div><h2>{product.data().pname}</h2>
    <div className="row mt-4">
        <img src={product.data().img} style={{ width: "500px", height: "500px", objectFit: "contain" }} alt="" />

        <div className='col-md-6 shadow-sm p-3 mb-5 bg-white rounded'>
            <h2>Posted By, </h2>
            <div style={{ display: "flex",gap:"1rem",alignItems:"center" ,marginBottom:"2rem" }}>
                <img src={product.data().userImage} style={{ height: "50px", width: "50px", borderRadius: "50%" }} alt="" />
                <p>{product.data().sname}</p>
            </div>
            <div>{product.data().desc}</div>
            <div className='pt-4'>
                <p style={{ textTransform: "capitalize" }}>City : {product.data().city}</p>
                <p style={{ textTransform: "capitalize" }}>State : {product.data().state}</p>
                <p style={{ textTransform: "capitalize" }}>College : {product.data().college}</p>
                <p style={{ textTransform: "capitalize" }}>Price : &#8377; {product.data().price}</p>
                <p style={{ textTransform: "capitalize" }}>Year :  {product.data().year}</p>

            </div>
            <a href = {`mailto:${product.data().email}`} className='btn btn-primary'>Contact Seller</a>
        </div>
    </div>
</div>
  )
}

export default ProductContainer
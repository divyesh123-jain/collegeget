import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
  return (
    <div className='col-md-4 mt-2'>
      <div className="card ">
        <img src={post.img} className="card-img-top" style = {{height:"200px",width:"100%",objectFit:"contain"}} alt="card" />
        <div className="card-body">
          <h5 className="card-title">{post.pname}</h5>
          <p className="card-text">{post.desc}</p>
          <Link to={`/product/${post.id}`} className="btn btn-primary">Buy</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
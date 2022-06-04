import React from 'react'

const Card = ({ post }) => {
  return (
    <div className='col-md-4 mt-2'>
      <div className="card ">
        <img src={post.img} className="card-img-top" alt="card" />
        <div className="card-body">
          <h5 className="card-title">{post.pname}</h5>
          <p className="card-text">{post.desc}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Card;
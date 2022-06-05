import React from 'react';
import { Link } from 'react-router-dom';
import { deleteDoc,doc } from 'firebase/firestore';
import { db } from '../Firebase';
const handleDelete = async(id) => {
  try{
  await deleteDoc(doc(db,"posts",id));
}
catch(err){console.log(err)}
}

const Card = ({ post,del }) => {
  return (
    <div className='col-md-4 mt-2'>
      <div className="card ">
        <img src={post.img} className="card-img-top" style = {{height:"200px",width:"100%",objectFit:"contain"}} alt="card" />
        <div className="card-body">
          <h5 className="card-title">{post.pname}</h5>
          <p className="card-text">{post.desc}</p>
          <Link to={`/product/${post.id}`} className="btn btn-primary">Buy</Link>
          {del?<button onClick = {()=>handleDelete(post.id)} className='ml-2  btn btn-danger'>Delete</button>:""}
        </div>
      </div>
    </div>
  )
}

export default Card;
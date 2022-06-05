import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../Firebase';


const Product = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState();
    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), where("id", "==", id), orderBy("time")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            )
        , [db])
    console.log(posts);
    return (
        <div>
            {posts && posts.map((product) => (
                <>
                    <h2>{product.data().pname}</h2>
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

                            </div>
                            <a href = {`mailto:${product.email}`} className='btn btn-primary'>Contact Seller</a>
                        </div>
                    </div>

                </>
            ))}

        </div>
    )
}

export default Product
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import ProductContainer from './ProductContainer';


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
        , [id])
    console.log(posts);
    return (
        <div>
            {posts && 
                    <ProductContainer product={posts[0]}/>
            }

        </div>
    )
}

export default Product
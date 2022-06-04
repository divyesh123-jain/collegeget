import React, { useState,useEffect   } from 'react'
import Card from './Card';
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

const ProductsPage = ({ type }) => {
    const [posts,setPosts] = useState([]);
    useEffect(
        () => 
            onSnapshot(
                query(collection(db,"posts") ,orderBy("time","desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            )    
    , [db])
    return (
        <div className='container-fluid mt-4'>
            <h2>Displaying {type} Products</h2>
            <div className="row mt-5">
                {posts.length!==0?posts.map((card)=><Card key = {card.id} post = {card.data()} />):""}     
            </div>
        </div>
    )
}

export default ProductsPage
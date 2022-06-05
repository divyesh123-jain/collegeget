import React, { useState,useEffect } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../Firebase';

const Results = () => {
    const[posts,setPosts] =useState([]);
    const {pname} = useParams();
    
    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), where("pname", "==", pname), orderBy("time")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            )
        , [pname])
    return (
        <>
        <h2>Showing Results For query</h2>
    <div className='row'>
        {posts.length!==0?posts.map((res)=><Card key ={res.id} post ={res.data()} />):"Nothing To Show"}
    </div>
    </>
  )
}

export default Results
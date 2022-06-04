import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../Firebase';


const Product = () => {
    const  {id} = useParams();
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
        <h2>
            {}
        </h2>
    </div>
  )
}

export default Product
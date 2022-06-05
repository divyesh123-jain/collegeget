import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import { query,collection,where,orderBy,onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import Card from './Card';

const MyAds = () => {
    // const [email, setEmail] = useState("");
    const [posts, setPosts] = useState([])
    useEffect(() => {
        
        onAuthStateChanged(auth, (currentUser) => {
            // setEmail(currentUser.email);
            findMyAds(currentUser.email);
            
            // console.log(currentUser.photoURL);
        });
        
    }, [])

    const findMyAds = (email) => {
        onSnapshot(
            query(collection(db, "posts"), where("email", "==", email), orderBy("time")),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        )
    }
    return (
                <><>
        </><h2>My Ads</h2><div className="row">
                {console.log(posts)}
                {posts.map((card) => <Card del key={card.id} post={card.data()} />)}
            </div></>


    )
}

export default MyAds
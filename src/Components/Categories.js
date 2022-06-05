import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from './SearchBox';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import Card from './Card';


const Categories = () => {
    const { category } = useParams();
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    useEffect(
        () =>
                onSnapshot(
                    query(collection(db, "posts"), where("select", "==", category), orderBy("time")),
                    (snapshot) => {
                        setPosts(snapshot.docs);
                    }
                )
        , [category])
    return (
        <>
            <div className='categoriesSearch'>
                <SearchBox search={search} setSearch={setSearch}></SearchBox>
            </div>
            <h2>Showing Results for {category}</h2>
            <div className="row">
                {console.log(posts)
                }
                {posts.map((card) => <Card key={card.id} post={card.data()} />)}
            </div>

        </>
    )
}

export default Categories
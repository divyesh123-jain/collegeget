import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import Home from './Home';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Sell from './Sell';

const Body = () => {
    const [user,setUser] = useState();
    const [search,setSearch] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
		onAuthStateChanged(auth,(currentUser)=>{
			if(!currentUser) navigate('/login') ;
            setUser(currentUser.photoURL);
            // console.log(currentUser.photoURL);
		  })
	}, [])
  return (
    <div>
        <Navbar  search = {search} user = {user} setSearch = {setSearch}  />
        <div className="container">
        <Routes>
            <Route exact path = "/" element = {<Home/>} />
            <Route exact path = "/sell" element = {<Sell />} />
        </Routes>
        </div>
        
    </div>
  )
}

export default Body
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { auth } from './Firebase';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sell from './Components/Sell';
import Login from './Components/Login'
import {onAuthStateChanged} from 'firebase/auth';
import {useState} from 'react';

function App() {
  const[user,setUser] = useState();
  onAuthStateChanged(auth,(currentUser)=>{
    if(currentUser) setUser(currentUser);
  })
  if(user){
  return (
    <>
    {/* <Login /> */}
    <Navbar />
    <div className='container'>
    <Routes>
      <Route exact path = "/" element = {<Home></Home>} />
      <Route exact path = "/sell" element = {<Sell />} />
      <Route exact path = "/login" element = {<Login />} />
    </Routes>      
    </div>
    </>  
    );
  }
  return(
    <Login />
  )
}

export default App;

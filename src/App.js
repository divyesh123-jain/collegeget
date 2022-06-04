import { Routes,Route } from 'react-router-dom';
import './App.css';
import { auth } from './Firebase';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sell from './Components/Sell';
import Login from './Components/Login'
import {onAuthStateChanged} from 'firebase/auth';
import {useState} from 'react';
import Body from './Components/Body';

function App() {
  const[user,setUser] = useState();
  
  return (
    <>

    <Routes>
      <Route exact path = "/login" element = {<Login />} />
      <Route exact path = "*" element = {<Body />} />
    </Routes>      

    </>  
    );
  
}

export default App;

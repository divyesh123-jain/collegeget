import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sell from './Components/Sell';
import Login from './Components/Login'

function App() {
  return (
    <>
    <Login />
    {/* <Navbar />
    <div className='container'>
    <Routes>
      <Route exact path = "/" element = {<Home></Home>} />
      <Route exact path = "/sell" element = {<Sell />} />
    </Routes>      
    </div> */}
    </>  
    );
}

export default App;

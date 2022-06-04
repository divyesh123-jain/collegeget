import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sell from './Components/Sell';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path = "/" element = {<Home></Home>} />
      <Route exact path = "/sell" element = {<Sell />} />
    </Routes>      
    </>  
    );
}

export default App;

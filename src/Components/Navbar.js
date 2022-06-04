import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../Firebase';
// import { signOut } from 'firebase/auth';
import SearchBox from './SearchBox';

const Navbar = ({search,setSearch,user}) => {
    const handleSignOut  = (e) =>{
        e.preventDefault();
        auth.signOut();
    }
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">CollegeGet</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sell">Sell Item</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/categories/Gadgets">Gadgets</Link>
            <Link className="dropdown-item" to="/categories/Textbooks">Textbooks</Link>
            {/* <div className="dropdown-divider"></div> */}
            <Link className="dropdown-item" to = "/categories/Vehicles">Vehicles</Link>
            <Link className="dropdown-item" to="/categories/Accessories">Accessories</Link>
          </div>
        </li>
      </ul>
      <SearchBox search = {search} setSearch = {setSearch}></SearchBox>
      {user&& <img src={user} alt="userimg" style={{width:"50px",height:"50px",borderRadius:"50%",marginRight:"20px"}} />}
      
      <button className='btn btn-dark' onClick = {handleSignOut}>Logout</button>
    </div>
  </nav>
  </div>
  )
}

export default Navbar
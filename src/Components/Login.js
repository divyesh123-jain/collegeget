import React from 'react';
import './styles/login.css';

const Login = () => {
    return (
        <div>
            <img className="wave" src="3.png" />
	<div className="container">
		<div className="img">
			<img src="4.svg" />
		</div>
		<div className="login-content">
			<form action="index.html">
				<img src="5.svg" />
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		  
           		</div>
           		
            	<input type="submit" className="btn" value="Login With Google" />
            </form>
        </div>
    </div>
            
        </div>
  );
  
  
}

export default Login;

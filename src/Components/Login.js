import React, { useState,useEffect } from 'react';
import './styles/login.css';
import { auth } from '../Firebase';
import { onAuthStateChanged, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	useEffect(() => {
		onAuthStateChanged(auth,(currentUser)=>{
			if(currentUser) navigate('/') ;
		  })
	}, [navigate])
	
	const handleSignIn = (e) => {
		e.preventDefault();
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				setUser(credential);
			}).catch((error) => {
				console.log(error)
			});
	}

	return (
		<div>
			<img className="wave" src="3.png" alt = "wave" />
			<div className="containerLogin">
				<div className="img">
					<img src="4.svg" alt ="4" />
				</div>
				<div className="login-content">
					<form>
						<img src="5.svg" alt ="5" />
						<h2 className="title">Welcome</h2>
						<div className="input-div one">
							<div className="i">
								<i className="fas fa-user"></i>
							</div>

						</div>

						<input type="submit" onClick={handleSignIn} className="button" value="Login With Google" />
					</form>
				</div>
			</div>

		</div>
	);


};

export default Login;

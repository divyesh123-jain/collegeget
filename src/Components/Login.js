import React from 'react';
import './styles/login.css';
import { auth } from '../Firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Login = () => {
	const handleSignIn = () => {
		// console.log(authentication);
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				// ...
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}

	return (
		<div>
			<img className="wave" src="3.png" />
			<div className="containerLogin">
				<div className="img">
					<img src="4.svg" />
				</div>
				<div className="login-content">
					<form>
						<img src="5.svg" />
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

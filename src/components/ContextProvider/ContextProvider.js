import React, { createContext, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);
	const [darkmode, setDarkmode] = useState(false);
	const [userphotooptional, setUserphotooptional] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const [premiumAccess, setPremiumAccess] = useState([]);

	const providerGoogle = new GoogleAuthProvider();
	const providerGithub = new GithubAuthProvider();

	const functionsignInWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signinWithGoogle = () => {
		return signInWithPopup(auth, providerGoogle);
	};

	const signinWithGithub = () => {
		return signInWithPopup(auth, providerGithub);
	};
	const Signouthandle = () => {
		return signOut(auth);
	};

	const updateUserProfile = (profile) => {
		console.log("profile", profile);
		return updateProfile(auth.currentUser, profile);
	};

	const handlehandleAddtoCart = ({ id, course }) => {
		let newCart = [];

		const exists = cart.find((coursename) => coursename === course);
		if (!exists) {
			newCart = [...cart, course];
			toast(" Thank for Click This for The Premium Access!", {
				position: "top-center",
				autoClose: 400,
				closeOnClick: true,
				pauseOnHover: true,
				theme: "light",
			});
		} else {
		}

		setCart(newCart);

		console.log("premium access", cart);
		setPremiumAccess(cart);
	};

	const darkmodeHandler = (toggler) => {
		console.log(darkmodeHandler);
		setDarkmode(toggler);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			console.log("user inside state", currentuser);
			setUser(currentuser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		signinWithGoogle,
		signinWithGithub,
		Signouthandle,
		functionsignInWithEmailAndPassword,
		premiumAccess,
		userphotooptional,

		loading,
		updateUserProfile,
		handlehandleAddtoCart,
		cart,
		darkmode,
		darkmodeHandler,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;

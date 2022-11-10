import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Login = () => {
	const [errorMessageDisplay, setErrorMessageDisplay] = useState();
	const [errorMessageDisplaycode, setErrorMessageDisplaycode] = useState();
	const {
		signinWithGoogle,
		signinWithGithub,
		functionsignInWithEmailAndPassword,
		user,
	} = useContext(AuthContext);

	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const navigate = useNavigate();
	console.log(from);

	const handlefunctionsignInWithEmailAndPassword = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log("emailpassword", email, password);


		
		functionsignInWithEmailAndPassword(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);

				form.reset("");

				toast("login successful !", {
					position: "top-right",
					autoClose: 300,
				});

				setErrorMessageDisplay("");

				// for (var i = 1; i < 10; i++) navigate(from, { replace: true });

				// navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessageDisplay(errorMessage);
				// form.reset("");
			});
		
	};

	useEffect(() => {
		if (user?.email) {
			navigate(from, { replace: true });
		}
	}, [user?.email, from, navigate]);

	const handleGoogleSignin = () => {
		signinWithGoogle()
			.then((result) => {
				const user = result.user;
				navigate(from, { replace: true });
				console.log(user);
				toast("login successful !", {
					position: "top-right",
					autoClose: 400,
				});

				setErrorMessageDisplay("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessageDisplay(errorMessage);
			});
	};
	
	

	return (
		<div>
			<div className="hero min-h-fit bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						<p className="py-6">Please Login! to see the content</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form
							onSubmit={handlefunctionsignInWithEmailAndPassword}
							action="/events"
							className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									name="email"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									placeholder="password"
									className="input input-bordered"
									name="password"
									required
								/>
								<label className="label">
									<Link
										to="#"
										className="label-text-alt link link-hover">
										Forgot password?
									</Link>
								</label>
								<label className="">
									Don't have an account?
									<Link
										to="/register"
										className="link border border-red  m-1 btn btn-success text-decoration-none btn-sm">
										Register Now
									</Link>
								</label>
							</div>
							<div className="border rounded-md shadow">
								<small className="text-red-500">
									{errorMessageDisplay}
								</small>
								{/* <small>{errorMessageDisplaycode}</small> */}
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary w-full">
									Login
								</button>
							</div>
						</form>

						<div className="form-control mt-6 p-2">
							<button
								onClick={handleGoogleSignin}
								className="btn btn-outline w-full flex align-middle text-right justify-center">
								<span className="pt-2">
									<FaGoogle className="p-0 m-0 fs-3 inline-block" />
								</span>{" "}
								Login with Google
							</button>
						</div>
						
						
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;

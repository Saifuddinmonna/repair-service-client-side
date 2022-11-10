import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Signup = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const [errorMessageDisplay, setErrorMessageDisplay] = useState("");
	const [errorMessageDisplaycode, setErrorMessageDisplaycode] = useState("");
	const [userName, setUserName] = useState();
	const [userPhoto, setUserPhoto] = useState();
	const navigate = useNavigate();
	console.log(createUser);

	const getFormValue = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photourl = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		setUserName(name);
		setUserPhoto(photourl);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				hadlerupdateUserProfile({ name, photourl });
				form.reset();
				toast(" User  created Successfully! !", { autoClose: 200 });
				navigate("/login");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				toast.warn(" profile created error  !", { autoClose: 200 });
				setErrorMessageDisplay(errorMessage);
				setErrorMessageDisplaycode(errorCode);
				form.reset();
			});
	};

	const hadlerupdateUserProfile = ({ name, photourl }) => {
		const profile = {
			displayName: name,
			photoURL: photourl,
		};
		updateUserProfile(profile)
			.then((result) => {
				toast("Profile updated! !", { autoClose: 200 });

				// Profile updated!
				// ...
			})

			.catch((error) => {
				const errorMessage = error.message;
				toast.warn(errorMessage);
				// An error occurred
				// ...
			});
	};

	return (
		<div>
			<div className="hero min-h-fit bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Register now!</h1>
						<p className="py-6">
							Please Register! to see the content
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={getFormValue} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">name</span>
								</label>
								<input
									type="text"
									placeholder="name"
									className="input input-bordered"
									name="name"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Photo-URL
									</span>
								</label>
								<input
									type="text"
									placeholder="Profile Photo Url"
									className="input input-bordered"
									name="photo"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									name="email"
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
								/>
								<label className="label">
									<small className="text-red-500">
										{errorMessageDisplay}
									</small>
									{/* <small>{errorMessageDisplaycode}</small> */}
								</label>
								<label className="label">
									Already have an account?
									<Link
										to="/login"
										className=" btn-info   border border-info shadow m-1 btn btn-sm">
										Login
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									onClick={hadlerupdateUserProfile}
									type="submit"
									className="btn btn-primary">
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Signup;

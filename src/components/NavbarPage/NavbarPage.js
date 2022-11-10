import React from "react";
import { useEffect } from "react";
// import { themeChange } from "theme-change";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { FaBeer, BiUserCircle, FaGithub, FaUserCheck } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import { Image } from "react-bootstrap";
import { useState } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";

const NavbarPage = () => {
	const { user, Signouthandle, darkmodeHandler } = useContext(AuthContext);
	const [toggler, setToggler] = useState(true);

	// useEffect(() => {
	// 	if (toggler) {
	// 		// setToggler(true);
	// 		const toggler = true;
	// 		darkmodeHandler(toggler);
	// 		console.log(toggler, "this is toggler true");
	// 	} else {
	// 		// setToggler(false);
	// 		const toggler = false;
	// 		darkmodeHandler(toggler);
	// 		console.log(toggler, "this is toggler false");
	// 	}

	// 	// 👆 false parameter is required for react project
	// }, []);

	const handleSignouthandle = () => {
		Signouthandle()
			.then((result) => {
				// Sign-out successful.
				toast("Sign-out successful. !", {
					position: "top-center",
					autoClose: 400,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				const user = result.user;
			})
			.catch((error) => {
				console.log(error.message);
				// An error happened.
			});
	};

	const toogleHandler = (e) => {
		const toggolvalue = e.target.checked;
		setToggler(toggolvalue);
		// console.log(toggler, "this is toggler");
		darkmodeHandler(toggler);
		// console.log("this is toggole value", toggolvalue);
	};
	return (
		<div className="navbar bg-blue-500">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<NavLink to="/">
							<a>Homepage</a>
						</NavLink>
						<NavLink to={"/blog"}>
							<a>Blog</a>
						</NavLink>
						<NavLink to="/services">
							<a>Services</a>
						</NavLink>

						<div>
							{!user?.uid ? (
								<>
									<NavLink
										className="px-2 text-decoration-none text-white"
										to="/signup">
										Register
									</NavLink>
									<NavLink
										className="px-2 text-decoration-none text-white"
										to="/login">
										Login
									</NavLink>
								</>
							) : (
								<>
									<Nav.Link eventKey={2}></Nav.Link>

									<span className="tooltipcustomhover px-2">
										<div className="tooltipcustomhover avatar align-items-center position-relative">
											<NavLink to="/myreview">
												<a>My review</a>
											</NavLink>
											<NavLink to="/addservice">
												<a>Add service</a>
											</NavLink>
											<small className="text-white tooltipcustom position-absolute -bottom-3 -left-5">
												{user?.displayName ||
													user?.email}
											</small>
											<div
												className="tooltipcustomhover  w-12 mask mask-hexagon"
												data-tip="hello">
												{user.photoURL ? (
													<img
														className="tooltipcustomhover"
														src={user?.photoURL}
														alt=""
													/>
												) : (
													<FaUserCheck className="p-0 m-0 fs-3 inline-block"></FaUserCheck>
												)}
											</div>

											<button
												className=" btn rounded-full btn-outline-warning  btn-sm text-white mx-2 px-2"
												onClick={handleSignouthandle}>
												SignOut
											</button>
										</div>
									</span>
								</>
							)}
						</div>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost normal-case text-xl py-2 ">
					daisyUI
				</a>
				<NavLink to="/">
					<a>Homepage</a>
				</NavLink>
				<NavLink to={"/blog"}>
					<a>Blog</a>
				</NavLink>
				<NavLink to="/services">
					<a>Services</a>
				</NavLink>
				<ul tabIndex={0} className=" normal-case text-xl py-2  ">
					<div id="responsive-navbar-nav tooltipcustomhover">
						<div>
							{!user?.uid ? (
								<>
									<NavLink
										className="px-2 text-decoration-none text-white"
										to="/signup">
										Register
									</NavLink>
									<NavLink
										className="px-2 text-decoration-none text-white"
										to="/login">
										Login
									</NavLink>
								</>
							) : (
								<>
									<Nav.Link eventKey={2}></Nav.Link>

									<span className="tooltipcustomhover px-2">
										<div className="tooltipcustomhover avatar align-items-center position-relative">
											<NavLink to="/myreview">
												<a>My review</a>
											</NavLink>
											<NavLink to="/addservice">
												<a>Add service</a>
											</NavLink>
											<small className="text-white tooltipcustom position-absolute -bottom-3 -left-5">
												{user?.displayName ||
													user?.email}
											</small>
											<div
												className="tooltipcustomhover  w-12 mask mask-hexagon"
												data-tip="hello">
												{user.photoURL ? (
													<img
														className="tooltipcustomhover"
														src={user?.photoURL}
														alt=""
													/>
												) : (
													<FaUserCheck className="p-0 m-0 fs-3 inline-block"></FaUserCheck>
												)}
											</div>

											<button
												className=" btn rounded-full btn-outline-warning  btn-sm text-white mx-2 px-2"
												onClick={handleSignouthandle}>
												SignOut
											</button>
										</div>
									</span>
								</>
							)}
						</div>
					</div>
				</ul>
			</div>
			<div className="navbar-end">
				<button className="btn btn-ghost btn-circle">
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
						<span className="badge badge-xs badge-primary indicator-item"></span>
					</div>
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default NavbarPage;

import React from "react";
import { useEffect } from "react";
// import { themeChange } from "theme-change";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { FaBeer, BiUserCircle, FaGithub, FaUserCheck } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import { Image } from "react-bootstrap";
import { useState } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";

const NavbarPage = () => {
	const { user, Signouthandle, darkmodeHandler } = useContext(AuthContext);
	const [toggler, setToggler] = useState(true);

	const a = () => {
		console.log(user);
	};
	a();
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
		<div>
			<Navbar bg="primary" expand="lg">
				<Container fluid>
					<Navbar.Brand
						className=" shadow-md rounded-3xl mx-2 px-2"
						href="/">
						RepairService
					</Navbar.Brand>
					<PhotoProvider>
						<PhotoView
							src={"https://i.ibb.co/h8ycstj/desktop-icon2.jpg"}>
							<img
								className="w-10 mask mask-hexagon-2 object-cover"
								src={
									"https://i.ibb.co/h8ycstj/desktop-icon2.jpg"
								}
								alt=""
							/>
						</PhotoView>
					</PhotoProvider>

					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<NavLink
								className="px-2 text-decoration-none text-white  shadow-md rounded  mx-2 px-2"
								to="/">
								Home
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white  shadow-md rounded mx-2 px-2"
								to={"/blog"}>
								Blog
							</NavLink>
							<NavLink
								className="px-2 text-decoration-none text-white  shadow-md rounded  mx-2 px-2"
								to="/services">
								Services
							</NavLink>
						</Nav>
						{/* <Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form> */}
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<NavLink
								to="/myreview"
								className="text-white text-decoration-none text-white  shadow-md rounded px-2">
								<>Myreview</>
							</NavLink>
							<>
								<>
									<>
										{!user?.uid ? (
											<>
												<NavLink
													className="px-2 text-decoration-none text-white  shadow-md rounded mx-2 px-2"
													to="/login">
													Login
												</NavLink>
												<NavLink
													className="px-2 text-decoration-none text-white  shadow-md rounded  mx-2 px-2"
													to="/register">
													Register
												</NavLink>
											</>
										) : (
											<>
												<>
													<Link className="mx-2 text-warning  shadow-md rounded px-2">
														<small className="text-white  text-warning text-xs border border-slate-400 p-1 rounded-2xl no-underline left-5">
															{user?.displayName ||
																user?.email}
														</small>
													</Link>
													<div
														className="tooltipcustomhover  w-12 mask mask-hexagon"
														data-tip="hello">
														{user.photoURL ? (
															// <img
															// 	className="tooltipcustomhover"
															// 	src={
															// 		user?.photoURL
															// 	}
															// 	alt=""
															// 	/>
															<PhotoProvider>
																<PhotoView
																	src={
																		user?.photoURL
																	}>
																	<img
																		className="tooltipcustomhover"
																		src={
																			user?.photoURL
																		}
																		alt=""
																	/>
																</PhotoView>
															</PhotoProvider>
														) : (
															<FaUserCheck className="p-0 m-0 fs-3 inline-block"></FaUserCheck>
														)}
													</div>
													<NavLink
														className="px-2 text-decoration-none text-white "
														to="/services">
														<>Add service</>
													</NavLink>
													<button
														className="btn d-inline-block btn-outline btn-warning  btn-sm text-white mx-2 px-2"
														onClick={
															handleSignouthandle
														}>
														SignOut
													</button>
													<NavLink
														className="btn d-inline-block btn-outline  shadow-md px-2 text-decoration-none text-white btn-sm"
														to="/register">
														Profile Update
													</NavLink>
												</>
											</>
										)}
									</>
								</>
							</>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarPage;

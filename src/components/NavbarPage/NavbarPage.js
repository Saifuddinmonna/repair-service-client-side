import React from "react";
import { NavLink } from "react-router-dom";

const NavbarPage = () => {
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
						<NavLink to="/login">
							<a>Login</a>
						</NavLink>
						<NavLink to="/register">
							<a>Register</a>
						</NavLink>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost normal-case text-xl py-2 ">
					daisyUI
				</a>
				<ul tabIndex={0} className=" normal-case text-xl py-2  ">
					<NavLink
						className="btn btn-ghost my-3 py-2 shadow  rounded-box"
						to="/">
						<a>Homepage</a>
					</NavLink>
					<NavLink
						className="btn btn-ghost my-3 py-2 shadow  rounded-box"
						to={"/blog"}>
						<a>Blog</a>
					</NavLink>
					<NavLink
						className="btn btn-ghost my-3 py-2 shadow  rounded-box"
						to="/services">
						<a>Services</a>
					</NavLink>
					<NavLink
						className="btn btn-ghost my-3 py-2 shadow  rounded-box"
						to="/login">
						<a>Login</a>
					</NavLink>
					<NavLink
						className="btn btn-ghost my-3 py-2 shadow  rounded-box"
						to="/register">
						<a>Register</a>
					</NavLink>
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
		</div>
	);
};

export default NavbarPage;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarPage from "../NavbarPage/NavbarPage";

const Main = () => {
	return (
		<div>
			<NavbarPage></NavbarPage>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;

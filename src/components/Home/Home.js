import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, Outlet } from "react-router-dom";
import ServiceCartForHome from "../Services/ServiceCartForHome";
import "react-photo-view/dist/react-photo-view.css";
import { Helmet } from "react-helmet";
const Home = () => {
	const [services, setServices] = useState([3]);
	// console.log(services);

	useEffect(() => {
		fetch("https://assignment-11-server-site-smoky.vercel.app/home")
			.then((res) => res.json())
			.then((data) => setServices(data))
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Home Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			{/* <PhotoProvider>
				<PhotoView src="https://i.ibb.co/BfkY8K5/desktop-icon2.jpg">
					<img src="/https://i.ibb.co/k6HR6G9/imac.png" alt="" />
				</PhotoView>
			</PhotoProvider> */}
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border rounded shadow-md">
				{services?.map((service) => (
					<ServiceCartForHome key={service?._id} service={service}>
						{" "}
					</ServiceCartForHome>
				))}
			</div>
			<div>
				<Link to="/services">
					<button className="btn btn-primary d-block w-full">
						See All
					</button>
				</Link>
			</div>
			<div
				className="min-w-full min-h-screen bg-gradient-to-r text-center from-slate-100 to-slate-300"
				>
				<div className="   mx-3 p-3 border- rounded-lg"></div>
				<div className="  content-center">
					<div className=" mx-3 p-3 pt-7 border- rounded-lg">
						<h1 className="mb-5 text-5xl font-bold text-gray-900 animate-bounce">ABOUT ME</h1>
						<p className="mb-5  text-gray-900 ">
							I am here to get electronics up and running, and
							keep it that way. When our skilled techs are
							finished working on your device, it’ll work. Period.
							We’re pros when it comes to fixing laptops and
							phones but we can also recover your data. We also
							repair all types of iDevices. Your iPhone, iPad or
							iPod are the “Apple” of our eye. Do you have another
							piece of electronic equipment that is broken and
							needs special attention? Yeah, we fix that.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<Outlet></Outlet>
		</div>
	);
};

export default Home;

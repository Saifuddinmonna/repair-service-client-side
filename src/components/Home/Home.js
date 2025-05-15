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
		<div className="min-h-screen">
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
			<div className="hero min-h-[60vh] bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-3xl">
						<h1 className="text-5xl font-bold mb-8">Welcome to Tech Repair Services</h1>
						<p className="text-xl mb-8">
							Professional repair services for all your electronic devices. Fast, reliable, and affordable solutions.
						</p>
						<Link to="/services">
							<button className="btn btn-primary btn-lg">Our Services</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-4 py-16">
				<h2 className="text-4xl font-bold text-center mb-12">Our Featured Services</h2>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services?.map((service) => (
						<ServiceCartForHome key={service?._id} service={service} />
					))}
				</div>
				<div className="text-center mt-8">
					<Link to="/services">
						<button className="btn btn-primary btn-lg">
							View All Services
						</button>
					</Link>
				</div>
			</div>
			<div className="bg-gradient-to-r from-slate-100 to-slate-300 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
						<h2 className="text-4xl font-bold text-center mb-8 text-gray-900">About Me</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-8">
							I am here to get electronics up and running, and keep it that way. When our skilled techs are
							finished working on your device, it'll work. Period. We're pros when it comes to fixing laptops and
							phones but we can also recover your data. We also repair all types of iDevices. Your iPhone, iPad or
							iPod are the "Apple" of our eye. Do you have another piece of electronic equipment that is broken and
							needs special attention? Yeah, we fix that.
						</p>
						<div className="text-center">
							<button className="btn btn-primary btn-lg">Get Started</button>
						</div>
					</div>
				</div>
			</div>
			<div className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
							<div className="text-4xl mb-4">⚡</div>
							<h3 className="text-xl font-bold mb-4">Fast Service</h3>
							<p className="text-gray-600">Quick turnaround time for all repairs</p>
						</div>
						<div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
							<div className="text-4xl mb-4">💯</div>
							<h3 className="text-xl font-bold mb-4">Quality Work</h3>
							<p className="text-gray-600">Expert technicians with years of experience</p>
						</div>
						<div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
							<div className="text-4xl mb-4">💰</div>
							<h3 className="text-xl font-bold mb-4">Affordable Prices</h3>
							<p className="text-gray-600">Competitive pricing for all services</p>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Home;

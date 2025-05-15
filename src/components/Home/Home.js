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
			<div className="hero min-h-[70vh] relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
				</div>
				
				<div className="hero-content text-center relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-6xl font-extrabold mb-8 text-white drop-shadow-lg tracking-tight">
							Welcome to Tech Repair Services
						</h1>
						<p className="text-2xl mb-8 text-white font-medium leading-relaxed">
							Professional repair services for all your electronic devices. Fast, reliable, and affordable solutions.
						</p>
						<div className="flex gap-4 justify-center">
							<Link to="/services">
								<button className="btn btn-lg bg-white text-blue-700 hover:bg-blue-50 border-none font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
									Our Services
								</button>
							</Link>
							<Link to="/contact">
								<button className="btn btn-lg text-white border-2 border-white hover:bg-white/20 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
			</div>
			<div className="max-w-7xl mx-auto px-4 py-16">
				<h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">Our Featured Services</h2>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services?.map((service) => (
						<ServiceCartForHome key={service?._id} service={service} />
					))}
				</div>
				<div className="text-center mt-8">
					<Link to="/services">
						<button className="btn btn-primary btn-lg font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
							View All Services
						</button>
					</Link>
				</div>
			</div>
			<div className="bg-gradient-to-r from-slate-100 to-slate-300 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
						<h2 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">About Me</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
							I am here to get electronics up and running, and keep it that way. When our skilled techs are
							finished working on your device, it'll work. Period. We're pros when it comes to fixing laptops and
							phones but we can also recover your data. We also repair all types of iDevices. Your iPhone, iPad or
							iPod are the "Apple" of our eye. Do you have another piece of electronic equipment that is broken and
							needs special attention? Yeah, we fix that.
						</p>
						<div className="text-center">
							<button className="btn btn-primary btn-lg font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">Why Choose Us</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 bg-gray-50">
							<div className="text-5xl mb-4">⚡</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-800">Fast Service</h3>
							<p className="text-gray-600 font-medium">Quick turnaround time for all repairs</p>
						</div>
						<div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 bg-gray-50">
							<div className="text-5xl mb-4">💯</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Work</h3>
							<p className="text-gray-600 font-medium">Expert technicians with years of experience</p>
						</div>
						<div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 bg-gray-50">
							<div className="text-5xl mb-4">💰</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-800">Affordable Prices</h3>
							<p className="text-gray-600 font-medium">Competitive pricing for all services</p>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Home;

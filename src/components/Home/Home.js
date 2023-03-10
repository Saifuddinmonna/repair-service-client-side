import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ServiceCartForHome from "../Services/ServiceCartForHome";

const Home = () => {
	const [services, setServices] = useState([3]);
	console.log(services);

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
			
			<div className="grid grid-cols-3 gap-2 border rounded shadow-md">
				{services.map((service) => (
					<ServiceCartForHome key={service._id} service={service}>
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
				className="hero min-h-screen"
				style={{
					backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
				}}>
				<div className="hero-overlay bg-opacity-60  mx-3 p-3 border- rounded-lg"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md mx-3 p-3 border- rounded-lg">
						<h1 className="mb-5 text-5xl font-bold">ABOUT ME</h1>
						<p className="mb-5">
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

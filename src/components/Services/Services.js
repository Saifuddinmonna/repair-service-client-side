import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ServicesLoader from "./ServicesLoader";

const Services = () => {
	const [services, setServices] = useState([3]);
	// console.log(services);

	useEffect(() => {
		fetch("https://assignment-11-server-site-smoky.vercel.app/services")
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
				<title>Services Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<h2>this is services Services Page Section</h2>
			{services.map((service) => (
				<ServicesLoader
					key={service._id}
					service={service}></ServicesLoader>
			))}
		</div>
	);
};

export default Services;

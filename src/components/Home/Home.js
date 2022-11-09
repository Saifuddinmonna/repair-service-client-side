import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ServiceCartForHome from "../Services/ServiceCartForHome";

const Home = () => {
	const [services, setServices] = useState([3]);
	console.log(services);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data))
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<h2>this home page</h2>
			<div className="grid grid-cols-3 gap-2 border rounded shadow-md">
				{services.map((service) => (
					<ServiceCartForHome key={service._id} service={service}>
						{" "}
					</ServiceCartForHome>
				))}
			</div>

			<Outlet></Outlet>
		</div>
	);
};

export default Home;

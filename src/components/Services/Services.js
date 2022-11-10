import React, { useEffect, useState } from 'react';
import ServicesLoader from './ServicesLoader';

const Services = () => {
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
				<h2>this is services page</h2>
				{services.map((service) => (
					<ServicesLoader
						key={service._id}
						service={service}></ServicesLoader>
				))}
			</div>
		);
};

export default Services;
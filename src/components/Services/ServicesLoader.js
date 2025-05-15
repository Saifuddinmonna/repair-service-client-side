import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Helmet } from "react-helmet";

const ServicesLoader = ({ service }) => {
	const { img1, img2, details, name, price, rating, _id } = service;
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Services Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<PhotoProvider>
				<div className="foo">
					<div className="card w-auto bg-base-100 shadow-xl border rounded shadow object-scale-down object-">
						<figure>
							<PhotoProvider>
								<PhotoView src={img2 && img1}>
									<img
										src={img1}
										alt={`"imag of service" ${name}`}
									/>
								</PhotoView>
							</PhotoProvider>
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{name}
								<div className="badge badge-secondary">
									Offer Price
								</div>
							</h2>
							<p className="overflow-hidden text-justify">
								{details}
							</p>
							<div className="card-actions justify-end">
								<div className="badge badge-outline">
									Service Price : {price}
								</div>
								<div className="badge badge-outline">
									{" "}
									Service Rating :{rating}
								</div>
							</div>
							<div className="flex justify-evenly">
								<Link to={`/addservice/${_id}`}>
									<button
										// onClick={() =>
										// 	handleAddservice({ singleserviceData })
										// }
										className="btn btn-warning w-full px-4">
										Add service
									</button>
								</Link>
								<Link to={`/services/${_id}`}>
									<button className="btn btn-warning w-full px-5 ">
										Details
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</PhotoProvider>
		</div>
	);
};

export default ServicesLoader;

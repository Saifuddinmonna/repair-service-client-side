import React from "react";

const ServiceCartForHome = ({ service }) => {
	const { img1, img2, details, name, price } = service;
	console.log(service);
	return (
		<div>
			<div className="card w-auto bg-base-100 shadow-xl border rounded shadow object-scale-down object-">
				<figure>
					<img src={img1} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{name}
						<div className="badge badge-secondary">Offer Price</div>
					</h2>
					<p>`{details}.splice(1, 20)`</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">{price}</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCartForHome;

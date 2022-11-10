import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCartForHome = ({ service }) => {
	const { img1, img2, details, name, price, rating } = service;
	console.log(service);
	return (
		<div>
			<div className="card w-auto bg-base-100 shadow-xl border rounded shadow object-scale-down object-">
				<figure>
					<PhotoProvider>
						<img src={img1} alt="Shoes" />
					</PhotoProvider>
					{/* <PhotoView src={img2}>
						<img src={img2} style={{ objectFit: "cover" }} alt="" />
					</PhotoView> */}
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{name}
						<div className="badge badge-secondary">Offer Price</div>
					</h2>
					<p>`{details}.splice(1, 20)`</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">
							Service Price : {price}
						</div>
						<div className="badge badge-outline">
							{" "}
							Service Rating :{rating}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCartForHome;

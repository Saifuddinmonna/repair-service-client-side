import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import "./serviceCartForHome.css";

const ServiceCartForHome = ({ service }) => {
	const { img1, img2, details, name, price, rating } = service;
	console.log(service);
	return (
		<div>
			<div className="m-2 p-2 shadow-md img-controler card  bg-base-100 shadow-xl border rounded shadow object-conttrol">
				<figure>
					<PhotoProvider>
						<PhotoView src={img1}>
							<img
								className="md:h-52 lg:h-52"
								src={service?.img1}
								alt=""
							/>
						</PhotoView>
					</PhotoProvider>
					{/* <PhotoView src={img2}>
						<img src={img2} style={{ objectFit: "cover" }} alt="" />
					</PhotoView> */}
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{service?.name}
						<div className="badge badge-secondary p-1">
							Offer Price
						</div>
					</h2>
					<p className="text-justify h-28 overflow-auto">
						{`${details}`.slice(0, 7)}...
					</p>
					<div className="card-actions justify-center ">
						<div className="btn  btn-warning">
							Service Price : {service?.price}
						</div>
						<div className="btn  border-t-cyan-400 ">
							{" "}
							Service Rating :{service?.rating}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCartForHome;

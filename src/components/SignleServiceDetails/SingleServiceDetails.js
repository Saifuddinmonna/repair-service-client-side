import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleServiceDetails = () => {
	const singleService = useLoaderData({});
	const {
	        img1, img2, details, name, price, rating, _id
	} = singleService.data;
	console.log(singleService.data);
	return (
		<div className="grid grid-cols-2 ">
			<div>
				<div className="card card-compact w-full bg-base-100 shadow-xl">
					<h1 className="card-title text-center">{name}</h1>
					<figure>
						<img src={img1} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{name}</h2>
						<figure>
							<img src={img2} alt="Shoes" />
						</figure>
						<p>{details}</p>
						<div className="card-actions justify-center">
							<div>
								<p>Price : {price}</p>
								<p> Rating : {rating}</p>
							</div>
							<Link to="/addservice">
								<button className="btn btn-primary">
									Add service
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2>this is reviewer section</h2>
				<div>
					<h1>Others review</h1>
				</div>
				<div>Giving review us</div>
			</div>
		</div>
	);
};

export default SingleServiceDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesLoader = ({service}) => {
   const    { img1, img2, details, name, price, rating,_id } = service;
        return (
			<div>
				<PhotoProvider>
					<div className="foo">
						<div className="card w-auto bg-base-100 shadow-xl border rounded shadow object-scale-down object-">
							<figure>
								<img src={img1} alt="Shoes" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">
									{name}
									<div className="badge badge-secondary">
										Offer Price
									</div>
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
								<div>
									<Link to={`/services/${_id}`}>
										<button className="btn btn-primary d-block w-full">
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
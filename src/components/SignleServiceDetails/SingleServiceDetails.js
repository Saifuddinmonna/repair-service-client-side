import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleServiceDetails = () => {
	const singleService = useLoaderData();
	// const {
	//         img1, img2, details, name, price, rating, _id
	// } = singleService;
	console.log(singleService);
	return (
		<div>
			<h2>this is signle service</h2>
			<div>
				<div
					className="hero min-h-screen"
					style={{
						backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
					}}>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl font-bold">
								Hello there
							</h1>
							<p className="mb-5">
								Provident cupiditate voluptatem et in. Quaerat
								fugiat ut assumenda excepturi exercitationem
								quasi. In deleniti eaque aut repudiandae et a id
								nisi.
							</p>
							<button className="btn btn-primary">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default SingleServiceDetails;

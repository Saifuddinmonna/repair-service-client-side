import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import ReviewMap from "./ReviewMap";

const MyReview = () => {
	const { user, logOut, Signouthandle, createUser } = useContext(AuthContext);
	const [services, setServices] = useState([]);
	// console.log("from review page", services);
	// console.log("from my review", user);
	const servicesort = services.reverse();
	const sort = useEffect(() => {
		fetch(
			`https://assignment-11-server-site-smoky.vercel.app/myreview?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"repair-token",
					)}`,
				},
			},
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					// return logOut();
					// return Signouthandle();
				}
				return res.json();
			})
			.then((data) => {
				console.log("conme from data", data);
				const sortedDesc = data.reverse();
				console.log("sort time", sortedDesc);
				setServices(sortedDesc);
			});
	}, [user?.email, logOut, createUser]);

	const userer = () => {
		// console.log("orders", services);
	};
	userer();

	const handleDelete = (id) => {
		const proceed = window.confirm(
			"Are you sure, you want to cancel this order",
		);
		if (proceed) {
			fetch(
				`https://assignment-11-server-site-smoky.vercel.app/myreview/${id}`,
				{
					method: "DELETE",
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							"repair-token",
						)}`,
					},
				},
			)
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remaining = services.filter(
							(odr) => odr._id !== id,
						);
						setServices(remaining);
					}
				});
		}
	};

	const handleStatusUpdate = (id) => {
		fetch(
			`https://assignment-11-server-site-smoky.vercel.app/myreview/${id}`,
			{
				method: "PATCH",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem(
						"repair-token",
					)}`,
				},
				body: JSON.stringify({ status: "Approved" }),
			},
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = services.filter((odr) => odr._id !== id);
					const approving = services.find((odr) => odr._id === id);
					approving.status = "Approved";

					const newOrders = [approving, ...remaining];
					setServices(newOrders);
				}
			});
	};
	console.log("consoele for time", new Date());

	return (
		<div className="p-3 rounded shadow-md border">
			<Helmet>
				<meta charSet="utf-8" />
				<title>My Review Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<h2 className="text-4xl border rounded-full m-2 p-4 shadow-lg d-inline-block text">
				You have Added {services.length} Services
			</h2>
			{`${services.length}` ? (
				<p>
					<Link
						className="btn btn-warning opacity-40 rounded-3xl d-inline-block border-b-orange-200 shadow-sm"
						to="/services">
						{`${services?.length} === 0` ? (
							<p>Please add a service</p>
						) : (
							<p>you</p>
						)}
					</Link>
				</p>
			) : (
				<>
					{" "}
					<p>Add more services</p>
				</>
			)}
			<div className="overflow-x-auto w-full">
				<table className="table  table-zebra w-full">
					<thead>
						<tr>
							<th>
								<Link to="/review/editreview">
									{" "}
									<button className="btn  btn-warning opacity-60">
										Edit Review
									</button>{" "}
								</Link>
							</th>
							<th>Image</th>
							<th>Name</th>
							<th>Problems</th>
							<th>Price</th>
							<th>service Status</th>
						</tr>
					</thead>
					<tbody>
						{services?.map((order) => (
							<ReviewMap
								key={order._id}
								order={order}
								handleDelete={handleDelete}
								handleStatusUpdate={
									handleStatusUpdate
								}></ReviewMap>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyReview;

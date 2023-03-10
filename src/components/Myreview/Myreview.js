import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";
import ReviewMap from "./ReviewMap";


const MyReview= () => {
	const { user, logOut } = useContext(AuthContext);
        const [orders, setOrders] = useState([]);
        console.log(orders);

	useEffect(() => {
		fetch(
			`https://assignment-11-server-site-smoky.vercel.app/myreview?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"genius-token",
					)}`,
				},
			},
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					return logOut();
				}
				return res.json();
			})
			.then((data) => {
				setOrders(data);
			});
	}, [user?.email, logOut]);

	const handleDelete = (id) => {
		const proceed = window.confirm(
			"Are you sure, you want to cancel this order",
		);
		if (proceed) {
			fetch(`https://assignment-11-server-site-smoky.vercel.app/myreview/${id}`, {
				method: "DELETE",
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"genius-token",
					)}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remaining = orders.filter(
							(odr) => odr._id !== id,
						);
						setOrders(remaining);
					}
				});
		}
	};

	const handleStatusUpdate = (id) => {
		fetch(`https://assignment-11-server-site-smoky.vercel.app/myreview/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("genius-token")}`,
			},
			body: JSON.stringify({ status: "Approved" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = orders.filter((odr) => odr._id !== id);
					const approving = orders.find((odr) => odr._id === id);
					approving.status = "Approved";

					const newOrders = [approving, ...remaining];
					setOrders(newOrders);
				}
			});
	};

	return (
		<div>
			<h2 className="text-5xl">You have {orders.length} Orders</h2>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Price</th>
							<th>Problems</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
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

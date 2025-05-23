import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
	HiArchiveBoxXMark,
	HiOutlineArchiveBoxXMark,
	HiPencilSquare,
} from "react-icons/hi2";

const ReviewMap = ({ order, handleDelete, handleStatusUpdate }) => {
	const {
		_id,
		name,
		img1,
		phone,
		customer,
		price,
		service,
		status,
		message,
	} = order;
	const [orderService, setOrderService] = useState({});

	useEffect(() => {
		fetch(
			`https://assignment-11-server-site-smoky.vercel.app/services/${service}`,
		)
			.then((res) => res.json())
			.then((data) => setOrderService(data));
	}, [service]);
	// console.log(order);

	return (
		<tr>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Edit Review Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<td>
				<label>
					<Link to="/review/editreview">
						{" "}
						<button
							onClick={() => handleStatusUpdate(_id)}
							className="btn btn-sm btn-warning opacity-40">
							<HiPencilSquare />
						</button>{" "}
					</Link>
					<button
						onClick={() => handleDelete(_id)}
						className="btn btn-sm btn-warning opacity-40">
						<HiOutlineArchiveBoxXMark />
					</button>{" "}
				</label>
			</td>
			<td>
				<img className="w-24 h-24" src={order?.img1} alt="" />
			</td>

			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="rounded w-24 h-24">
							{orderService?.img && (
								<img
									src={orderService.img}
									alt="Avatar Tailwind CSS Component"
								/>
							)}
						</div>
					</div>
					<div>
						<div className="font-bold">{customer}</div>
						<div className="text-sm opacity-50">{phone}</div>
					</div>
				</div>
			</td>

			<td>
				<p>{message}</p>
			</td>
			<td>{price}</td>
			<th>
				<button
					onClick={() => handleStatusUpdate(_id)}
					className="btn btn-ghost btn-xs">
					{status ? status : "pending"}
				</button>
			</th>
		</tr>
	);
};

export default ReviewMap;

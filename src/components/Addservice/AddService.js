import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddService = () => {
	const data = useLoaderData();
	console.log(data);
	const { name, price, img1 } = data?.data;
	const _id = data?.data;
	const { user } = useContext(AuthContext);

	const handlePlaceOrder = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || "unregistered";
		const phone = form.phone.value;
		const message = form.message.value;
		const time = new Date();
		console.log("this is time test", time);

		const order = {
			service: _id,
			serviceName: name,
			price,
			customer: name,
			email,
			phone,
			message,
			img1,
			time,
		};

		fetch(
			"https://assignment-11-server-site-smoky.vercel.app/services/addservice",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem(
						"repair-token",
					)}`,
				},
				body: JSON.stringify(order),
			},
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				toast.success(data.message, {
					position: "top-center",
					autoClose: 400,
				});
				form.reset();
				if (data.acknowledged) {
					alert("Order placed successfully");
				}
			})
			.catch((er) => {
				console.log(er);
				toast.error(er, "You have to login first ", {
					position: "top-center",
					autoClose: 400,
				});
			});
	};
	<script async src="https://imgbb.com/upload.js"></script>;
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Add Services Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<form onSubmit={handlePlaceOrder}>
				<div className="flex justify-center">
					<div className="border p-2 m-2 shadow-sm rounded-mded">
						<img
							className=" w-40"
							src={data?.data?.img1}
							alt="add service img"
						/>
					</div>
					<div>
						<h2 className="text-4xl">
							You are about to add : {data?.data?.name}
						</h2>
						<h4 className="text-3xl">Price: {data?.data?.price}</h4>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<script async src="https://imgbb.com/upload.js"></script>
					<input
						name="firstName"
						type="text"
						placeholder="First Name"
						className="input input-ghost w-full  input-bordered"
					/>
					<input
						name="lastName"
						type="text"
						placeholder="Servicename Name"
						className="input input-ghost w-full  input-bordered"
					/>
					<input
						name="phone"
						type="text"
						placeholder="Your Phone"
						className="input input-ghost w-full  input-bordered"
						required
					/>
					<input
						name="email"
						type="text"
						placeholder="Your email"
						defaultValue={user?.email}
						className="input input-ghost w-full  input-bordered"
						readOnly
					/>
				</div>
				<textarea
					name="message"
					className="textarea textarea-bordered h-24 w-full"
					placeholder="Your Message"
					required></textarea>

				<input
					className="btn btn-warning border rounded m-2 p-2 px-4 w-full shadow-md"
					type="submit"
					value="Place Your services name"
				/>
			</form>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default AddService;

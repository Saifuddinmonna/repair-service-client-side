import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserCheck } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../ContextProvider/ContextProvider";
import ServicesLoader from "../Services/ServicesLoader";
import UsersComments from "../UsersComments/UsersComments";

const SingleServiceDetails = () => {
	const {
		user,
		logOut,

		handleAddservice,

		createUser,
		signinWithGoogle,

		Signouthandle,
		functionsignInWithEmailAndPassword,
	} = useContext(AuthContext);
	const [services, setOrders] = useState([]);
	const [ratingreload, setRatingreload] = useState(false);

	const singleService = useLoaderData({});
	const [userComments, setUserComments] = useState([]);

	const { img1, img2, details, name, price, rating, _id } =
		singleService.data;
	// const id = _id;
	console.log("from review page", services);
	console.log("from my review", user);

	// console.log("from single page", singleService);
	// console.log("data from single page", singleService.data);
	const singleserviceData = singleService.data;

	// const handleSendDATA = ({singleserviceData}) => {
	// 		handleAddservice
	// 	}

	useEffect(() => {
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
					return Signouthandle();
				}
				return res.json();
			})
			.then((data) => {
				setOrders(data);
			});
	}, [
		user?.email,
		logOut,
		user,
		createUser,
		signinWithGoogle,

		Signouthandle,
		functionsignInWithEmailAndPassword,
	]);

	const userer = () => {
		console.log("orders", services);
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
						setOrders(remaining);
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
					setOrders(newOrders);
				}
			});
	};

	const handleRatingus = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || "unregistered";
		const phone = form.phone.value;
		const message = form.message.value;

		const order = {
			service: _id,
			serviceName: name,
			customer: name,
			email,
			phone,
			message,
			img1,
		};

		fetch(
			`https://assignment-11-server-site-smoky.vercel.app/userscomments`,
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
				setRatingreload(true);
				toast("comment submit successfully !", {
					position: "top-center",
					autoClose: 300,
				});
				if (data.acknowledged) {
					alert("Order placed successfully");
					form.reset();
				}
			})
			.catch((er) => console.error(er));
		form.reset();
		setRatingreload(true);
	};

	// console.log(services);

	useEffect(() => {
		fetch(
			`https://assignment-11-server-site-smoky.vercel.app/userscomments/${_id}`,
		)
			.then((res) => res.json())
			.then((data) => {
				const sortedDesc = data.reverse();
				setUserComments(sortedDesc);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [ratingreload, toast]);
	console.log(userComments);
	return (
		<div className="grid sm:grid-cols-1  md:grid-cols-5 lg:grid-cols-5 lg:grid-cols-5 grid-cols-1 ">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Services Details Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<div className="col-span-3">
				<div className="card card-compact w-full bg-base-100 shadow-xl">
					<h1 className="card-title text-center">{name}</h1>
					<figure>
						<PhotoProvider>
							<PhotoView src={img1}>
								<img className="" src={img1} alt="" />
							</PhotoView>
						</PhotoProvider>
					</figure>
					<div className="card-body">
						<figure>
							<PhotoProvider>
								<PhotoView src={img2}>
									<img className="" src={img2} alt="" />
								</PhotoView>
							</PhotoProvider>
						</figure>
						<p>{details}</p>
						<div className="card-actions justify-center">
							<div>
								<p>Price : {price}</p>
								<p> Rating : {rating}</p>
							</div>
							<Link to={`/addservice/${_id}`}>
								<button
									// onClick={() =>
									// 	handleAddservice({ singleserviceData })
									// }
									className="btn btn-primary">
									Add service
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-2">
				<div className="p-2 shadow-sm border">
					<h4>Please, Give a rating to my services</h4>
					<form onSubmit={handleRatingus}>
						<div className="flex justify-center">
							<div className="border p-2 m-2 shadow-sm rounded-mded">
								<>
									{user?.photoURL ? (
										<img
											className="tooltipcustomhover"
											src={user?.photoURL}
											alt=""
										/>
									) : (
										<FaUserCheck className="p-0 m-0 fs-3 inline-block"></FaUserCheck>
									)}
								</>
							</div>
							<div>
								<h5 className="text-lg">
									You are rating about : {name}
								</h5>
								<h4 className="text-3xl">
									average Rating - {rating}
								</h4>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							<input
								name="firstName"
								type="text"
								placeholder=" Name"
								className="input input-ghost w-full  input-bordered"
							/>
							<input
								name="lastName"
								type="number"
								placeholder="Rating Point"
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
								required
							/>
						</div>
						<textarea
							name="message"
							className="textarea textarea-bordered h-24 w-full"
							placeholder="Your Message"
							required></textarea>

						<button
							disabled={!user?.email}
							type="submit"
							className="btn btn-warning d-block w-full">
							Rating us
						</button>
					</form>
				</div>
				<div>
					<h4 className="m-2 p-3 border rounded-full shadow-lg bg-red-200">
						Others feedback after receiving my service
					</h4>
					<div>
						{userComments?.map((userComment) => (
							<UsersComments
								key={userComment._id}
								userComment={userComment}></UsersComments>
						))}
					</div>
				</div>
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default SingleServiceDetails;

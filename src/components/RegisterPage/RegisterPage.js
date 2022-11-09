import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Register now!</h1>
						<p className="py-6">
						Register now to see the rating and buy a service
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									name="name"
									type="text"
									placeholder="name"
									className="input input-bordered"
								/>
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									name="email"
									type="text"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									name="password"
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<label className="label">
										Have an accout ?
										<Link
											to="/login"
											className="label-text-alt link link-hover">
											Login
										</Link>
									</label>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;

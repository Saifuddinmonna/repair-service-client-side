import React from 'react';
import { Helmet } from 'react-helmet';

const UsersComments = ({ userComment }) => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Services Details Page</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

			<div className="overflow-x-auto border rounded-lg bg-zinc-100 m-2 p-1 shadow-sm ">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Comments</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>$</th>
							<td>
								<p>{userComment?.customer}</p>
							</td>
							<td>
								<p>{userComment?.email}</p>
							</td>
							<td>
								<p>{userComment.message}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UsersComments;
import React, { useState } from "react";
import "./ApiBasic3.css";

const ApiBasic2 = () => {
	const [users, setUsers] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const pages = [1, 2, 3, 4, 5];

	const getUserInformation = (pageNumber) => {
		const url = `http://fakeapi.jsonparseronline.com/users?_page=${pageNumber}`;

		setLoading(true);

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setDataIsLoaded(true);
				setCurrentPage(pageNumber);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h3>API Basic 3</h3>

			<button onClick={() => getUserInformation(1)}>Fetch Data</button>

			{dataIsLoaded && (
				<div className="display-details">
					{loading ? (
						<h4>Loading....</h4>
					) : (
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>E-mail</th>
									<th>Age</th>
									<th>Gender</th>
									<th>Address</th>
									<th>Phone</th>
									<th>Website</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => (
									<tr key={user.id}>
										<td>{user.firstName + " " + user.lastName}</td>
										<td>{user.email}</td>
										<td>{user.age}</td>
										<td>{user.gender}</td>
										<td>
											{user.address.house +
												" " +
												user.address.street +
												" " +
												user.address.city +
												" " +
												user.address.zipcode +
												" " +
												user.address.country}
										</td>
										<td>{user.phone}</td>
										<td>{user.website}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			)}

			{dataIsLoaded && (
				<div className="page-buttons">
					<button
						disabled={currentPage === 1}
						onClick={() => getUserInformation(currentPage - 1)}
					>
						prev
					</button>
					{pages.map((page) => (
						<button key={page} onClick={() => getUserInformation(page)}>
							{page}
						</button>
					))}
					<button
						disabled={currentPage === 5}
						onClick={() => getUserInformation(currentPage + 1)}
					>
						next
					</button>
				</div>
			)}
		</div>
	);
};

export default ApiBasic2;

import React, { useState, useEffect } from "react";
import "./ApiBasic2.css";

const ApiBasic2 = () => {
	const [users, setUsers] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const getUserInformation = (pageNumber) => {
		const url =
			"http://fakeapi.jsonparseronline.com/users" + "?_page=" + pageNumber;

		setLoading(true);

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setDataIsLoaded(true);
				setCurrentPage(pageNumber);
			})
			.catch((err) => {
				console.log(err);
			});
		setLoading(false);
	};

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);
	const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	useEffect(() => {
		getUserInformation(1);
	});

	return (
		<div>
			<h3>API Basic 2</h3>
			<div className="display-details">
				{loading ? (
					<h6>Loading...</h6>
				) : (
					<table>
						<tbody>
							<tr>
								<th>Name</th>
								<th>E-mail</th>
								<th>Age</th>
								<th>Gender</th>
								<th>Address</th>
								<th>Phone</th>
								<th>Website</th>
							</tr>

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
					disabled={currentPage === 10}
					onClick={() => getUserInformation(currentPage + 1)}
				>
					next
				</button>
			</div>
		</div>
	);
};

export default ApiBasic2;

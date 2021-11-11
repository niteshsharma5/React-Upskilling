import React from "react";
import "./style.css";

import useAPIReducer from "./APIReducer";

const APIBasic2 = () => {
	const [myData, dispatch] = useAPIReducer();

	const pages = [1, 2, 3, 4, 5];

	const getUserInformation = (pageNumber) => {
		const url = `http://fakeapi.jsonparseronline.com/users?_page=${pageNumber}`;

		dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: true });

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				dispatch({ type: "SET_USERS", payload: json });
				dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: false });
			});
	};

	return (
		<div className="outer-block">
			<h3>API Basic 2</h3>

			<button
				onClick={() => getUserInformation(1)}
				disabled={myData.fetchingInProgress}
			>
				{myData.fetchingInProgress ? "Loading..." : "Fetch data"}
			</button>

			{myData.users.length > 0 && (
				<div className="display-details">
					<table>
						<thead>
							<tr>
								<th>S.No</th>
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
							{myData.users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.firstName + " " + user.lastName}</td>
									<td>
										<a
											href={`mailto:${user.email}`}
											rel="noreferrer"
											target="_blank"
										>
											{user.email}
										</a>
									</td>
									<td>{user.age}</td>
									<td>{user.gender}</td>
									<td>
										{user.address.house +
											", " +
											user.address.street +
											", " +
											user.address.city +
											", " +
											user.address.zipcode +
											", " +
											user.address.country}
									</td>
									<td>{user.phone}</td>
									<td>
										<a href={user.website} rel="noreferrer" target="_blank">
											{user.website}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			{myData.users.length > 0 && (
				<div className="page-buttons">
					<button
						style={{
							width: "4rem",
						}}
						disabled={myData.currentPage === 1 || myData.fetchingInProgress}
						onClick={() => getUserInformation(myData.currentPage - 1)}
					>
						prev
					</button>
					{pages.map((page) => (
						<button
							key={page}
							style={{
								backgroundColor: myData.currentPage === page ? "blue" : "",
							}}
							disabled={
								myData.fetchingInProgress || myData.currentPage === page
							}
							onClick={() => getUserInformation(page)}
						>
							{page}
						</button>
					))}
					<button
						style={{
							width: "4rem",
						}}
						disabled={myData.currentPage === 5 || myData.fetchingInProgress}
						onClick={() => getUserInformation(myData.currentPage + 1)}
					>
						next
					</button>
				</div>
			)}
		</div>
	);
};

export default APIBasic2;

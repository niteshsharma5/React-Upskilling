import React, { useEffect } from "react";
import "./style.css";

import useAPIReducer from "./APIReducer";

const APIBasic3 = () => {
	const [myData, dispatch] = useAPIReducer();

	useEffect(() => {
		setPage(1);
	}, []);

	useEffect(() => {
		getUserInformation();
	}, [myData.currentPage]);

	const setPage = (pageNumber) => {
		dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
	};

	const getUserInformation = () => {
		const url = `http://fakeapi.jsonparseronline.com/users?_page=${myData.currentPage}`;

		dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: true });
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					if (myData.totalNumberOfPages === -1) {
						const totalNumberOfPages = res.headers.get("X-Total-Count") / 10;
						dispatch({
							type: "SET_TOTAL_NUMBER_OF_PAGES",
							payload: totalNumberOfPages,
						});
					}

					return res.json();
				})
				.then((json) => {
					dispatch({ type: "SET_USERS", payload: json });
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: false });
				});
		}, 2000);
	};

	return (
		<div className="outer-block">
			<h3>API Basic 3</h3>

			{myData.users.length > 0 && (
				<div className="display-details">
					{myData.fetchingInProgress ? (
						<div className="loader"></div>
					) : (
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
					)}
				</div>
			)}

			{myData.users.length > 0 && (
				<div>
					<div className="page-buttons">
						<button
							style={{
								width: "4rem",
							}}
							disabled={myData.currentPage === 1 || myData.fetchingInProgress}
							onClick={() => setPage(myData.currentPage - 1)}
						>
							previous
						</button>
						{myData.totalNumberOfPages !== -1 &&
							Array(myData.totalNumberOfPages)
								.fill()
								.map((_, page) => (
									<button
										key={page}
										style={{
											backgroundColor:
												myData.currentPage === page + 1
													? "rgba(0,0,255,0.9)"
													: "",
											color: myData.currentPage === page + 1 ? "white" : "",
										}}
										disabled={
											myData.fetchingInProgress ||
											myData.currentPage === page + 1
										}
										onClick={() => setPage(page + 1)}
									>
										{page + 1}
									</button>
								))}
						<button
							style={{
								width: "4rem",
							}}
							disabled={
								myData.currentPage === myData.totalNumberOfPages ||
								myData.fetchingInProgress
							}
							onClick={() => setPage(myData.currentPage + 1)}
						>
							next
						</button>
					</div>
					<div className="user-info-text">
						<span>
							Showing results from {(myData.currentPage - 1) * 10 + 1} to{" "}
							{myData.currentPage * 10}{" "}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default APIBasic3;

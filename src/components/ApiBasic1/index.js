import React from "react";
import "./style.css";

// import { initialState, reducer } from "./ApiBasicReducer";
import useAPIReducer from "./APIReducer";

const APIBasic = () => {
	// const [myData, dispatch] = useReducer(reducer, initialState);
	const [myData, dispatch] = useAPIReducer();

	const getUserInformation = (event) => {
		dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: true });

		fetch("http://fakeapi.jsonparseronline.com/users")
			.then((res) => res.json())
			.then((json) => {
				dispatch({ type: "SET_USERS", payload: json });
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
			<h3>API Basic 1</h3>

			<button onClick={getUserInformation} disabled={myData.fetchingInProgress}>
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
		</div>
	);
};

export default APIBasic;

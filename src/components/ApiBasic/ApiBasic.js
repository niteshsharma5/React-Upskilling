import React, { useState } from "react";
import "./ApiBasic.css";

const ApiBasic = () => {
	const [users, setUsers] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const getUserInformation = (event) => {
		event.preventDefault();

		fetch("http://fakeapi.jsonparseronline.com/users")
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setDataIsLoaded(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h3>API Basic</h3>
			<button onClick={getUserInformation}>Fetch data</button>
			<div className="display-details">
				{dataIsLoaded && (
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
		</div>
	);
};

export default ApiBasic;

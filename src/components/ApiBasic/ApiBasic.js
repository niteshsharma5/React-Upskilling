import React, { useState } from "react";
import "./ApiBasic.css";

const ApiBasic = () => {
	const [users, setUsers] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const getUserInformation = (event) => {
		event.preventDefault();

		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				console.log(users);
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
						<tr>
							<th>Name</th>
							<th>E-mail</th>
							<th>Phone</th>
							<th>Address</th>
							<th>Company</th>
							<th>Website</th>
						</tr>

						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>
									{user.address.street +
										" " +
										user.address.city +
										" " +
										user.address.zipcode}
								</td>
								<td>{user.company.name}</td>
								<td>{user.website}</td>
							</tr>
						))}
					</table>
				)}
			</div>
		</div>
	);
};

export default ApiBasic;

import React, { useState } from "react";
import "./ApiBasic.css";

const ApiBasic = () => {
	const [users, setUsers] = useState([]);

	const getUserInformation = (event) => {
		event.preventDefault();

		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setUsers(json);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h3>API Basic</h3>
			<button onClick={getUserInformation}>Fetch data</button>
			<div>
				<table>
					{users.length > 0 && (
							<tr>
								<th>Name</th>
								<th>E-mail</th>
								<th>Phone</th>
								<th>Address</th>
								<th>Company</th>
								<th>Month</th>
							</tr>
						) &&
						users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.address}</td>
								<td>{user.company}</td>
							</tr>
						))}
				</table>
			</div>
		</div>
	);
};

export default ApiBasic;

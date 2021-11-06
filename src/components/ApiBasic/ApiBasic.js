import React, { useState } from "react";
import "./ApiBasic.css";

const ApiBasic = () => {
	const [users, setUsers] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setUsers(json);
				setDataIsLoaded(true);
			});
	};

	return (
		<div className="main_div">
			<h3>API Basic</h3>
			<form className="main_div" onSubmit={handleSubmit}>
				<button>Fetch data</button>
			</form>
			<ol>
				{/* {dataIsLoaded && */}
				{users.map((user) => {
					return (
						<li key={user.id}>
							Name: {user.name}, Email: {user.email}, Phone: {user.phone}
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default ApiBasic;

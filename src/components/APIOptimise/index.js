import React, { useEffect } from "react";
import "./style.css";

import useAPIReducer from "./APIReducer";

const APIOptimise = () => {
	const [myData, dispatch] = useAPIReducer();

	useEffect(() => {
		getUserInformation();
	}, [myData.userId]);

	const handleUserIdChange = (event) => {
		event.preventDefault();
		console.log(typeof event.target.value);

		if (event.target.value && event.target.value !== "") {
			dispatch({ type: "SET_USER_ID", payload: event.target.value });
		}
	};

	const getUserInformation = () => {
		const url = `http://fakeapi.jsonparseronline.com/users?_delay=3000&id=${myData.userId}`;

		dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: true });
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				dispatch({ type: "SET_USER_DATA", payload: json[0] });
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
			<h3>API Optimise</h3>

			<label>
				User Id:
				<input type="number" onChange={handleUserIdChange}></input>
			</label>

			<div className="display-details">
				{myData.fetchingInProgress && <div className="loader"></div>}
				{!myData.fetchingInProgress && myData.userId !== -1 && myData.userData && (
					<div className="display-values">
						<h4>User details with user Id {myData.userId} are: </h4>
						<div className="display-detail">
							<div className="display-label">
								<label>
									<b>Name: </b>
								</label>
							</div>
							<div>
								<span>
									{myData.userData.firstName + " " + myData.userData.lastName}
								</span>
							</div>
						</div>
						<div className="display-detail">
							<div className="display-label">
								<label>
									<b>E-mail: </b>
								</label>
							</div>
							<div>
								<span>{myData.userData.email}</span>
							</div>
						</div>
						<div className="display-detail">
							<div className="display-label">
								<span>
									<b>Age: </b>
								</span>
							</div>
							<div>
								<span>{myData.userData.age}</span>
							</div>
						</div>
						<div className="display-detail">
							<div className="display-label">
								<span>
									<b>Gender: </b>
								</span>
							</div>
							<div>
								<span>{myData.userData.gender}</span>
							</div>
						</div>
						<div className="display-detail">
							<div className="display-label">
								<span>
									<b>Address: </b>
								</span>
							</div>
							<div>
								<span>
									{myData.userData.address.house +
										", " +
										myData.userData.address.street +
										", " +
										myData.userData.address.city +
										", " +
										myData.userData.address.zipcode +
										", " +
										myData.userData.address.country}
								</span>
							</div>
						</div>
						<div className="display-detail">
							<div className="display-label">
								<span>
									<b>Phone: </b>
								</span>
							</div>
							<div>
								<span>{myData.userData.phone}</span>
							</div>
						</div>
						<div className="display-detail">
							<div className="display-label">
								<span>
									<b>Website: </b>
								</span>
							</div>
							<div>
								<span>{myData.userData.website}</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default APIOptimise;

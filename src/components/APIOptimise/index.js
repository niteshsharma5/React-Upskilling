import React, { useEffect, useState } from "react";
import "./style.css";

import useAPIReducer from "./APIReducer";

const useFetchUserData = (userId) => {
	const [data, setData] = useState({});
	const [fetchingInProgress, setFetchingInProgress] = useState(false);
	const [userIdToSearch, setUserIdToSearch] = useState("");

	useEffect(() => {
		console.log(userIdToSearch);
		const url = `http://fakeapi.jsonparseronline.com/users?id=${userIdToSearch}`;

		setFetchingInProgress(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data[0]))
			.catch((err) => console.log(err))
			.finally(() => setFetchingInProgress(false));
	}, [userIdToSearch]);

	useEffect(() => {
		// if(timerId!=-1)clearTimeout(timerId);

		const timerId = setTimeout(() => {
			setUserIdToSearch(userId);
		}, 2000);

		return () => clearTimeout(timerId);
	}, [userId]);

	return [data, fetchingInProgress];
};

const APIOptimise = () => {
	const [myData, dispatch] = useAPIReducer();

	const [data, fetchingInProgress] = useFetchUserData(myData.userId);

	useEffect(() => {
		dispatch({ type: "SET_USER_DATA", payload: data });
	}, [data]);

	const handleUserIdChange = (event) => {
		// let timer;

		// if (timer) clearTimeout(timer);

		// timer = setTimeout(() => {
		// 	timer = null;
		dispatch({ type: "SET_USER_ID", payload: event.target.value });
		// }, 1000);
	};

	return (
		<div className="outer-block">
			<h3>API Optimise</h3>

			<label>
				User Id:
				<input type="number" onChange={handleUserIdChange}></input>
			</label>

			<div className="display-details">
				{fetchingInProgress && <div className="loader"></div>}

				{!fetchingInProgress && (myData.userId > 100 || myData.userId < 0) && (
					<div className="user-not-found-block">No user Found</div>
				)}

				{!fetchingInProgress && myData.userId !== 0 && myData.userData && (
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

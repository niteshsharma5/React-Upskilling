import React from "react";
import "./style.css";

import useAPIReducer from "./APIReducer";
/*
	client errors
	403 - forbidden
	404 - not found
	408 - request timeout

	server errors
	500 - internal server error
	501 - not implemented
*/
const APIDown = () => {
	const [myData, dispatch] = useAPIReducer();

	const getUserInformation = () => {
		dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: true });

		Promise.reject("Some error occured")
			.then((res) => res.json())
			.then((json) => {
				dispatch({ type: "SET_USERS", payload: json });
			})
			.catch((err) => {
				dispatch({ type: "SET_ERROR", payload: err });
			})
			.finally(() => {
				dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: false });
			});

		// setTimeout(() => {
		// 	dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: false });
		// 	dispatch({ type: "SET_ERROR", payload: "500 Internal server error" });
		// }, 4000);
	};

	return (
		<div className="outer-block">
			<h3>API Down</h3>

			<button onClick={getUserInformation} disabled={myData.fetchingInProgress}>
				{myData.fetchingInProgress ? "Loading..." : "Fetch data"}
			</button>

			<div className="display-details">
				{myData.fetchingInProgress && <div className="loader"></div>}
				{!myData.fetchingInProgress && (
					<div className="display-error">{myData.error}</div>
				)}
			</div>
		</div>
	);
};

export default APIDown;

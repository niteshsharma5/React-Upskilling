import { useReducer } from "react";

const initialState = {
	users: [],
	fetchingInProgress: false,
	currentPage: 0,
	totalNumberOfPages: -1,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USERS":
			return { ...state, users: action.payload };

		case "SET_FETCH_IN_PROGRESS":
			return { ...state, fetchingInProgress: action.payload };

		case "SET_CURRENT_PAGE":
			return { ...state, currentPage: action.payload };

		case "SET_TOTAL_NUMBER_OF_PAGES":
			return { ...state, totalNumberOfPages: action.payload };

		default:
			return state;
	}
};

const useApiReducer = () => useReducer(reducer, initialState);

export default useApiReducer;

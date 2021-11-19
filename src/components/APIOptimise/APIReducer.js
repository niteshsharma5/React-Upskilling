import { useReducer } from "react";

const initialState = {
	userId: 0,
	userData: {},
	fetchingInProgress: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER_DATA":
			return { ...state, userData: action.payload };

		case "SET_FETCH_IN_PROGRESS":
			return { ...state, fetchingInProgress: action.payload };

		case "SET_USER_ID":
			return { ...state, userId: action.payload };

		default:
			return state;
	}
};

const useApiReducer = () => useReducer(reducer, initialState);

export default useApiReducer;

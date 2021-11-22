import { useReducer } from "react";

const initialState = {
	users: [],
	fetchingInProgress: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USERS":
			return { ...state, users: [...state.users, action.payload] };

		case "RESET_USERS":
			return { ...state, users: [] };

		case "SET_FETCH_IN_PROGRESS":
			return { ...state, fetchingInProgress: action.payload };

		default:
			return state;
	}
};

const useApiReducer = () => useReducer(reducer, initialState);

export default useApiReducer;

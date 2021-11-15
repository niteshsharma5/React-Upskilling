import { useReducer } from "react";

const initialState = {
	users: [],
	fetchingInProgress: false,
	error: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USERS":
			return { ...state, users: action.payload };

		case "SET_FETCH_IN_PROGRESS":
			return { ...state, fetchingInProgress: action.payload };

		case "SET_ERROR":
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

// export { initialState, reducer };   ---> 2nd way to export other than inline export

const useApiReducer = () => useReducer(reducer, initialState);

export default useApiReducer;

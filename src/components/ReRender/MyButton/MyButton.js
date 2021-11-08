import React, { memo } from "react";
import "./MyButton.css";

const MyButton = ({ text }) => {
	console.log("Child renders");

	return (
		<div>
			<h6>Child Component: MyButton</h6>
			<span>{text}</span>
		</div>
	);
};

export default memo(MyButton);

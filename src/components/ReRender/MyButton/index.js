import React, { memo } from "react";
import "./style.css";

const MyButton = ({ text, count }) => {
	return (
		<div>
			<h6>Child Component: MyButton</h6>
			<span>{text}</span>
		</div>
	);
};

const bailOutFromReRendering = (prevProps, nextProps) =>
	prevProps.text === nextProps.text;

export default memo(MyButton, bailOutFromReRendering);

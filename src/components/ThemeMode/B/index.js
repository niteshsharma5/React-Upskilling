import React from "react";
import "./style.css";

import Button from "../Button";

import C from "./C";

const B = () => {
	return (
		<div className="outer-block">
			<h3>B</h3>
			<Button text="Button inside B" />
			<C />
		</div>
	);
};

export default B;

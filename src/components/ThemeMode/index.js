import React, { useState } from "react";
import "./style.css";

import Button from "./Button";

import B from "./B";

const A = () => {
	return (
		<div className="outer-block">
			<h3>A</h3>
			<Button text="Button inside A" />
			<B />
		</div>
	);
};

export default A;

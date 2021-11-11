import React, { useState } from "react";
import "./style.css";

import MyButton from "./MyButton";

const ReRender = () => {
	const [count, setCount] = useState(0);
	const [text] = useState("Hello World");

	const increment = () => setCount(count + 1);

	const decrement = () => setCount(count - 1);

	const reset = () => setCount(0);

	return (
		<div className="outer-block">
			<h3>Re-Render</h3>
			<span>{count}</span>
			<div id="counter-controls">
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</div>
			<MyButton text={text} count={count} />
		</div>
	);
};

export default ReRender;

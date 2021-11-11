import React, { useState } from "react";
import "./style.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);

	const decrement = () => setCount(count - 1);

	const reset = () => setCount(0);

	return (
		<div className="main outer-block">
			<h3>Counter</h3>
			<span>{count}</span>
			<div id="counter-controls">
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

export default Counter;

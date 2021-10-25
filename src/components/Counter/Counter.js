import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);

	const decrement = () => setCount(count - 1);

	const reset = () => setCount(0);

	return (
		<div className="main">
			<div>
				<h3>Counter</h3>
			</div>
			<button onClick={increment}>Increment</button>
			<span>{count}</span>
			<button onClick={decrement}>Decrement</button>
			<br />
			<button className="right_side" onClick={reset}>
				Reset
			</button>
		</div>
	);
};

export default Counter;

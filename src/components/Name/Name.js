import React, { useState } from "react";
import "./Name.css";

const Name = () => {
	const [name, setName] = useState();
	const [name1, setName1] = useState();

	const handleChange = (e) => setName(e.target.value);

	const handleChangeOnSubmit = (e) => setName1(name);

	return (
		<div className="main">
			<label>Your Name</label>
			<input
				type="text"
				placeholder="Please Enter Your Name"
				value={name}
				onChange={handleChange}
			/>
			<button onClick={handleChangeOnSubmit}>Submit</button>

			<div className="name_display">
				<p>
					<b>Hello {name}</b>
				</p>
			</div>
			<div className="name_display">
				<p>
					<b>Hello {name1}</b>
				</p>
			</div>
		</div>
	);
};

export default Name;

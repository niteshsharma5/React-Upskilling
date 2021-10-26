import React, { useState } from "react";
import "./Name.css";

const Name = () => {
	const [name, setName] = useState();
	const [name1, setName1] = useState();

	const handleChange = (e) => setName(e.target.value);

	const handleChangeOnSubmit = (e) => setName1(name);

	return (
		<div className="main">
			<h3>Name</h3>
			<label>Your Name </label>
			<input
				type="text"
				placeholder="Please Enter Your Name"
				value={name}
				onChange={handleChange}
			/>
			<button className="submit_btn" onClick={handleChangeOnSubmit}>
				Submit
			</button>
			{name.length > 0 && <div className="name_display">Hello {name}</div>}
			{name1.length > 0 && <div className="name_display">Hello {name1}</div>}
		</div>
	);
};

export default Name;

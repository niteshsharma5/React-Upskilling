import React, { useState } from "react";
import "./style.css";

const Name = () => {
	const [name, setName] = useState("");
	const [submittedName, setSubmittedName] = useState("");

	const handleChange = (e) => setName(e.target.value);

	const handleChangeOnSubmit = (e) => {
		e.preventDefault();
		setSubmittedName(name);
	};

	return (
		<div className="outer-block">
			<h3>Name</h3>
			<form id="name-controllers" onSubmit={handleChangeOnSubmit}>
				<label>Your Name </label>
				<input
					name="my-name"
					type="text"
					placeholder="Please Enter Your Name"
					value={name}
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="submit-btn"
					onClick={handleChangeOnSubmit}
				>
					Submit
				</button>
			</form>
			<div id="name-values">
				{name.length > 0 && <div className="name-display">Hello {name}</div>}
				{submittedName.length > 0 && (
					<div className="name-display">Hello {submittedName}</div>
				)}
			</div>
		</div>
	);
};

export default Name;

import React, { useState } from "react";
import "./Form.css";

const Form = () => {
	const [inputs, setInputs] = useState({
		username: {
			value: "",
			error: "",
			dirty: false,
		},
		dob: {
			value: "",
			error: "",
			dirty: false,
		},
		mail: {
			value: "",
			error: "",
			dirty: false,
		},
		gender: {
			value: "",
			error: "",
			dirty: false,
		},
		mobile: {
			value: "",
			error: "",
			dirty: false,
		},
		address: {
			value: "",
			error: "",
			dirty: false,
		},
	});

	const handleChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.name;
		const fieldValue = event.target.value;

		let error = fieldValue === "" ? "Field cannot be empty" : "";

		if (fieldName === "dob") {
			error = validateDOB(fieldValue);
		}

		console.log(inputs);
		setInputs((values) => ({
			...values,
			[fieldName]: { value: fieldValue, error: error, dirty: true },
		}));
		console.log(inputs);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const validateDOB = (newDOB) => {
		const currentDate = new Date();
		const dob = new Date(newDOB);

		const timeDifferenceInSeconds =
			(currentDate.getTime() - dob.getTime()) / 1000;
		const timeDifferenceInDays = timeDifferenceInSeconds / (24 * 60 * 60);

		const age = timeDifferenceInDays / 365;

		return age < 18 ? "Age should be 18 years or more" : "";
	};

	const shouldSubmitButtonBeEnabled = () =>
		Object.values(inputs).every((input) => input.error === "" && input.dirty);

	return (
		<div>
			<h3>Form</h3>
			<form className="main-div" onSubmit={handleSubmit}>
				<div className="form-input">
					<div className="form-label">
						<label>Name:</label>
					</div>
					<input
						id="username"
						type="text"
						name="username"
						maxLength={78}
						required
						value={inputs.username.value}
						onChange={handleChange}
					/>
					{inputs.username.dirty && (
						<div className="error-message"> {inputs.username.error}</div>
					)}
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>DOB:</label>
					</div>
					<input
						type="date"
						max={new Date().toISOString().slice(0, 10)}
						name="dob"
						required
						onChange={handleChange}
					/>
					{inputs.dob.dirty && (
						<div className="error-message"> {inputs.dob.error}</div>
					)}
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>E-mail:</label>
					</div>

					<input type="email" name="mail" required onChange={handleChange} />
					{inputs.mail.dirty && (
						<div className="error-message"> {inputs.mail.error}</div>
					)}
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>Gender:</label>
					</div>
					<select name="gender" required onChange={handleChange}>
						<option selected disabled value="">
							Choose...
						</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Non-Binary">Non Binary</option>
						<option value="Prefer not to say">Prefer not to say</option>
					</select>
					{inputs.gender.dirty && (
						<div className="error-message"> {inputs.gender.error}</div>
					)}
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>Phone:</label>
					</div>
					<input
						type="number"
						name="mobile"
						required
						min="1000000000"
						max="9999999999"
						onChange={handleChange}
					/>
					{inputs.mobile.dirty && (
						<div className="error-message"> {inputs.mobile.error}</div>
					)}
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>Address:</label>
					</div>
					<textarea
						type="text"
						name="address"
						required
						onChange={handleChange}
					/>
					{inputs.address.dirty && (
						<div className="error-message"> {inputs.address.error}</div>
					)}
				</div>

				<div id="control-btn">
					<button disabled={!shouldSubmitButtonBeEnabled()}>Submit</button>
				</div>
			</form>

			{
				<div className="display-values">
					<h4>Your details are: </h4>
					<span>Name: {inputs.username.value}</span>
					<span>DOB: {inputs.dob.value}</span>
					<span>E-mail: {inputs.mail.value}</span>
					<span>Gender: {inputs.gender.value}</span>
					<span>Phone: {inputs.mobile.value}</span>
					<span>Address: {inputs.address.value}</span>
				</div>
			}
		</div>
	);
};

export default Form;

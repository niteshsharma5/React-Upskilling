import React, { useState } from "react";
import "./style.css";

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
	const [shouldDetailsBeDisplayed, setShouldDetailsBeDisplayed] =
		useState(false);

	const handleChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.name;
		const fieldValue = event.target.value;

		let error = fieldValue === "" ? "Field cannot be empty" : "";

		if (fieldName === "dob") {
			error = validateDOB(fieldValue);
		}

		setInputs((values) => ({
			...values,
			[fieldName]: { value: fieldValue, error: error, dirty: true },
		}));

		setShouldDetailsBeDisplayed(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setShouldDetailsBeDisplayed(true);
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
		<div className="outer-block">
			<h3>Form</h3>
			<form className="form-inputs" onSubmit={handleSubmit}>
				<div className="form-input">
					<div className="form-label">
						<label>Name:</label>
					</div>
					<div>
						<input
							id="username"
							type="text"
							name="username"
							maxLength={78}
							required
							style={{ width: "200px" }}
							value={inputs.username.value}
							onChange={handleChange}
						/>
						{inputs.username.dirty && (
							<div className="error-message"> {inputs.username.error}</div>
						)}
					</div>
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>DOB:</label>
					</div>
					<div>
						<input
							style={{ width: "202px" }}
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
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>E-mail:</label>
					</div>
					<div>
						<input
							type="email"
							style={{ width: "200px" }}
							name="mail"
							required
							onChange={handleChange}
						/>
						{inputs.mail.dirty && (
							<div className="error-message"> {inputs.mail.error}</div>
						)}
					</div>
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>Gender:</label>
					</div>
					<div>
						<select
							defaultValue={"DEFAULT"}
							style={{ width: "208px" }}
							name="gender"
							required
							onChange={handleChange}
						>
							<option disabled value="DEFAULT">
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
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>Phone:</label>
					</div>
					<div>
						<input
							style={{ width: "200px" }}
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
				</div>

				<div className="form-input">
					<div className="form-label">
						<label>Address:</label>
					</div>
					<div>
						<textarea
							style={{ width: "200px", maxWidth: "200px", overflow: "hidden" }}
							type="text"
							name="address"
							required
							onChange={handleChange}
						/>
						{inputs.address.dirty && (
							<div className="error-message"> {inputs.address.error}</div>
						)}
					</div>
				</div>

				<div id="control-btn">
					<button disabled={!shouldSubmitButtonBeEnabled()}>Submit</button>
				</div>
			</form>

			{shouldDetailsBeDisplayed && (
				<div className="display-values">
					<h4>Your details are: </h4>
					<div className="display-detail">
						<div className="display-label">
							<label>Name: </label>
						</div>
						<div>
							<span>{inputs.username.value}</span>
						</div>
					</div>
					<div className="display-detail">
						<div className="display-label">
							<label>DOB: </label>
						</div>
						<div>
							<span>{inputs.dob.value}</span>
						</div>
					</div>
					<div className="display-detail">
						<div className="display-label">
							<span>E-mail: </span>
						</div>
						<div>
							<span>{inputs.mail.value}</span>
						</div>
					</div>
					<div className="display-detail">
						<div className="display-label">
							<span>Gender: </span>
						</div>
						<div>
							<span>{inputs.gender.value}</span>
						</div>
					</div>
					<div className="display-detail">
						<div className="display-label">
							<span>Phone: </span>
						</div>
						<div>
							<span>{inputs.mobile.value}</span>
						</div>
					</div>
					<div className="display-detail">
						<div className="display-label">
							<span>Address: </span>
						</div>
						<div>
							<span>{inputs.address.value}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Form;

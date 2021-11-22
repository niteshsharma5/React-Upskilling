import React, { useState, useEffect } from "react";
import "./style.css";

const useClock = () => {
	const date = new Date();

	const [hours, setHours] = useState(date.getHours());
	const [minutes, setMinutes] = useState(date.getMinutes());
	const [seconds, setSeconds] = useState(date.getSeconds());

	useEffect(() => {
		const id = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	useEffect(() => {
		if (seconds === 60) {
			setSeconds(0);
			setMinutes((minutes) => minutes + 1);
		}
	}, [seconds]);

	useEffect(() => {
		if (minutes === 60) {
			setMinutes(0);
			setHours((hours) => (hours + 1) % 24);
		}
	}, [minutes]);

	return [hours, minutes, seconds];
};

const DigitalClock = () => {
	const [hours, minutes, seconds] = useClock();

	return (
		<div className="main outer-block">
			<h3>Digital Clock</h3>
			<span>
				{hours % 12 < 10 ? "0" : ""}
				{hours % 12}: {minutes < 10 ? "0" : ""}
				{minutes}: {seconds < 10 ? "0" : ""}
				{seconds}
				{hours < 12 ? " AM" : " PM"}
			</span>
		</div>
	);
};

export default DigitalClock;

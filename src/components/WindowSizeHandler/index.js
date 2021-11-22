import React, { useState, useEffect } from "react";
import "./style.css";

const useWindowSizeHandler = () => {
	const [windowSizeInformation, setWindowSizeInformation] = useState();

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			if (width < 150) {
				setWindowSizeInformation("Too small width. Expand the window");
			} else if (width < 700) {
				setWindowSizeInformation(
					"Perfect width. Shrink/Expand window to see what happens"
				);
			} else {
				setWindowSizeInformation("Too big width. Shrink the window");
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSizeInformation;
};

const WindowSizeHandler = () => {
	const xyz = useWindowSizeHandler();

	return (
		<div className="main outer-block">
			<h3>Window Size Handler</h3>
			<span>{xyz ? xyz : "Try resizing window width to see the effects"}</span>
		</div>
	);
};

export default WindowSizeHandler;

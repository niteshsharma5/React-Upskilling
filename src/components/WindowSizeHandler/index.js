import React, { useState, useEffect } from "react";
import "./style.css";

const useWindowSizeHandler = () => {
	const [windowSizeInformation, setWindowSizeInformation] = useState();
	const [windowWidth, setWindowWidth] = useState();

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			setWindowWidth(width);

			if (width < 300) {
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

	return [windowWidth, windowSizeInformation];
};

const WindowSizeHandler = () => {
	const [windowWidth, windowWidthInformation] = useWindowSizeHandler();

	return (
		<div className="main outer-block">
			<h3>Window Size Handler</h3>
			<span>
				{windowWidthInformation
					? windowWidthInformation
					: "Try resizing window width to see the effects"}
			</span>
			,<span>{windowWidth}</span>
		</div>
	);
};

export default WindowSizeHandler;

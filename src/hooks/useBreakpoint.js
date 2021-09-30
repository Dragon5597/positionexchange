import React, { useState, useEffect } from "react";

const useBreakpoint = () => {
	const [widthScreen, setWidthScreen] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => setWidthScreen(window.innerWidth));
	}, []);

	const breakpoint = widthScreen < 600 ? "mobile" : "desktop";

	return breakpoint;
};

export default useBreakpoint;

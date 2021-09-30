import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import track from "../../utils/analytics";

const Statistic = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		track.pageView({
			page_path: pathname
		});
	}, [pathname]);

	return <div>Day la statistic</div>;
};

export default Statistic;

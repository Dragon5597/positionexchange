import React from "react";
import { Link } from "react-router-dom";
import "../scss/notfound.scss";

const NotFound = () => {
	return (
		<div className="not-found">
			<p>Not Found | 404 Page</p>
			<Link to="/" className="back-home">
				<button className="btn-back">Back Home</button>
			</Link>
		</div>
	);
};

export default NotFound;

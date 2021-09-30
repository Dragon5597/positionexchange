import React from "react";
import PropTypes from "prop-types";

const Background = ({ image, title, description, height }) => {
	return (
		<div>
			<div className="bg-parallax py-5 mb-4" style={{ height: height }}>
				<span className="bg-overlay" style={{ opacity: 0.2 }}></span>
				<div className="bg-parallax-img" data-parallax='{"y" : -100}'>
					<img src={image} alt="Parallax Background" />
				</div>
				<div
					className="bg-parallax-content px-4 py-5 mx-auto mt-4 mb-2 text-left"
					style={{ maxWidth: "600px" }}
				>
					<h2 className="text-light"> {title}</h2>
					<p className="text-light font-20">{description}</p>
				</div>
			</div>
		</div>
	);
};

Background.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.node
};

Background.defaultProps = {
	height: "400px"
};

export default Background;

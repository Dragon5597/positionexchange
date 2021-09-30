import React from "react";
import PropTypes from "prop-types";

const MediaObject = ({ image, title, description }) => {
	return (
		<div className="media py-4 row">
			<div className="media-body text-center align-self-center px-3 col-xs-12 col-md-6">
				<h4 className="mt-0 mb-1">{title}</h4>
				<span className="d-block text-muted text-justify py-3 font-16">{description}</span>
			</div>
			<img className="d-flex align-self-center ml-md-3 col-xs-12 col-md-6" src={image} width="700" alt="Media" />
		</div>
	);
};

MediaObject.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.node
};

export default MediaObject;
